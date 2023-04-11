require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/productModel');

const jsonProduct = require('./products.json');

const start = async () => {
  try {
    // connectDB
    const url = process.env.DATABASE.replace(
      '<password>',
      process.env.DATABASE_PASSWORD
    );
    await connectDB(url);
    await Product.deleteMany();
    await Product.create(jsonProduct);
    console.log('Success!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
