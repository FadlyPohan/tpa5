const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');
const { createCustomer, getAllCustomer, getDetailCustomer, editCustomer, deleteCustomer } = require('../controllers/customers');

const customerRoute = express.Router();

customerRoute.post('/customer', authenticateToken, createCustomer);
customerRoute.get('/customers', authenticateToken, getAllCustomer);
customerRoute.get('/customer/:id', authenticateToken, getDetailCustomer);
customerRoute.put('/customer/:id', authenticateToken, editCustomer);
customerRoute.delete('/customer/:id', authenticateToken, deleteCustomer);

module.exports = customerRoute;
