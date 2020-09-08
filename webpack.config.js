const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry : "./src/index.js",
    output : {
        filename : "main.[contentHash].js",
        path : path.resolve(__dirname, "dist")
    },
    mode : "development",
    devtool : "none",
    
    module : {
        rules : [
            {
                test : /\.scss$/,
                use : [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ]
            }
        ]
    },
    plugins : [ 
        new HtmlWebpackPlugin(
            {
                template : "./src/index.html"
            }
        )
    ],
}