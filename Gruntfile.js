const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = function exportGrunt(grunt) {
    grunt.initConfig({
        webpack: {
            options: {
                output: {
                    path: path.resolve(__dirname, 'dist'),
                    library: 'UI',
                    libraryTarget: 'umd',
                },
                module: {
                    rules: [
                        {
                            test: /\.vue$/,
                            loader: 'vue-loader',
                            options: {
                                hotReload: false,
                            },
                        },
                        {
                            test: /\.js$/,
                            exclude: /node_modules/,
                            loader: 'babel-loader',
                        },
                        {
                            test: /\.scss$/,
                            use: [
                                'vue-style-loader',
                                'css-loader',
                                'sass-loader',
                            ],
                        },
                    ],
                },
                resolve: {
                    alias: {
                        'bigcommerce-custom-fields-hierarchy': path.resolve(__dirname, 'node_modules/bigcommerce-custom-fields-hierarchy/dist/custom-fields-hierarchy.min.js')
                    }
                },
            },
            development: {
                entry: [
                    './index.js',
                ],
                output: {
                    filename: 'ui.js',
                },
                plugins: [
                    new VueLoaderPlugin(),
                ],
            },
            production: {
                entry: [
                    './index.js',
                ],
                output: {
                    filename: 'ui.min.js',
                },
                plugins: [
                    new CleanWebpackPlugin(['dist']),
                    new UglifyJsPlugin(),
                    new VueLoaderPlugin(),
                ],
            },
        },
    });

    grunt.loadNpmTasks('grunt-webpack');
    grunt.registerTask('default', ['webpack']);
};
