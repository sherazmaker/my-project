module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME", "duxee2do5"),
      api_key: env("CLOUDINARY_KEY", "432344255373111"),
      api_secret: env("CLOUDINARY_SECRET", "L84pWlSb9bMvv3ykhax4iABpaqk"),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
  // ...
});
