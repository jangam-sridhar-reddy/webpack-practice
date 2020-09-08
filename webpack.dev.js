const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
module.exports = merge( common, {
    output : {
        filename : "[name].bundle.js",
        path : path.resolve(__dirname, "dist")
    },
    mode : "development",
    module : {
        rules : [
            {
                test : /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
});