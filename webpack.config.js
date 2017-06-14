const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: __dirname + 'public',
		filename: 'app.js'
	},

	devServer:{
		port: 8080,
		contentBase: './public'
	},

	plugins:[
		new ExtractTextPlugin('app.css')
	],

	resolve:{
		extensions: [" ", ".js", ".jsx"],
		alias: {			
			modules: __dirname+'/node_modules',
			jquery: 'modules/jquery/dist/jquery/jquery.min.js',
			bootstrap: 'modules/bootstrap/dist/js/bootstrap.js',
			material: './public/js/material.min.js',
			dashboard: './public/js/material-dashboard.js',
			demo: './public/js/demo.js'
		}
	},

	module:{
		loaders:[{
			test: /.js[x]?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query:{
				presets: ['es2015', 'react'],
				plugins: ['transform-object-rest-spread']
			}
		},{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
		},{
			test: /\.woff|.woff2|.ttf|.cur|.eot|.svg|.jpg|.png*.*$/,
			loader: 'file-loader' 
		}]
	}
}