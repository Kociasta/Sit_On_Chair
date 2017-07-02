module.exports = {
	entry: "./js/extras.js",
	output: { filename: "./js/app.js" },
	watch: true,
	module: {
        loaders: [
            {
                test: /\.js$/,  exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015'] }
            },
            {
            	test: /\.scss$/,
            	loader: ['style-loader', 'css-loader' , 'sass-loader' ]
            },
						{
						  test: /\.(jpg|png|svg)$/,
						  loader: 'url-loader',
						  options: {
						  limit: 25000,
						 	}
						}
        ]
    }
}
