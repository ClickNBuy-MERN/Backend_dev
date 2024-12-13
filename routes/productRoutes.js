// productRoutes.js
const express = require('express');
const { 
    getProducts, 
    newProduct, 
    getSingleProduct, 
    updateProduct, 
    deleteProduct, 
    createReview ,
    getReviews,
    deleteReview
} = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/authenticate');
const router = express.Router();

// Static routes first
router.route('/products').get(isAuthenticatedUser, getProducts);
router.route('/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);
router.route('/review').put(isAuthenticatedUser, createReview); 
router.route('/reviews').get(isAuthenticatedUser, getReviews);
router.route('/review').delete(isAuthenticatedUser, deleteReview);

// Dynamic routes last
router.route('/product/:id')
    .get(getSingleProduct)
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);

module.exports = router;