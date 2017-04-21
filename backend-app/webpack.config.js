module.exports = [
  {
    "entry": {
      "home": ["./resources/assets/js/home/index.js"],
      "post": [
        "./resources/assets/js/post/index.js", "./resources/assets/js/post/show.js"
      ],
      "profile": ["./resources/assets/js/profile/index.js"],
      "contact": ["./resources/assets/js/contact/index.js"]
    },
    "output": {
      path: __dirname + '/public/dist',
      filename: '[name].bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.html$/,
          loader: 'html-loader'
        }, {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        }, {
          test: /\.scss$/,
          loader: ['style-loader', 'css-loader', 'sass-loader']
        }, {
          test: /\.sass$/,
          loader: ['style-loader', 'css-loader', 'sass-loader']
        }, {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?mimetype=image/svg+xml'
        }, {
          test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?mimetype=application/font-woff'
        }, {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?mimetype=application/font-woff'
        }, {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?mimetype=application/font-woff'
        }
      ]
    }
  }
];
