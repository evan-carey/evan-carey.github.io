var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

var getPath = function (pathToFile) { return path.resolve(__dirname, pathToFile); }

var hasProcessFlag = function (flag) { return process.argv.join('').indexOf(flag) > -1; }

var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'build';

var HMR = hasProcessFlag('hot');

module.exports = function makeWebpackConfig() {

    var config = {};

    config.target = 'web';

    config.entry = {
        'vendor': './src/vendor.ts',
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
    };

    config.output = {
        path: getPath('./'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        publicPath: isProd ? '/' : 'http://localhost:8080/'

    };

    config.devtool = isProd ? 'source-map' : 'cheap-module-source-map';
    config.resolve = {
        extensions: ['.ts', '.js', '.json'],
        modules: [
            getPath('src'),
            getPath('node_modules')
        ]
    };
    config.module = {
        rules: [
            {
                // TS LOADER
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ng-router-loader',
                        options: {
                            loader: 'async-require',
                            genDir: 'compiled',
                            aot: false
                        }
                    },
                    'awesome-typescript-loader?{configFileName: "tsconfig.json"}',
                    'angular2-template-loader'
                ],
                include: [
                    getPath("src")
                ],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                // JS LOADER
                test: /\.js$/,
                use: 'babel-loader',
                include: [
                    getPath("src")
                ]
            },
            {
                // JSON LOADER
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                // CSS
                test: /\.css$/,
                use: isProd ?
                    ExtractTextPlugin.extract({
                        fallbackLoader: 'style-loader',
                        loader: [
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 1
                                }
                            },
                            'postcss-loader'
                        ]

                    }) : [
                        'style-loader',
                        'css-loader'
                    ]
            },
            {
                // SCSS - all css outside of src/app will be bundled in an external css file
                test: /\.scss$/,
                include: getPath("src/style"),
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        { loader: 'css-loader', options: { importLoaders: 2 } },
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                // SCSS - all css in src/app files will be merged into js files
                test: /\.scss$/,
                include: getPath("src/app"),
                use: isProd ?
                    ExtractTextPlugin.extract({
                        fallbackLoader: 'style-loader',
                        loader: [
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 2
                                }
                            },
                            'postcss-loader',
                            'sass-loader'
                        ]
                    }) :
                    [
                        'to-string-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        'sass-loader'
                    ]
            },
            {
                // ASSET LOADER
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file-loader?name=assets/[name].[ext]'
            },
            {
                // HTML LOADER
                test: /\.html$/,
                use: 'raw-loader',
                exclude: /(index)/
            }
        ]
    };

    config.plugins = [
        // Create separate CSS file
        new ExtractTextPlugin('css/[name].css'),

        new CommonsChunkPlugin({
            name: 'polyfills',
            chunks: ['polyfills']
        }),

        new CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['vendor'],
            minChunks: module => /node_modules\//.test(module.resource)
        }),

        new CommonsChunkPlugin({
            name: ['polyfills', 'vendor'].reverse()
        }),

        new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
            getPath('src'),
            {
                // angular async route paths relative to root directory
            }
        ),

        new HtmlWebpackPlugin({
            template: getPath('./src/index.html'),
            inject: 'body',
            chunksSortMode: 'dependency'
        }),

        new LoaderOptionsPlugin({
            options: {
                tslint: {
                    emitErrors: false,
                    failOnHint: false
                }
            },

            // PostCSS
            // postcss: [
            //     autoprefixer({ browsers: ['last 2 version'] })
            // ]
        })
    ];

    if (isProd) {
        config.plugins.push(


            // Minifiy all JS, switch loaders to minimizing mode
            new UglifyJsPlugin({
                beautify: false,
                sourceMap: true,
                output: {
                    comments: false
                },
                mangle: {
                    screw_ie8: true
                },
                compress: {
                    screw_ie8: true,
                    warnings: false,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true,
                    negate_iife: false
                }
            }),

            new webpack.DefinePlugin({
                '__ENV__': {
                    'ENV': JSON.stringify('production'),
                    'PROD': JSON.stringify(true),
                    'DEV': JSON.stringify(false)
                }
            })
        );
    } else {
        config.plugins.push(
            new webpack.DefinePlugin({
                '__ENV__': {
                    'ENV': JSON.stringify('development'),
                    'PROD': JSON.stringify(false),
                    'DEV': JSON.stringify(true)
                }
            })
        )
    }

    // Dev server configuration
    config.devServer = {
        hot: HMR,
        port: 8080,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    };

    return config;
};