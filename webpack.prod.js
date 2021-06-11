/* eslint-disable no-undef */
/* eslint @typescript-eslint/no-var-requires: "off" */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [`...`, new CssMinimizerPlugin()],
	},
});
