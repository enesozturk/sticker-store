module.exports = ({ env }) => ({
  upload: {
    providerOptions: {
      localServer: {
        maxage: 300000,
      },
    },
  },
});
