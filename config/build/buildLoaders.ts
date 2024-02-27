import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
	const typescriptLoader = {
		test: /\.tsx?$/, // Разрешает поиск по ts и tsx.
		use: 'ts-loader',
		exclude: /node_modules/, // Не учитывает node_modules.
	};

	return [
		typescriptLoader
	];
}
