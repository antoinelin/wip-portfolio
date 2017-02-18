/* eslint-disable */
const webpack            = require('webpack')
const path               = require('path')
const poststylus         = require('poststylus') 
const postcss            = require('postcss') 
const autoprefixer       = require('autoprefixer')
const ExtractTextPlugin  = require('extract-text-webpack-plugin')
const Clean              = require('clean-webpack-plugin')
const PathRewriterPlugin = require('webpack-path-rewriter')

const debug             = process.env.DEBUG === 'true' ? true : false
const dev               = process.env.NODE_ENV === 'DEV' ? true : false
const production        = process.env.NODE_ENV === 'PROD' ? true : false


module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: dev ? 'eval-source-map' : '',
  server: {
    port: 8000,
    url: 'localhost',
    hot: true,
    historyApiFallback: true,
  },
  entry: production ? ['./client.js'] :
    ['webpack-hot-middleware/client', './client.js'],
  output: {
    path: path.join(__dirname, '__build__'),
    filename: production ? 'client-[hash].min.js' : 'client.min.js',
    publicPath: '',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.styl$/,
        loader: production ? ExtractTextPlugin.extract('css-loader!stylus-loader') : 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=' + (dev ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:8]')
        )
      },
      {
        test: /.*\.(gif|png|jpe?g|jpg)$/i,
        loaders: [
          'url?limit=10000&name=[name].[ext]',
          'image-webpack'
        ]
      },
      { test: /\.svg(\?.*$|$)/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
      { test: /\.woff(\?.*$|$)/, loader: 'url?limit=65000&mimetype=application/font-woff&name=assets/fonts/[name]/[name].[ext]' },
      { test: /\.woff2(\?.*$|$)/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=assets/fonts/[name]/[name].[ext]' },
      { test: /\.[ot]tf(\?.*$|$)/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=assets/fonts/[name]/[name].[ext]' },
      { test: /\.eot(\?.*$|$)/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name]/[name].[ext]' },
      {
        test: /[.]html$/,
        loader: PathRewriterPlugin.rewriteAndEmit({
            name: '[name].html'
        })
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl', '.css'],
    modulesDirectories: [
      'node_modules',
      'src',
      'src/js',
    ],
  },
  stylus: {
    use: [
      poststylus([
        autoprefixer({ browsers: 'last 2 versions' }),
      ]),
      postcss ([
        autoprefixer({ browsers: 'last 2 versions' }),
      ])
    ],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      __PROD__: production,
      __DEV__: dev,
      __DEBUG__: debug
    }),
    new ExtractTextPlugin('app-[hash].css', { disable: dev }),
    new PathRewriterPlugin()
  ].concat(
    production ? [
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false, comments: false, compress: { warnings: false, }, }),
      new Clean(['__build__'])
    ] : [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ]
  ),
}
