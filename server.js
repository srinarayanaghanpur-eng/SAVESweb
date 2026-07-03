const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT) || 8000;
const host = "127.0.0.1";
const maxBodySize = 1024 * 1024;

const submissionFiles = {
  admissions: process.env.ADMISSIONS_FILE
    ? path.resolve(root, process.env.ADMISSIONS_FILE)
    : path.join(root, "data", "admission-enquiries.json"),
  careers: process.env.CAREERS_FILE
    ? path.resolve(root, process.env.CAREERS_FILE)
    : path.join(root, "data", "teacher-job-enquiries.json"),
  contact: process.env.CONTACT_FILE
    ? path.resolve(root, process.env.CONTACT_FILE)
    : path.join(root, "data", "contact-enquiries.json"),
};

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".mp4": "video/mp4",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

const rangeEnabledTypes = new Set([".jpg", ".jpeg", ".png", ".webp", ".mp4"]);

function isPathInsideRoot(filePath) {
  const relativePath = path.relative(root, filePath);
  return relativePath && !relativePath.startsWith("..") && !path.isAbsolute(relativePath);
}

function staticHeaders(filePath, stat) {
  const extension = path.extname(filePath).toLowerCase();
  const isAsset = filePath.includes(`${path.sep}assets${path.sep}`);
  const headers = {
    "Content-Type": mimeTypes[extension] || "application/octet-stream",
    "Content-Length": stat.size,
    "Last-Modified": stat.mtime.toUTCString(),
    "Cache-Control": isAsset ? "public, max-age=604800" : "no-cache",
  };

  if (rangeEnabledTypes.has(extension)) {
    headers["Accept-Ranges"] = "bytes";
  }

  return headers;
}

function parseRange(rangeHeader, fileSize) {
  const match = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader || "");
  if (!match) return null;

  let start = match[1] ? Number(match[1]) : 0;
  let end = match[2] ? Number(match[2]) : fileSize - 1;

  if (!match[1] && match[2]) {
    const suffixLength = Number(match[2]);
    start = Math.max(fileSize - suffixLength, 0);
    end = fileSize - 1;
  }

  if (
    Number.isNaN(start) ||
    Number.isNaN(end) ||
    start < 0 ||
    end >= fileSize ||
    start > end
  ) {
    return null;
  }

  return { start, end };
}

function sendStaticFile(request, response, filePath) {
  fs.stat(filePath, (error, stat) => {
    if (error || !stat.isFile()) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    const headers = staticHeaders(filePath, stat);
    const range = headers["Accept-Ranges"] ? parseRange(request.headers.range, stat.size) : null;

    if (request.headers.range && !range) {
      response.writeHead(416, {
        "Content-Range": `bytes */${stat.size}`,
      });
      response.end();
      return;
    }

    if (range) {
      response.writeHead(206, {
        ...headers,
        "Content-Length": range.end - range.start + 1,
        "Content-Range": `bytes ${range.start}-${range.end}/${stat.size}`,
      });

      if (request.method === "HEAD") {
        response.end();
        return;
      }

      fs.createReadStream(filePath, range).pipe(response);
      return;
    }

    response.writeHead(200, headers);

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    fs.createReadStream(filePath).pipe(response);
  });
}

function sendJson(response, statusCode, data) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(data));
}

function sendSuccessPage(response, title, message) {
  response.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });
  response.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body { margin: 0; font-family: Arial, sans-serif; color: #12151c; background: #f5f6f1; display: grid; min-height: 100vh; place-items: center; padding: 24px; }
    main { max-width: 560px; padding: 32px; border: 1px solid #dfe4dc; border-radius: 8px; background: white; box-shadow: 0 18px 50px rgba(18, 21, 28, 0.14); }
    h1 { margin: 0 0 12px; color: #0f6f71; }
    p { margin: 0 0 22px; line-height: 1.6; }
    a { display: inline-flex; min-height: 44px; align-items: center; padding: 0 18px; border-radius: 6px; color: #12151c; background: #f6c85f; font-weight: 800; text-decoration: none; }
  </style>
</head>
<body>
  <main>
    <h1>${title}</h1>
    <p>${message}</p>
    <a href="/">Back to website</a>
  </main>
</body>
</html>`);
}

function readRequestBody(request, response, callback) {
  let body = "";
  let tooLarge = false;

  request.on("data", (chunk) => {
    body += chunk;

    if (body.length > maxBodySize) {
      tooLarge = true;
      sendJson(response, 413, { error: "Submission is too large." });
      request.destroy();
    }
  });

  request.on("end", () => {
    if (!tooLarge) {
      callback(body);
    }
  });
}

function parseSubmission(request, rawBody) {
  const contentType = request.headers["content-type"] || "";

  if (contentType.includes("application/json")) {
    return JSON.parse(rawBody || "{}");
  }

  return Object.fromEntries(new URLSearchParams(rawBody));
}

function cleanText(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function baseRecord(type) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    submittedAt: new Date().toISOString(),
  };
}

function normalizeAdmission(data) {
  return {
    ...baseRecord("admission"),
    studentName: cleanText(data.studentName, 120),
    parentName: cleanText(data.parentName, 120),
    className: cleanText(data.className, 40),
    sectionName: cleanText(data.sectionName, 40),
    mobileNumber: cleanText(data.mobileNumber, 30),
    emailAddress: cleanText(data.emailAddress, 160),
    studentAddress: cleanText(data.studentAddress, 500),
    campusNeed: cleanText(data.campusNeed, 80),
    message: cleanText(data.message, 800),
  };
}

function normalizeCareer(data) {
  return {
    ...baseRecord("teacher-job"),
    applicantName: cleanText(data.applicantName, 120),
    mobileNumber: cleanText(data.mobileNumber, 30),
    emailAddress: cleanText(data.emailAddress, 160),
    qualification: cleanText(data.qualification, 160),
    subjectExpertise: cleanText(data.subjectExpertise, 160),
    experience: cleanText(data.experience, 80),
    preferredRole: cleanText(data.preferredRole, 120),
    joiningWindow: cleanText(data.joiningWindow, 120),
    message: cleanText(data.message, 800),
  };
}

function normalizeContact(data) {
  return {
    ...baseRecord("contact"),
    visitorName: cleanText(data.visitorName, 120),
    mobileNumber: cleanText(data.mobileNumber, 30),
    emailAddress: cleanText(data.emailAddress, 160),
    enquiryType: cleanText(data.enquiryType, 100),
    message: cleanText(data.message, 800),
  };
}

function saveRecord(filePath, record) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  let records = [];
  if (fs.existsSync(filePath)) {
    const currentData = fs.readFileSync(filePath, "utf8");
    records = JSON.parse(currentData || "[]");
  }

  records.push(record);
  fs.writeFileSync(filePath, `${JSON.stringify(records, null, 2)}\n`);
}

function handleSubmission(request, response, options) {
  readRequestBody(request, response, (rawBody) => {
    const wantsJson = (request.headers.accept || "").includes("application/json");

    try {
      const record = options.normalize(parseSubmission(request, rawBody));
      const missingFields = options.requiredFields.filter((field) => !record[field]);

      if (missingFields.length > 0) {
        sendJson(response, 400, {
          error: "Please fill all required fields.",
          missingFields,
        });
        return;
      }

      saveRecord(options.filePath, record);

      if (wantsJson) {
        sendJson(response, 200, {
          ok: true,
          id: record.id,
        });
        return;
      }

      sendSuccessPage(response, options.successTitle, options.successMessage);
    } catch (error) {
      sendJson(response, 500, {
        error: options.errorMessage,
      });
    }
  });
}

const submissionRoutes = {
  "/api/admissions": {
    filePath: submissionFiles.admissions,
    normalize: normalizeAdmission,
    requiredFields: ["studentName", "parentName", "className", "sectionName", "mobileNumber"],
    successTitle: "Admission enquiry submitted",
    successMessage: "Thank you. The school team will contact you soon.",
    errorMessage: "Unable to save admission enquiry.",
  },
  "/api/careers": {
    filePath: submissionFiles.careers,
    normalize: normalizeCareer,
    requiredFields: ["applicantName", "mobileNumber", "qualification", "subjectExpertise", "preferredRole"],
    successTitle: "Teacher job enquiry submitted",
    successMessage: "Thank you. The school team will review your details and contact you soon.",
    errorMessage: "Unable to save teacher job enquiry.",
  },
  "/api/contact": {
    filePath: submissionFiles.contact,
    normalize: normalizeContact,
    requiredFields: ["visitorName", "mobileNumber", "enquiryType", "message"],
    successTitle: "Enquiry submitted",
    successMessage: "Thank you. The school office will contact you soon.",
    errorMessage: "Unable to save contact enquiry.",
  },
};

const server = http.createServer((request, response) => {
  let urlPath = decodeURIComponent(request.url.split("?")[0]);

  if (request.method === "POST" && submissionRoutes[urlPath]) {
    handleSubmission(request, response, submissionRoutes[urlPath]);
    return;
  }

  if (urlPath === "/") {
    urlPath = "/index.html";
  }

  const filePath = path.normalize(path.join(root, urlPath));
  if (!isPathInsideRoot(filePath)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405);
    response.end("Method not allowed");
    return;
  }

  sendStaticFile(request, response, filePath);
});

server.listen(port, host, () => {
  console.log(`School website running at http://${host}:${port}/`);
});
