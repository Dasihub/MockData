const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: ['@babel/polyfill', path.resolve(__dirname, 'src/index.tsx')],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/app.js',
		clean: true
	},
	devtool: 'source-map',
	devServer: {
		port: 3000,
		open: true,
		historyApiFallback: true
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html')
		})
	],
	module: {
		rules: [
			{
				test: /\.(tsx|ts)$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			},
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(css|less)$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			}
		]
	}
}
