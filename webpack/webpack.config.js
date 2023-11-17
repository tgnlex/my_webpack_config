import merge from 'webpack-merge';
import envConfig from './webpack.${env}.js';
import commonConfig from './webpack.common.js';
import pluginConfig from './webpack.plugins.js';
import loadersConfig from './webpack.loaders.js';
import serverConfig from './webpack.server.js';
const getAddons = (addonsArgs) => {
  let addons = Array.isArray(addonsArgs) ? addonsArgs : [addonsArgs];

  return addons
    .filter(Boolean)
    .map((name) => require(`./addons/webpack.${name}.js`));
};

export const config = ({ addon }) => {

  return merge(
    commonConfig, 
    [envConfig, pluginConfig, serverConfig, loadersConfig, ],

    ...getAddons(addon))
    
};