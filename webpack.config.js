var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var getPath = function (pathToFile) { return path.resolve(__dirname, pathToFile); }

var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'build';

module.exports = (function makeWebpackConfig() {

    var config = {};

    config.entry = {
        'vendor': './src/vendor.ts',
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
    };

    config.output = {
        path: getPath('./'),
        filename: isProd ? '[name].js' : '[name].bundle.js',
        chunkFilename: isProd ? '[name].js' : '[name].chunk.js',
        publicPath: isProd ? '/' : 'http://localhost:8080/'

    };

    config.devtool = isProd ? 'source-map' : 'source-map';
    config.resolve = {
        extensions: ['', '.ts', '.js', '.json', '.scss', '.html']
    };
    config.module = {
        loaders: [
            {
                // TS LOADER
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                include: [
                    getPath("src")
                ]
            },
            {
                // JS LOADER
                test: /\.js$/,
                loader: 'babel',
                include: [
                    getPath("src")
                ]
            },
            {
                // JSON LOADER
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                // CSS
                test: /\.css$/,
                loader: isProd ? ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css-loader', 'postcss-loader'] }) : 'style!css'
            },
            {
                // SCSS - all css outside of src/app will be bundled in an external css file
                test: /\.scss$/,
                exclude: getPath("src/app"),
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css-loader', 'postcss-loader', 'sass-loader'] })
            },
            {
                // SCSS - all css in src/app files will be merged into js files
                test: /\.scss$/,
                include: getPath("src/app"),
                loader: isProd ? ExtractTextPlugin.extract('style', 'css!postcss!sass') : 'style!css!sass'
            },
            {
                // ASSET LOADER
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[ext]'
            },
            {
                // HTML LOADER
                test: /\.html$/,
                loader: 'raw',
                exclude: /(index)/
            }
        ]
    };

    config.postcss = [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ];


    config.plugins = [
        new CommonsChunkPlugin({
            names: [
                'vendor',
                'polyfills',
            ],
            minChunks: Infinity
        }),

        new HtmlWebpackPlugin({
            template: getPath('./src/index.html'),
            inject: 'body',
            chunksSortMode: 'dependency'
        }),

        new webpack.DefinePlugin({
            '__ENV__': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ];

    if (isProd) {
        config.plugins.push(
            // Create separate CSS file
            new ExtractTextPlugin('css/[name].css'),

            // Dedupe modules in the output
            new webpack.optimize.DedupePlugin(),

            // Minifiy all JS, switch loaders to minimizing mode
            new webpack.optimize.UglifyJsPlugin()
        );
    }

    // Dev server configuration
    config.devServer = {
        contentBase: './src'
    };

    return config;
})();