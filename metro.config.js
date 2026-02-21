const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Fix "Cannot destructure property '__extends' of 'tslib.default' as it is undefined"
// This issue occurs with framer-motion and tslib in Metro bundler.
config.resolver.resolveRequest = (context, moduleName, platform) => {
    if (moduleName === 'tslib') {
        return {
            filePath: require.resolve('tslib/tslib.es6.js'),
            type: 'sourceFile',
        };
    }

    return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
