const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        dynamicTab: './src/bigcommerce/dynamic-tab.vue',
        specsTable: './src/bigcommerce/specs-table.vue',
    },
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
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new VueLoaderPlugin()],
    watch: false,
};
