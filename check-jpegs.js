
// check-jpegs.js — find JPEGs that sharp/libvips can't read
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

(async () => {
  const problems = [];
  for (const file of walk(process.cwd())) {
    const ext = path.extname(file).toLowerCase();
    if (ext === ".jpg" || ext === ".jpeg") {
      try {
        await sharp(file).metadata(); // throws if corrupt/unsupported
      } catch (e) {
        problems.push({ file, error: String(e) });
      }
    }
  }
  if (problems.length) {
    console.log("\nProblem JPEGs:");
    for (const p of problems) {
      console.log(`- ${p.file}\n  ${p.error}\n`);
    }
    process.exitCode = 1;
  } else {
    console.log("All JPEGs are readable by sharp/libvips.");
  }
})();
