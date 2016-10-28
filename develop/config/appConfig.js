import appConfigLocal from './appConfig.local';
import appConfigDevelop from './appConfig.develop';
import appConfigProduction from './appConfig.production';

const config = {
    local: appConfigLocal,
    develop: appConfigDevelop,
    production: appConfigProduction,
};

module.exports = config[process.env.NODE_ENV] || config.develop;
