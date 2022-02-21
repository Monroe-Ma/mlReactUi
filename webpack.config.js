const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
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
            loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
            // configFile: './tsconfig.json', // !! WRONG
              configFile: path.resolve('./tsconfig.json'),    // CORRECT
    },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]

}