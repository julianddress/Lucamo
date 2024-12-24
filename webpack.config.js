const path = require('path');

module.exports = {
    entry: './src/index.tsx', // Cambia según tu archivo de entrada
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Agrega las extensiones aquí
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx|ts|tsx)$/, // Manejar archivos JS, JSX, TS y TSX
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
            },
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            use: ['file-loader'],
        },
        ],
    },
    devServer: {
        static: './dist',
    },
};
