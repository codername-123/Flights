const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");
function validateParamsId(req, res, next) {
  const num = parseInt(req.params.id);
  if (!Number.isInteger(num)) {
    ErrorResponse.message = "Invalid req params id";
    ErrorResponse.error = new AppError(
      ["The request parameter Id sent for this request is not an Integer"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(ErrorResponse.error.statuscode).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateParamsId,
};
