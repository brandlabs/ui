const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './index.js',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
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
    output: {
        filename: 'ui.js',
        path: path.resolve(__dirname, 'dist'),
        library: '',
        libraryTarget: 'commonjs',
    },
    plugins: [new VueLoaderPlugin()],
    watch: false,
};
