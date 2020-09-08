const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry : {
        main : "./src/index.js",
        vendor : "./src/vendor.js"
    },    
    module : {
        rules : [
            
            {
                test : /\.html$/,
                use : ["html-loader"]
            },
            {
                test : /\.(png|svg|jpg|jpeg|gif)$/,
                use : {
                    loader : "file-loader",
                    options: {
                        name : "[name].[hash].[ext]",
                        outputPath : "images"
                    }
                    
                }
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