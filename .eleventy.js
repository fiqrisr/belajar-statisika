const yaml = require('js-yaml');
const { DateTime } = require('luxon');
const markdownIt = require('markdown-it');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginSEO = require('eleventy-plugin-seo');
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const typesetPlugin = require('eleventy-plugin-typeset');

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(pluginSEO, require('./src/site/_data/seo.json'));
	eleventyConfig.addPlugin(lazyImagesPlugin, {
		transformImgPath: (imgPath) =>
			imgPath.replace('/assets/images/', './src/site/assets/images/'),
	});
	eleventyConfig.addPlugin(
		typesetPlugin({
			only: '.article-body',
			disable: ['hyphenate'],
		})
	);

	eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents));

	eleventyConfig.addFilter('htmlDateString', (dateObj) => {
		return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd');
	});

	eleventyConfig.addFilter(
		'relativeUrl',
		(page, root = '/') => `${require('path').relative(page.filePathStem, root)}/`
	);

	eleventyConfig.addPassthroughCopy('src/site/admin');
	eleventyConfig.addPassthroughCopy('src/site/assets');

	const md = markdownIt({
		breaks: true,
		linkify: true,
	})
		.use(require('markdown-it-footnote'))
		.use(require('markdown-it-attrs'));

	eleventyConfig.setLibrary('md', md);

	md.renderer.rules.footnote_block_open = (tokens, idx, options) => {
		return (
			(options.xhtmlOut
				? '<hr class="footnotes-sep" data-content="footnotes" />\n'
				: '<hr class="footnotes-sep" data-content="footnotes">\n') +
			'<section class="footnotes">\n' +
			'<ol class="footnotes-list">\n'
		);
	};

	return {
		htmlTemplateEngine: 'njk',
		pathPrefix: '/',
		dir: {
			input: 'src/site',
			includes: '_includes',
			layouts: '_includes/layouts',
		},
	};
};
