import express from 'express';

import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';

import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/top', getTopProducts);
router.route('/:id/reviews').post(protect, createProductReview);
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, isAdmin, deleteProduct)
  .patch(protect, isAdmin, updateProduct);
router.route('/').get(getProducts).post(protect, isAdmin, createProduct);

export default router;
