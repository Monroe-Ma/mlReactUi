const path = require('path')
module.exports = {
    entry: {
        index: './lib/index.tsx'
  },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
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
              configFile: path.resolve('./tsconfig.json'), 
    },
            }
        ]
    },
}