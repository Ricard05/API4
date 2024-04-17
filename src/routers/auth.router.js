import { Router } from "express";
import { UserController, ProductController, ProviderController, AdminController } from "../controllers/controllers.js";
const router = Router();

//User routes
router.post("/login", UserController.login);
router.post("/register/user", UserController.register);

//Product routes
router.post("/register/product", ProductController.registerProduct);
router.put("/update/product/:code", ProductController.updateProduct);
router.put("/delete/product/:code", ProductController.deleteProduct);

//Provider routes
router.post("/register/provider", ProviderController.registerProvider);
router.put("/update/provider/:code", ProviderController.updateProvider);
router.put("/delete/provider/:code", ProviderController.deleteProvider);

//Admin routes
router.get("/get/admin/product", AdminController.getAllProducts);
router.get("/get/admin/provider", AdminController.getAllProviders);

export default router;