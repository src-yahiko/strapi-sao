module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '62f0cd97de84e6b3ae1e8993c51d6827'),
  },
});
