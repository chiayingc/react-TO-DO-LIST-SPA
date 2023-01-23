const path = require("path");
// import { path } from "path";

module.exports={
    mode:"development",  //production
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            // css 載入器
            {
                test:/\.css$/i,
                use:["style-loader", "css-loader"]
            },
            // babel 載入器
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },
    devServer:{
      port:9000,
      static:"./dist",
      allowedHosts: ['all'],
      historyApiFallback: true,
      
    },
    performance: {
      hints: false
    },
    externals:{
      fs:'commonjs fs'
    },
    devtool:'inline-source-map'
};