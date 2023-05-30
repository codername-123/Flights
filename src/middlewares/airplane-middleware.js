const { ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

function validateCreateRequestBody(req, res, next) {
  if (!req.body.modelNumber || !req.body.capacity) {
    ErrorResponse.message = "Something went wrong";
    ErrorResponse.error = new AppError(
      ["you have not sent the correct request body"],
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

module.exports = { validateCreateRequestBody, validateUpdateRequestBody };
