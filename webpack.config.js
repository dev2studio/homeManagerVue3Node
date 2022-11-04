const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env = {}) => ({
    mode:  'development',
    entry: [
        path.resolve(__dirname, './src/index.js')
    ].filter(Boolean),
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'url-loader',
                    options: { limit: 8192 }
                }
            },

        ]
    },
    plugins: [
        new VueLoaderPlugin(),

    ],
    devServer: {
        inline: true,
        hot: true,
        stats: 'minimal',
        contentBase: __dirname,
        overlay: true,
        injectClient: false,
        disableHostCheck: true
    }
})
