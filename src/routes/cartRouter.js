import { Router } from "express";

import {
  getCarts,
  getCartsById,
  createCart,
  addProductToCart,
  deleteProductInCart,
  updateProductsInCart,
  updateQuantityProdInCart,
  deleteCart,
} from "../controllers/cart.controller.js";

const router = Router();


router.get("/", getCarts);
router.post("/", createCart);
router.get("/:cid", getCartsById);
router.post("/:cid/product/:pid", addProductToCart);
router.delete("/:cid/product/:pid", deleteProductInCart);
router.put("/:cid", updateProductsInCart);
router.put("/:cid/product/:pid", updateQuantityProdInCart);
router.delete("/:cid", deleteCart);


export default router;
