const mongoURI = process.env.MONGO_SERVICE_HOST ? "rolo:rolo@localhost:27017/blog-api" : "main_admin:rolo098@172.17.0.6:27017,172.17.0.7:27017,172.17.0.8:27017/blog-api?replicaSet=MainRepSet&authSource=admin";
// const mongoURI = process.env.MONGO_SERVICE_HOST ? "rolo:rolo@localhost:27017/blog-api" : "172.17.0.6:27017/blog-api?replicaSet=MainRepSet";
// const mongoURI = !process.env.MONGO_SERVICE_HOST ? "localhost" : `${process.env.MONGO_SERVICE_HOST}:${process.env.MONGO_SERVICE_PORT}`; 
 const config = {

  // mongodb locations
  db: `mongodb://${mongoURI}`,

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