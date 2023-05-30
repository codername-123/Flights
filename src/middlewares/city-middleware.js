const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

function validateCreateRequestBody(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = "Something went wrong";
    ErrorResponse.error = new AppError(
      "Incorrect request body",
      StatusCodes.BAD_REQUEST
    );
    return res.status(ErrorResponse.error.statuscode).json(ErrorResponse);
  }
  next();
}

function validateUpdateRequestBody(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    ErrorResponse.message = "Something went wrong";
    ErrorResponse.error = new AppError(
      ["you have not sent the correct request body"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(ErrorResponse.error.statuscode).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateRequestBody,
  validateUpdateRequestBody,
};
