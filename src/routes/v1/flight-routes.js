const express = require("express");
const { FlightController } = require("../../controllers");
const { FlightMiddleware, CommonMiddleware } = require("../../middlewares");
const router = express.Router();
/**
 * route->  /api/v1/flights- POST
 */
router.post(
  "/",
  FlightMiddleware.validateCreateRequestBody,
  FlightMiddleware.validateTime,
  FlightMiddleware.validateArrivalDestinationCodeReqBody,
  FlightMiddleware.validatePrice,
  FlightController.createFlight
);

/**
 * route->  /api/v1/flights?trips=MUM-DEL - GET
 */
router.get(
  "/",
  FlightMiddleware.validateArrivalDestinationCodeQueryParams,
  FlightController.getAllFlights
);

/**
 * route->  /api/v1/flights/:id - GET
 */
router.get(
  "/:id",
  CommonMiddleware.validateParamsId,
  FlightController.getFlight
);
/**
 * route->  /api/v1/flights/:id - GET
 */
router.patch(
  "/:id/seats",
  CommonMiddleware.validateParamsId,
  FlightMiddleware.validateUpdateSeatRequestBody,
  FlightController.updateSeats
);
module.exports = router;
