const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getPath = pathToFile => path.resolve(__dirname, pathToFile);

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                loader: 'shader-loader',
                options: {
                    glsl: {
                        chunkPath: resolve('/glsl/chunks')
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: getPath('dist')
    },
    devServer: {
        contentBase: './dist'
    }
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Evan Carey'
    //     })
    // ]
};
