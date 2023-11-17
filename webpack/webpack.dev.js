import path from 'path';
import webpack from 'webpack';
import Dotenv from 'dotenv-webpack';
const devConfig = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
    
  ],
  devtool: 'eval-source-map',
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
};
export default devConfig;