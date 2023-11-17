import path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: path.resolve(
        __dirname,
        '..',
        '..',
        './dist/report.html'
      ),
      openAnalyzer: false,
    }),
  ],
};