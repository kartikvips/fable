var path = require('path');

module.exports = {
    entry: './frontend/fable.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: './bundle.js',
    },
    module: {
        rules: [{
            test: [/\.jsx?$/],
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react']
                }
            },
        }],
        noParse: /node_modules\/quill\/dist/
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};