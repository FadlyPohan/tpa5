const Customer = require('../models').Customer;
const { nanoid } = require('nanoid');

const createCustomer = async (req, res) => {
  try {
    const id = nanoid(6);
    const customer = req.body.customer;

    if (!customer) {
      return res.status(400).json({
        status: 'error',
        message: 'Masukkan data Customer',
      });
    }

    const newCustomer = {
      id,
      nama,
      email,
    };

    await Customer.create(newCustomer);
    return res.status(201).json({
      message: ' Create Customer success ',
      data: {
        customerId: id,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllCustomer = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    return res.json(customers);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getDetailCustomer = async (req, res) => {
  try {
    const id = req.params.id;

    const customer = await Customer.findOne({
      where: {
        id: id,
      },
    });

    if (!customer) {
      return res.status(404).json({
        status: 'error',
        message: ' Data Not Found',
      });
    }
    return res.json({
      status: 'Success',
      data: {
        customer,
      },
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const editCustomer = async (req, res) => {
  try {
    const id = req.params.id;

    const customer = await Customer.findOne({
      where: {
        id: id,
      },
    });
    if (!customer) {
      return res.status(400).json({
        status: 'error',
        message: 'Data Not Found',
      });
    }
    const newCustomer = req.body.customer;
    if (!customer) {
      return res.status(404).json({
        status: 'error',
        message: 'Masukkan data Baru',
      });
    }
    await Customer.Update(newObjectCustomer, {
      where: {
        id: id,
      },
    });
    return res.json({
      status: 'error',
      message: 'Update Data Success',
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const id = req.params.id;

    const customer = await Customer.findOne({
      where: {
        id: id,
      },
    });
    if (!customer) {
      return res.status(404).json({
        status: 'error',
        message: ' Data Not Found',
      });
    }

    await Customer.destroy({
      where: {
        id: id,
      },
    });
    return res.json({
      status: 'Success',
      data: {
        customer,
      },
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createCustomer,
  getAllCustomer,
  getDetailCustomer,
  editCustomer,
  deleteCustomer,
};
