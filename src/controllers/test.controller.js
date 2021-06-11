const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const todo1 = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).send('todoooooooooo1111');
});
const todo2 = catchAsync(async (req, res) => {
  res.send(req.body.userId);
});

module.exports = {
  todo1,
  todo2,
};
