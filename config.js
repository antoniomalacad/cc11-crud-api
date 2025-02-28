module.exports = {
  db: {
    client: "pg",
    connection: process.env.DB_URL || {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    }
  },

  express: {
    port: process.env.PORT || 3000
  },

  logger: {
    format: "dddd MMMM Do YYYY, h:mm:ss a"
  }
};
