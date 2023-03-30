const Review = require('./../models/reviewModel');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.verifyBooked = catchAsync(async (req, res, next) => {
  const possibleBooking = await Booking.findOne({
    tour: req.body.tour,
    user: req.body.user
  });
  if(!possibleBooking) { return next(new AppError('You need to book this tour to give it review !', 400));}
  next();
})

exports.getAllReviews = factory.getAll(Review);

exports.createReview = factory.createOne(Review);

exports.getReview = factory.getOne(Review);

exports.updateReview = factory.updateOne(Review);

exports.deleteReview = factory.deleteOne(Review);
