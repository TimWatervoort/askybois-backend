module.exports = {
  development: {
    client: `pg`,
    connection: `postgres://localhost/askybois_dev`
  },
  test: {},
  production: {
    client: `pg`,
    connection: process.env.DATABASE_URL
  }
}
