const products = require('./products.json');
const connectDB = require('./db/connect');
require('dotenv').config();
const Product = require('./models/product');
const { exists } = require('./models/product');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Product.create(products);
    console.log('Products successfully loaded to the DB...');
    process.exit(0);
  } catch(error) {
    console.log(error);
    process.exit(1);
  };
};

start();
