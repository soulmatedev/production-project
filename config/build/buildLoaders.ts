import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
	const cssLoaders = {
			test: /\.s[ac]ss$/i,
			use: [
				"style-loader",
				"css-loader",
				"sass-loader",
			],
		};

	const typescriptLoader = {
		test: /\.tsx?$/, // Разрешает поиск по ts и tsx.
		use: 'ts-loader',
		exclude: /node_modules/, // Не учитывает node_modules.
	};

	return [
		typescriptLoader,
		cssLoaders
	];
}
