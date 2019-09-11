const mongoose = require('mongoose');
const GoalSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  Date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Goal', GoalSchema);