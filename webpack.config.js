/* eslint-env node */
var path = require('path'),
    extractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack');

var config = {
    mode: 'development',
    entry: {
        main: ['./src/MusicFestival.React.Template/Assets/Styles/Main.less', './src/MusicFestival.React.Template/Assets/Scripts/index.js']
    },
    output: {
        path: path.resolve(__dirname, './src/MusicFestival.React.Template/Assets/bundled/'),
        publicPath: '/src/MusicFestival.React.Template/Assets/bundled/',
        filename: '[name].bundle.js'
    },
    plugins: [
        new extractTextPlugin('[name].bundle.css'), // save the css as external files instead of bundling them into the javascripts
        new webpack.WatchIgnorePlugin([/node_modules/]), // turn off watcher for node_modules and our vueImports.js file created above
        new webpack.LoaderOptionsPlugin({ options: {} }),
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
        //     vue: 'vue/dist/vue.js',
            '@': path.join(__dirname, 'src/MusicFestival.React.Template/Assets')
        }
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: extractTextPlugin.extract({
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            // If you are having trouble with urls not resolving add this setting.
                            // See https://github.com/webpack-contrib/css-loader#url
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            })
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.svg$/,
            exclude: /node_modules/,
            use: [
                { loader: 'svg-sprite-loader' }
            ]
        },
        {
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            loader: 'url-loader',
            exclude: /node_modules/,
            options: {
                limit: 10000
            }
        },
        // {
        //     test: /\.(js|jsx)$/,
        //     exclude: /node_modules/,
        //     loader: 'eslint-loader',
        //     options: {
        //         configFile: '.eslintrc.js'
        //     }
        // }
        ]
    },
    stats: {
        children: false,
        colors: true
    },
    devtool: 'source-map',
    watchOptions: {

    }
};

if (process.env.NODE_ENV === 'production') {
    // stuff that should only happen when doing a production build
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        parallel: {
            cache: true,
            workers: 2
        },
        sourceMap: true,
        mangle: true,
        compress: {
            warnings: false,
            pure_getters: true,
            unsafe: true,
            unsafe_comps: false, // breaks some minification, so turned off!
            screw_ie8: true,
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: true
        },
        output: {
            comments: false
        }
    }));
}

module.exports = config;
