const Payment = require("../models/payment");

// Payment CONTROLLER

const fetchPayments = async (req, res) => {
  try {
    const Payments = await Payment.find();
    return Payments;
  } catch (err) {
    console.log(err);
  }
};

const fetchPaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const Payment = await Payment.findById(id);
    return Payment;
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
    const Payment = await Payment.findByIdAndRemove(id);
    return Payment;
  } catch (err) {
    console.log(err);
  }
};

const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const Payment = req.body;
    const updatedPayment = await Payment.findByIdAndUpdate(id, Payment, {
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
    const Payments = await Payment.find({ user_id: user_id });
    return Payments;
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
