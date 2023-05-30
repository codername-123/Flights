const express = require("express");
const { CityController } = require("../../controllers");
const { CityMiddleware } = require("../../middlewares");

const router = express.Router();

/**
 * route->  /api/v1/cities - POST
 */
router.post(
  "/",
  CityMiddleware.validateCreateRequestBody,
  CityController.createCity
);

/**
 * route->  /api/v1/cities - GET
 */
router.get("/", CityController.getCities);

/**
 * route->  /api/v1/cities/:id - GET
 */
router.get("/:id", CityController.getCity);

/**
 * route->  /api/v1/cities/:id - DELETE
 */
router.delete("/:id", CityController.deleteCity);

/**
 * route->  /api/v1/cities/:id - PATCH
 */
router.patch(
  "/:id",
  CityMiddleware.validateUpdateRequestBody,
  CityController.updateCity
);

module.exports = router;
