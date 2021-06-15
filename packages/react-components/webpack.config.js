// [object Object]
// SPDX-License-Identifier: Apache-2.0

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

module.exports = {
  cache: false,
  devtool: 'source-map',
  entry: './src/index',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.(s[ac]|c)ss$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1
            }
          },
          'sass-loader'
        ]
      },
      {
        include: /node_modules/,
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          require.resolve('css-loader')
        ]
      },
      {
        exclude: /(node_modules)/,
        test: /\.(js|mjs|ts|tsx)$/,
        use: [
          require.resolve('thread-loader'),
          {
            loader: require.resolve('babel-loader'),
            options: require('@polkadot/dev/config/babel-config-webpack.cjs')
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          require.resolve('html-loader'),
          require.resolve('markdown-loader')
        ]
      },
      {
        exclude: [/semantic-ui-css/],
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              esModule: false,
              limit: 10000,
              name: 'static/[name].[contenthash:8].[ext]'
            }
          }
        ]
      },
      {
        exclude: [/semantic-ui-css/],
        test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              esModule: false,
              name: 'static/[name].[contenthash:8].[ext]'
            }
          }
        ]
      },
      {
        include: [/semantic-ui-css/],
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
        use: [
          {
            loader: require.resolve('null-loader')
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: false
  },
  output: {
    publicPath: 'http://localhost:3002/'
  },
  plugins: [
    new ModuleFederationPlugin({
      exposes: {},
      remotes: {
        home: 'home@http://localhost:3002/remoteEntry.js',
        nav: 'nav@http://localhost:3002/remoteEntry2.js'
      },
      shared: {
        ...deps,
        react: {
          requiredVersion: deps.react,
          singleton: true
        },
        'react-dom': {
          requiredVersion: deps['react-dom'],
          singleton: true
        }
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx']
  }
};
