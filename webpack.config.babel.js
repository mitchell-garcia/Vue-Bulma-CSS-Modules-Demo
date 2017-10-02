import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { Configuration, NamedModulesPlugin } from 'webpack'
import * as path from 'path';

const cssLoader = {
	loader: 'css-loader',
	options: {
		modules: true,
		importLoaders: true,
		localIdentName: '[name]__[local]'
	}
};

module.exports = (env) => {
	let isProd = (env === 'production');
	
	/**
	 * @type {Configuration}
	 */
	const config = {
		output: {
			filename: '[name]-[hash].js'
		},
		resolve: {
			extensions: ['.ts', '.js', '.vue', '.json'],
			alias: {
				'@': path.resolve('src')
			}
		},
		devServer: {
			historyApiFallback: true
		},
		entry: {
			'app': './src/app.ts'
		},
		module: {
			loaders: [
				{
					test: /\.css$/,
					use: ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: [ cssLoader ]
					})
				},
				{
					test: /\.ts$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'ts-loader',
							options: {
								appendTsSuffixTo: [/\.vue$/]
							}
						},
						{
							loader: 'tslint-loader'
						}
					]
				},
				{
					test: /\.vue$/,
					loader: 'vue-loader',
					options: {
						extractCSS: isProd,
						cssModules: cssLoader.options
					}
				},
				{
					test: /\.(jpe?g|png|gif|svg)$/i,
					loaders: [
						'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
						'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
					]
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: 'src/index.html'
			}),
			new CleanWebpackPlugin(['dist']),
			new ExtractTextPlugin('[name].css'),
			new NamedModulesPlugin()
		]
	};

	return config;
};