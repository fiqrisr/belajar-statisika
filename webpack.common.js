const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = {
	entry: path.resolve(__dirname, 'src/scripts/index.js'),
	output: {
		path: path.resolve(__dirname, '_site'),
	},
	module: {
		rules: [
			{
				test: /\.css|\.s(c|a)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'resolve-url-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
				type: 'asset/resource',
				include: [path.resolve(__dirname, 'src/fonts')],
				generator: {
					filename: 'assets/fonts/[contenthash:8][ext]',
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new WebpackShellPluginNext({
			onBuildEnd: {
				scripts: [
					() => {
						fs.unlinkSync(path.resolve(__dirname, '_site/main.js'));
					},
				],
			},
		}),
	],
};
