const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = 8000;
const host = "127.0.0.1";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
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

const server = http.createServer((request, response) => {
  let urlPath = decodeURIComponent(request.url.split("?")[0]);
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
