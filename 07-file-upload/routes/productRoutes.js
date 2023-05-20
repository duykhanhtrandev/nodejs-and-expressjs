const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} = require("../controllers/productController");
const { uploadProductImage } = require("../controllers/uploadsController");

router.route("/").post(createProduct).get(getAllProduct);
router.route("/:id").get(getProduct).patch(updateProduct);
router.route("/uploads").post(uploadProductImage);

module.exports = router;
