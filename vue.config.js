const path = require("path");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  lintOnSave: true,
  publicPath: "./",
  transpileDependencies: true,
  css: {
    // Extract CSS in development mode as well, to be used by editor
    extract: true,
  },
  chainWebpack: (config) => {
    config.output.library({
      name: "MyLibrary",
      type: "assign-properties",
    });

    config.entryPoints.clear();
    config.entry("MyLibrary.Player").add("./src/player/main.js").end();
    config.entry("MyLibrary.Editor").add("./src/editor/main.js").end();
  },
};
