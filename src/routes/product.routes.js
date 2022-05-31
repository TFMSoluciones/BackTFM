import { Router } from "express";
import * as productCtrl from '../contollers/product.controller'

const router = Router();

router.get('/', productCtrl.getProducts);
router.get('/:productId', productCtrl.getProduct);
router.post('/', productCtrl.createProduct);
router.put('/:productId', productCtrl.updateProduct);
router.delete('/:productId', productCtrl.deleteProduct);

export default router;