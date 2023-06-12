const { i18n } = require('./next-i18next.config');

module.exports = {
    i18n,
    images: {
        domains: ['source.unsplash.com', process.env.NEXT_IMAGE_DOMAIN],
    },
};
