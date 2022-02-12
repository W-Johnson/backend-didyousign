module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f538e9f8b14eb68e3da4f922b2190802'),
  },
});
