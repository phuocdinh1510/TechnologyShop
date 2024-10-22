import { Categorys, newCategory, updateCategory, deleteCategory} from "../controllers/category.js";
import express from "express"
const router = express.Router();

router.get("/", Categorys)
router.post("/", newCategory)
router.put("/:id", updateCategory)
router.delete("/:id", deleteCategory)

export default router;