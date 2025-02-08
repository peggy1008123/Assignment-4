
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addShortcode("card", function(classname, title, content) {
    return `<div class="card ${title}">
      <div class="planet ${classname}"></div>
      <h2 class="${title}">${title}</h2>
      <p class="${content}">${content}</p>
    </div>`;
  });
};
