const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build/');
const APP_DIR = path.resolve(__dirname, 'assets/');

var config = {
    mode: 'development',
    entry: [
        `${APP_DIR}/app.js`,
        `${APP_DIR}/app.scss`
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: BUILD_DIR
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: `${APP_DIR}`,
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      presets: ['react']
                    }
                  }
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader?limit=100000',
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        })
    ]
};

module.exports = config;
