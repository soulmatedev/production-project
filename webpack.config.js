const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: "development", // Если установить "production", то будет сильно сжимать файлы.
	entry: path.resolve(__dirname, 'src'), // Cтартовая точка приложения.
	output: {
		filename: "[name].[contenthash].js", // Где будет находиться сборщик.
		path: path.resolve(__dirname, 'build'), // Путь до сборщика.
		clean: true, // Удаляет лишние файлы.
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		}),
		new webpack.ProgressPlugin(),
	]
}
