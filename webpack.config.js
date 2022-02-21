const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // mode: 'production',
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'mlReactUi',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: 'index.html'
    //     })
    // ]

}