const { expect, test } = require("@playwright/test");

const pages = [
  "index.html",
  "about.html",
  "branches.html",
  "aerial.html",
  "activities.html",
  "facilities.html",
  "academics.html",
  "results.html",
  "admission.html",
  "careers.html",
  "contact.html",
];

test.describe("site smoke", () => {
  test("loads every public page without desktop overflow", async ({ page }) => {
    for (const path of pages) {
      const response = await page.goto(`/${path}`);

      expect(response, `${path} should return a response`).toBeTruthy();
      expect(response.ok(), `${path} should load successfully`).toBeTruthy();
      await expect(page.locator(".site-header")).toBeVisible();
      await expect(page.locator(".site-footer")).toBeVisible();
      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator(`.nav-links a[href="${path}"]`)).toBeVisible();

      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow, `${path} should not create horizontal scrolling`).toBeLessThanOrEqual(1);
    }
  });

  test("publishes crawler discovery files", async ({ request }) => {
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBeTruthy();
    expect(sitemap.headers()["content-type"]).toContain("application/xml");
    expect(await sitemap.text()).toContain("https://sriadarshavanihighschool.netlify.app/");

    const robots = await request.get("/robots.txt");
    expect(robots.ok()).toBeTruthy();
    expect(robots.headers()["content-type"]).toContain("text/plain");
    expect(await robots.text()).toContain("Sitemap: https://sriadarshavanihighschool.netlify.app/sitemap.xml");
  });

  test("mobile navigation remains visible and tappable at 320px", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 780 });
    await page.goto("/index.html");

    const toggle = page.locator(".nav-toggle");
    const nav = page.locator(".nav-links");

    await expect(toggle).toBeVisible();
    await expect(page.locator(".brand strong")).toContainText("Sri Adarshavani");
    await expect(nav).toBeHidden();

    await toggle.click();

    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(nav).toBeVisible();

    const layout = await page.evaluate(() => ({
      innerWidth: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      links: [...document.querySelectorAll(".nav-links a")].map((link) => {
        const rect = link.getBoundingClientRect();
        return {
          text: link.textContent.trim(),
          left: rect.left,
          right: rect.right,
          height: rect.height,
          scrollWidth: link.scrollWidth,
          clientWidth: link.clientWidth,
        };
      }),
    }));

    expect(layout.scrollWidth, "mobile page should not scroll sideways").toBeLessThanOrEqual(layout.innerWidth + 1);

    for (const link of layout.links) {
      expect(link.left, `${link.text} should stay inside the viewport`).toBeGreaterThanOrEqual(0);
      expect(link.right, `${link.text} should stay inside the viewport`).toBeLessThanOrEqual(layout.innerWidth + 1);
      expect(link.height, `${link.text} should remain a comfortable tap target`).toBeGreaterThanOrEqual(40);
      expect(link.scrollWidth, `${link.text} label should fit its button`).toBeLessThanOrEqual(link.clientWidth + 1);
    }
  });

  test("admission form populates sections and submits to the local endpoint", async ({ page }) => {
    await page.goto("/admission.html");

    await page.locator("[name='studentName']").fill("Smoke Test Student");
    await page.locator("[name='parentName']").fill("Smoke Test Parent");
    await page.locator("[name='className']").selectOption("III");
    await page.locator("[name='sectionName']").selectOption("IIT");
    await page.locator("[name='mobileNumber']").fill("9999999999");
    await page.locator("[name='studentAddress']").fill("Duggondi");

    const [request] = await Promise.all([
      page.waitForRequest((request) => request.url().endsWith("/api/admissions") && request.method() === "POST"),
      page.locator("[data-submit-admission]").click(),
    ]);

    expect(request.postDataJSON()).toMatchObject({
      studentName: "Smoke Test Student",
      parentName: "Smoke Test Parent",
      className: "III",
      sectionName: "IIT",
      mobileNumber: "9999999999",
    });

    await expect(page.locator("[data-form-status]")).toContainText("Admission enquiry submitted");
  });

  test("teacher job enquiry submits to the local endpoint", async ({ page }) => {
    await page.goto("/careers.html");

    await page.locator("[name='applicantName']").fill("Smoke Test Teacher");
    await page.locator("[name='mobileNumber']").fill("9888888888");
    await page.locator("[name='qualification']").fill("B.Ed");
    await page.locator("[name='subjectExpertise']").fill("Mathematics");
    await page.locator("[name='preferredRole']").selectOption("High School Subject Teacher");
    await page.locator("[name='joiningWindow']").fill("Immediate");

    const [request] = await Promise.all([
      page.waitForRequest((request) => request.url().endsWith("/api/careers") && request.method() === "POST"),
      page.locator("[data-submit-career]").click(),
    ]);

    expect(request.postDataJSON()).toMatchObject({
      applicantName: "Smoke Test Teacher",
      mobileNumber: "9888888888",
      qualification: "B.Ed",
      subjectExpertise: "Mathematics",
      preferredRole: "High School Subject Teacher",
    });

    await expect(page.locator("[data-form-status]")).toContainText("Teacher job enquiry submitted");
  });

  test("contact enquiry submits to the local endpoint", async ({ page }) => {
    await page.goto("/contact.html");

    await page.locator("[name='visitorName']").fill("Smoke Test Parent");
    await page.locator("[name='mobileNumber']").fill("9777777777");
    await page.locator("[name='enquiryType']").selectOption("Campus Visit");
    await page.locator("[name='message']").fill("Please call back tomorrow.");

    const [request] = await Promise.all([
      page.waitForRequest((request) => request.url().endsWith("/api/contact") && request.method() === "POST"),
      page.locator("[data-submit-contact]").click(),
    ]);

    expect(request.postDataJSON()).toMatchObject({
      visitorName: "Smoke Test Parent",
      mobileNumber: "9777777777",
      enquiryType: "Campus Visit",
      message: "Please call back tomorrow.",
    });

    await expect(page.locator("[data-form-status]")).toContainText("Enquiry submitted");
  });
});
