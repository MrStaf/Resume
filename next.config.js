module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["content.benoit.fage.fr"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
