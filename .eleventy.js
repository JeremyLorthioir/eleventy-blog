/* Config file */
module.exports = function(eleventyConfig) {

    // Ce dossier est cloné lors du build
    eleventyConfig.addPassthroughCopy("./src/assets/img");
    eleventyConfig.addPassthroughCopy("./src/assets/css");

    return {
      dir: {
          input: "src",
          output: "dist"
      }
    }
};