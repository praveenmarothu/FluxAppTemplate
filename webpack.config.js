var webpack             = require('webpack');
var path                = require('path');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');

module.exports = 
{
    context: path.join(__dirname,'src'),
    entry: 
    {
        app: './js/app/app-entry.jsx'
    },
    output:
    {
        path: path.join(__dirname,'build'),
        filename: './js/[name].js'
    },
    module: 
    {
        loaders: 
        [
            {
                test: /\.jsx$/,
                loader: "babel", 
                exclude: /node_modules/
            },
            {
                test: /\.(html|png|jpg|jpeg)$/,
                loader : "file?name=[path][name].[ext]"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass-loader')
            }
        ]
    },
    plugins: 
    [
        new ExtractTextPlugin('./css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin("./js/init.js")
    ],
    devServer:
    {
        contentBase: path.join(__dirname,'hotbuild'),  //Relative directory for base of server
        devtool: 'eval',
        hot: true,        //Live-reload
        inline: true,
        quiet: true,
        port: 3000        //Port Number
  }
};
