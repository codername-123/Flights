const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST: /airplanes
 * req.body: {modelNumber: airbus22, capacity: 300}
 */
async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    SuccessResponse.message = "Successfully created the airplane";
    SuccessResponse.data = airplane;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statuscode).json(ErrorResponse);
  }
}
/**
 * GET: /airplanes
 * req.body: {}
 */
async function getAllAirplane(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statuscode).json(ErrorResponse);
  }
}

/**
 * GET: /airplanes/:id
 * req.body: {}
 */
async function getAirplane(req, res) {
  try {
    const response = await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statuscode).json(ErrorResponse);
  }
}

/**
 * DELETE: /aiplanes/:id
 * req.body: {}
 */
async function deleteAirplane(req, res) {
  try {
    const response = await AirplaneService.deleteAirplane(req.params.id);

    SuccessResponse.message = "Successfully deleted the airplane";
    SuccessResponse.data = response;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statuscode).json(ErrorResponse);
  }
}

async function updateAirplane(req, res) {
  try {
    const response = await AirplaneService.updateAirplane(
      req.params.id,
      req.body
    );
    SuccessResponse.message = "Successfully updated the airplane";
    SuccessResponse.data = response;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statuscode).json(ErrorResponse);
  }
}
module.exports = {
  createAirplane,
  deleteAirplane,
  getAirplane,
  getAllAirplane,
  updateAirplane,
};
