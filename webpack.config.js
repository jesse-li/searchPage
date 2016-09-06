var path = require("path");
var webpack = require("webpack");
module.exports={
	entry:{
		main:"./src/js/main.js"
	},
	output:{
		path:path.join(__dirname,"./dist"),
		filename:"[name].js",
		publicPath:"dist/",
		chunkFilename : '[name].js'
	},
	// 服务器配置相关，自动刷新!
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
    },
	module: {
        // 加载器
        loaders: [
        // 解析.vue文件
            { test: /\.vue$/, loader: 'vue' },
        // 转化ES6的语法
            {
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      loader: 'babel', // 'babel-loader' is also a legal name to reference
		      query: {
		        presets: ['es2015']
		      }
   			},
        // 编译css并自动添加css前缀
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
        //.scss 文件想要编译，scss就需要这些东西！来编译处理
        //install css-loader style-loader sass-loader node-sass --save-dev
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
        // 图片转化，小于8K自动转化为base64的编码
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192&name=images/[name].[ext]'},
        //html模板编译？
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
        ]
    },
    plugins:[
	    new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false
		    }
		})
    ],
    devtool: '#source-map'
}
