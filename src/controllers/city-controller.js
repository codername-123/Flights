const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

/**
 * POST: /cities
 * req.body: {name: 'London', }
 */
async function createCity(req, res) {
  try {
    const city = await CityService.createCity({ name: req.body.name });

    SuccessResponse.message = "Successfully created city";
    SuccessResponse.data = city;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statuscode).json(ErrorResponse);
  }
}

/**
 * GET: /cities
 * req.body: {}
 */

async function getCities(req, res) {
  try {
    const cities = await CityService.getCities();
    SuccessResponse.data = cities;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statuscode).json(ErrorResponse);
  }
}

/**
 * GET: /cities/:id
 * req.body: {}
 */
async function getCity(req, res) {
  try {
    const city = await CityService.getCity(req.params.id);
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statuscode).json(ErrorResponse);
  }
}

/**
 * DELETE: /cities/:id
 * req.body: {}
 */
async function deleteCity(req, res) {
  try {
    const city = await CityService.deleteCity(req.params.id);
    SuccessResponse.message = "Successfully deleted the City";
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statuscode).json(ErrorResponse);
  }
}

/**
 * PATCH: /cities/:id
 * req.body: {name: "sysl"}
 */
async function updateCity(req, res) {
  try {
    const city = await CityService.updateCity(req.params.id, req.body);
    SuccessResponse.message = "Successfully updated the City";
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statuscode).json(ErrorResponse);
  }
}

module.exports = {
  createCity,
  getCities,
  getCity,
  deleteCity,
  updateCity,
};
