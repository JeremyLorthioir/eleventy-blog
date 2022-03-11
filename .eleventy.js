/* Config file */
module.exports = function(eleventyConfig) {

    // Ce dossier est cloné lors du build
    eleventyConfig.addPassthroughCopy("./src/assets/img");
    eleventyConfig.addPassthroughCopy("./src/assets/css");
    eleventyConfig.addPassthroughCopy("./src/assets/files");
    eleventyConfig.addPassthroughCopy("./uploads");

    return {
      dir: {
          input: "src",
          output: "dist"
      }
    }
};