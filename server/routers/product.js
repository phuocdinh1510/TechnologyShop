import { Products, newProducts, updateProduct, ProductDetail, deleteProduct} from "../controllers/product.js";
import express from "express"
const router = express.Router();

router.get("/", Products)
router.post("/", newProducts)
router.put("/:id", updateProduct)
router.get("/:id", ProductDetail)
router.delete("/:id", deleteProduct)

export default router;