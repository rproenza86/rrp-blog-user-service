const mongoURI = !process.env.MONGO_SERVICE_HOST ? "localhost" : `${process.env.MONGO_SERVICE_HOST}:${process.env.MONGO_SERVICE_PORT}`;
 const config = {

  // mongodb location
  db: `mongodb://${mongoURI}/blog-api`,

  // port
  port: process.env.PORT || 3002,

  // test environment
  test_env: 'test',
  test_db: 'blog-api-test',
  test_port: 3022,

  // secret for jwt
  secret: 'secret'
};

export default config;