let options = {
  env: process.env.ELEVENTY_ENV,
  permalink: data => data.page.filePathStem + '.html',
}

module.exports = options
