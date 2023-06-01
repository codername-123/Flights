const { AirportService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST: /airports
 * req.body: {name: 'Indira Gandhi Internation Airport', code: 'IND', cityId: 16}
 */
async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    });
    SuccessResponse.message = "Successfully created the Airport";
    SuccessResponse.data = airport;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statuscode).json(ErrorResponse);
  }
}
/**
 * GET: /airports
 * req.body: {}
 */
async function getAllAirports(req, res) {
  try {
    const airplanes = await AirportService.getAirports();
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statuscode).json(ErrorResponse);
  }
}

/**
 * GET: /airports/:id
 * req.body: {}
 */
async function getAirport(req, res) {
  try {
    const response = await AirportService.getAirport(req.params.id);
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statuscode).json(ErrorResponse);
  }
}

/**
 * DELETE: /aiports/:id
 * req.body: {}
 */
async function deleteAirports(req, res) {
  try {
    const response = await AirportService.deleteAirport(req.params.id);

    SuccessResponse.message = "Successfully deleted the Airport";
    SuccessResponse.data = response;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statuscode).json(ErrorResponse);
  }
}
/**
 * PATCH: /airports/:id
 * req.body: {name: "xyz"}
 */
async function updateAirport(req, res) {
  try {
    const response = await AirportService.updateAirport(
      req.params.id,
      req.body
    );
    SuccessResponse.message = "Successfully updated the Airport";
    SuccessResponse.data = response;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statuscode).json(ErrorResponse);
  }
}
module.exports = {
  createAirport,
  getAirport,
  getAllAirports,
  deleteAirports,
  updateAirport,
};
