const Payment = require("../models/payment");

// Payment CONTROLLER

const fetchPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    return payments;
  } catch (err) {
    console.log(err);
  }
};

const fetchPaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findById(id);
    return payment;
  } catch (err) {
    console.log(err);
  }
};

const addPayment = async (req, res) => {
  try {
    const NewPayment = new Payment({ ...req.body });
    return NewPayment.save();
  } catch (err) {
    console.log(err);
  }
};

const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findByIdAndRemove(id);
    return payment;
  } catch (err) {
    console.log(err);
  }
};

const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = req.body;
    const updatedPayment = await Payment.findByIdAndUpdate(id, payment, {
      new: true,
    });
    return updatedPayment;
  } catch (err) {
    console.log(err);
  }
};

const fetchPaymentByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const payment = await Payment.findOne({ user_id: user_id });
    return payment;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  fetchPayments,
  fetchPaymentById,
  addPayment,
  deletePayment,
  updatePayment,
  fetchPaymentByUser,
};
