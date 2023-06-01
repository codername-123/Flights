const express = require("express");
const { AirportMiddleware } = require("../../middlewares");
const { AirportController } = require("../../controllers");
const { CommonMiddleware } = require("../../middlewares");
const router = express.Router();

/**
 * route->  /api/v1/airports - POST
 */
router.post(
  "/",
  AirportMiddleware.validateCreateRequestBody,
  AirportController.createAirport
);

/**
 * route->  /api/v1/airports - GET
 */
router.get("/", AirportController.getAllAirports);

/**
 * route->  /api/v1/airports/:id - GET
 */
router.get(
  "/:id",
  CommonMiddleware.validateParamsId,
  AirportController.getAirport
);

/**
 * route->  /api/v1/airports/:id - DELETE
 */
router.delete(
  "/:id",
  CommonMiddleware.validateParamsId,
  AirportController.deleteAirports
);

/**
 * route->  /api/v1/airports/:id - PATCH
 */
router.patch(
  "/:id",
  CommonMiddleware.validateParamsId,
  AirportMiddleware.validateUpdateRequestBody,
  AirportController.updateAirport
);

module.exports = router;
