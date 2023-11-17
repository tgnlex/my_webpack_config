import path from 'path';
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ServiceWorkerWebpackPlugin from 'webpack-service-worker-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin';
const pluginConfig = {
    plugins: [
        new ServiceWorkerWebpackPlugin({
            entry: path.resolve(__dirname, '..', './src/sw.js'),
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello Webpack bundled JavaScript Project',
            template: path.resolve(__dirname, '..', './src/index.html'),
            filename: 'index.html'
        }),
        new BundleAnalyzerPlugin({ 
            analyzerMode: 'static',
            generateStatsFile: true,


        })
    ]
}
export default pluginConfig