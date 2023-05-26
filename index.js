const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');
const UserModel = require('./models').User;
const CustomerModel = require('./models').Customer;
const userRoute = require('./routes/user');
const customerRoute = require('./routes/customer');
const customer = require('./models/customer');
const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(userRoute);
app.use(customerRoute);

const port = 3030;

// app.get('/customers', async (req, res) => {
//   const customers = await CustomerModel.findAll();
//   const response = {
//     status: 'Berhasil',
//     message: 'all customer',
//     meta: {
//       total: customers.length,
//     },
//     data: customers,
//   };
//   res.status(200).json(response);
//   return;
// });

// app.get('/customers/:customerId', async (req, res) => {
//   try {
//     const { customerId } = req.params;
//     const customer = await CustomerModel.findOne({ id: Number(customerId) });
//     res.status(200).json(customer);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: error.message || 'server error',
//     });
//   }
// });

// app.post('/customers', async (req, res) => {
//   try {
//     const { nama, email, password } = req.body;
//     const newCustomerData = {
//       nama: nama,
//       email: email,
//       password: password,
//     };
//     const newCustomer = await CustomerModel.create(newCustomerData);
//     res.status(201).json({
//       message: 'New Customer Create',
//       customer: newCustomer,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message || 'server error',
//     });
//   }
// });

// app.patch('/customers/:customerId', async (req, res) => {
//   try {
//     const { customerId } = req.params;
//     const { nama, email, password } = req.body;

//     const updateCustomerData = {
//       nama: nama,
//       email: email,
//       password: password,
//     };
//     const updateCustomer = await CustomerModel.update(updateCustomerData, {
//       where: {
//         id: customerId,
//       },
//     });
//     res.status(201).json({
//       message: 'Update Customer Success',
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message || 'server error',
//     });
//   }
// });

// app.put('/customer/:customerId', async (req, res) => {
//   try {
//     const { customerId } = req.params;

//     const customer = await customer.findOne({
//       where: {
//         id: customerId,
//       },
//     });

//     if (!customer) {
//       return res.status(404).json({
//         status: 'error',
//         message: 'Data tidak ditemukan',
//       });
//     }

//     const newCustomer = req.body.customer;

//     if (!newCustomer) {
//       return res.status(400).json({
//         status: 'error',
//         message: 'Mohon untuk memasukkan data todo yang baru',
//       });
//     }

//     const newObjectCustomer = {
//       id,
//       customer: newCustomer,
//     };

//     await customer.update(newObjectCustomer, {
//       where: {
//         id: customerId,
//       },
//     });

//     return res.json({
//       status: 'success',
//       message: 'Data berhasil diubah',
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: error.message });
//   }
// });

// app.delete('/customers/:customerId', async (req, res) => {
//   try {
//     const { customerId } = req.params;

//     await CustomerModel.destroy({
//       where: {
//         id: customerId,
//       },
//     });
//     res.status(201).json({
//       message: 'Delete Customer Success',
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message || 'server error',
//     });
//   }
// });

app.listen(port, () => {
  console.log(`This Aplication Run on Port : ${port}`);
});
