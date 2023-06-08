const { ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");
const { compareTime } = require("../utils/helpers/datetime-helpers");
const AppError = require("../utils/errors/app-error");

function validateCreateRequestBody(req, res, next) {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price ||
    !req.body.totalSeats
  ) {
    ErrorResponse.message = "Something went wrong";
    ErrorResponse.error = new AppError(
      ["you have not sent the correct request body"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(ErrorResponse.error.statuscode).json(ErrorResponse);
  }
  next();
}

function validateTime(req, res, next) {
  const flightArrivalTime = req.body.arrivalTime;
  const flightDepartureTime = req.body.departureTime;
  if (
    new Date(flightArrivalTime) == "Invalid Date" ||
    new Date(flightDepartureTime) == "Invalid Date"
  ) {
    ErrorResponse.message = "Failed to create a Flight";
    ErrorResponse.error = new AppError(
      ["Please enter the Departure Time OR Arrival Time format correctly"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!compareTime(flightArrivalTime, flightDepartureTime)) {
    ErrorResponse.message = "Something went wrong";
    ErrorResponse.error = new AppError(
      ["your arrival time is earlier than departure time"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(ErrorResponse.error.statuscode).json(ErrorResponse);
  }
  next();
}

function validatePrice(req, res, next) {
  const flightPrice = req.body.price;
  if (flightPrice < 0) {
    ErrorResponse.message = "Failed to create a Flight";
    ErrorResponse.error = new AppError(
      ["It is not possible to have a negative flight price"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}
function validateArrivalDestinationCodeReqBody(req, res, next) {
  if (req.body.arrivalAirportId == req.body.departureAirportId) {
    ErrorResponse.message = "Failed to create a Flight";
    ErrorResponse.error = new AppError(
      ["The Arrival Airport ID & Departure Airport ID cannot be same"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}
function validateArrivalDestinationCodeQueryParams(req, res, next) {
  if (req.query.trips) {
    [departureAirportId, arrivalAirportId] = req.query.trips.split("-");
    if (departureAirportId === undefined || arrivalAirportId === undefined) {
      ErrorResponse.message = "Failed to get Flight";
      ErrorResponse.error = new AppError(
        ["Enter the Arrival Airport ID & Departure Airport ID correctly"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (departureAirportId === "" || arrivalAirportId === "") {
      ErrorResponse.message = "Failed to get Flight";
      ErrorResponse.error = new AppError(
        ["Enter the Arrival Airport ID & Departure Airport ID correctly"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (arrivalAirportId == departureAirportId) {
      ErrorResponse.message = "Failed to create a Flight";
      ErrorResponse.error = new AppError(
        ["The Arrival Airport ID & Departure Airport ID cannot be same"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
  }
  next();
}
module.exports = {
  validateCreateRequestBody,
  validateTime,
  validateArrivalDestinationCodeReqBody,
  validatePrice,
  validateArrivalDestinationCodeQueryParams,
};
