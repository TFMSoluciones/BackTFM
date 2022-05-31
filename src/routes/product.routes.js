import { Router } from "express";
import * as productCtrl from '../contollers/product.controller'

const router = Router();

router.get('/', productCtrl.getProducts);
router.get('/', productCtrl.getProduct);
router.post('/', productCtrl.createProduct);
router.put('/', productCtrl.updateProduct);
router.delete('/', productCtrl.deleteProduct);

export default router;