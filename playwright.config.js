const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30000,
  use: {
    baseURL: "http://127.0.0.1:8010",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "node server.js",
    url: "http://127.0.0.1:8010/",
    env: {
      PORT: "8010",
      ADMISSIONS_FILE: ".tmp/admission-smoke.json",
    },
    reuseExistingServer: true,
    timeout: 10000,
    stdout: "pipe",
    stderr: "pipe",
  },
});
