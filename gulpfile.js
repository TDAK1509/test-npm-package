const { src, dest, series } = require("gulp");
const del = require("del");

async function removeDist(cb) {
  await del(["dist"]);
  cb();
}

function build(cb) {
  src("src/components/*.vue").pipe(dest("dist"));
  cb();
}

exports.default = series(removeDist, build);
