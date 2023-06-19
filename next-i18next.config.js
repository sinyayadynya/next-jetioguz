const path = require('path');

const config = require('./site.config');

module.exports = {
    i18n: {
        locales: Object.keys(siteConfig.locales),
        defaultLocale: siteConfig.defaultLocale,
    },
};
