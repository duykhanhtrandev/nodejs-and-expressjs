const Product = require("../models/productModel");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  res.send("create product");
};

const getAllProduct = async (req, res) => {
  res.send("list of products");
};

module.exports = {
  createProduct,
  getAllProduct,
};
