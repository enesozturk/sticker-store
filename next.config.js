const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  images: {
    domains: ["commerce-strapi-images.s3.eu-central-1.amazonaws.com"],
  },
  swcMinify: true,
};
