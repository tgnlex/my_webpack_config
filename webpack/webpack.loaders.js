
const loaderConfig = {
    module: {
        loaders: [
          { test: /\.xml$/, loader: 'xml-loader' }
        ],
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.ya?ml$/,
            use: 'yaml-loader'
          },
          {
            test: /\.py$/,
            loader: 'py-loader'
          },
          {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ],
          },
          {
            test: /\.graphql?$/,
            use: [
              {
                loader: 'webpack-graphql-loader',
                options: {
                   validate: true,
                  // schema: "./path/to/schema.json",
                  // removeUnusedFragments: true
                  // etc. See "Loader Options" below
                },
            },
        ],
      }
    ],
  }
}
export default loaderConfig;