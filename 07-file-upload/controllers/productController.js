const Product = require("../models/productModel");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  console.log(req.body);
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProduct = async (req, res) => {
  const products = await Product.find().sort("-createdAt");
  res.status(StatusCodes.OK).json({ products });
};

const getProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findById(productId);
  res.status(StatusCodes.OK).json({ product });
};

const updateProduct = async (req, res) => {
  const {
    body: { name, price },
    params: { id: productId },
  } = req;
  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ product });
};

module.exports = {
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
};
