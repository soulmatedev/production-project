import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { paths, mode, isDev} = options;

	return {
		mode, // Если установить "production", то будет сильно сжимать файлы.
		entry: paths.entry, // Cтартовая точка приложения.
		output: {
			filename: "[name].[contenthash].js", // Где будет находиться сборщик.
			path: paths.build, // Путь до сборщика.
			clean: true, // Удаляет лишние файлы.
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}
