// Entry point for hosting servers that expect index.js
// This file imports and runs the actual built server
import("./dist/server/node-build.mjs")
  .then((module) => {
    console.log("Server started successfully");
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
  });
