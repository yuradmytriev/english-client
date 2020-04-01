const path = require('path');

const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isProd = process.env.NODE_ENV === 'production';

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  minify: {
    collapseWhitespace: isProd,
    removeComments: isProd,
  },
});
const cleanWebpackPlugin = new CleanWebpackPlugin();
const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  openAnalyzer: true,
  generateStatsFile: true,
  analyzerMode: 'disabled',
});
const definePlugin = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((acc, next) => {
    return { ...acc, [next]: JSON.stringify(env[next]) };
  }, {});

  // eslint-disable-next-line no-new
  return new webpack.DefinePlugin(envKeys);
};

module.exports = {
  entry: {
    main: [
      'react-hot-loader/patch',
      'babel-polyfill',
      path.resolve(__dirname, 'src/index.tsx'),
    ], // added polyfill for understand async await
  },
  output: {
    filename: 'bundle.js', // use contenthash to solve cache files problem
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // move common code to separate js file
    },
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: 'less-loader', // compiles Less to CSS
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'cache-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'cache-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [htmlPlugin, cleanWebpackPlugin, definePlugin()],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    disableHostCheck: true,
    contentBase: './dist',
    historyApiFallback: true,
    compress: true,
    hotOnly: true,
    liveReload: false,
    noInfo: true,
    onListening(server) {
      const { port } = server.listeningApp.address();
      console.log('Listening on port:', port);
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'], // help resolve path for files index.js -> index
    modules: ['node_modules', 'src'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};
