module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "testbd",
    host: "localhost",
    dialect: "mysql",

  },
  test: {
    username: "root",
    password: "",
    database: "testbd",
    host: "127.0.0.1",
    dialect: "mysql",
    storage: ":memory:"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    use_env_variable: 'DATABASE_URL'
  }
};