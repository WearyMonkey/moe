const path = require('path');

module.exports = {
    entry: {
        'index': './src/index',
        'todo': './src/todo',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'target')
    },
    devServer: {
        contentBase: __dirname,
        publicPath: '/target/',
        compress: true,
        port: 8080
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    },
    module: {
        rules: [{
            // Apply TS compilation to all TypeScript, CSS and JSON modules.
            // Including CSS modules in the TS compilation will catch use of non-existing classes.
            test: [/\.tsx?$/, /\.css$/, /\.json$/],
            exclude: [/node_modules/],
            use: {
                loader: '@canva/typescript-loader',
            },
        }]
    },
    mode: 'development'
};
