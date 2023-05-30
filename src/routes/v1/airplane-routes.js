const express = require("express");
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddleware } = require("../../middlewares");
const router = express.Router();

/**
 * route->  /api/v1/airplanes - POST
 */
router.post(
  "/",
  AirplaneMiddleware.validateCreateRequestBody,
  AirplaneController.createAirplane
);

/**
 * route->  /api/v1/airplanes - GET
 */
router.get("/", AirplaneController.getAllAirplane);

/**
 * route->  /api/v1/airplanes/:id - GET
 */
router.get("/:id", AirplaneController.getAirplane);

/**
 * route->  /api/v1/airplanes/:id - DELETE
 */
router.delete("/:id", AirplaneController.deleteAirplane);

/**
 * route->  /api/v1/airplanes/:id - PATCH
 */
router.patch("/:id", AirplaneController.updateAirplane);

module.exports = router;
