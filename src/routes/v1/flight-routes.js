const express = require("express");
const { FlightController } = require("../../controllers");
const { FlightMiddleware } = require("../../middlewares");
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
module.exports = router;
