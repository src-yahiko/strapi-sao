module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'http://localhost:1337'),
  admin: {
    auth: {
<<<<<<< HEAD
      secret: env("JWT_SECRET")
=======
      secret: env('JWT_SECRET')
>>>>>>> c907128c4266b2ce5990098f337b0217cd803fcc
    }
  }
});
