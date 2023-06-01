const { AirportRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");
const airportRepository = new AirportRepository();

async function createAirport(data) {
  try {
    const airport = await airportRepository.create(data);
    return airport;
  } catch (error) {
    if (
      error.name == "SequelizeValidationError" ||
      error.name == "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.foreach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Unable to create a airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteAirport(id) {
  try {
    const resp = await airportRepository.destroy(id);
    return resp;
  } catch (error) {
    if (error.statuscode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "Airport to be deleted does not exist",
        error.statuscode
      );
    }
    throw new AppError(
      "Unable to delete the Airport ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirport(id) {
  try {
    const airport = await airportRepository.get(id);
    return airport;
  } catch (error) {
    if (error.statuscode == StatusCodes.NOT_FOUND) {
      throw new AppError("Airport does not exist", error.statuscode);
    }
    throw new AppError(
      "Unable to get the Airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirports() {
  try {
    const airports = await airportRepository.getAll();
    return airports;
  } catch (error) {
    throw new AppError(
      "Unable to get Airports",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateAirport(id, data) {
  try {
    const airport = await airportRepository.update(id, data);
    return airport;
  } catch (error) {
    if (error.statuscode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "Airport/Column to be updated does not exist",
        error.statuscode
      );
    }
    if (
      error.name == "SequelizeValidatonError" ||
      error.name == "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.foreach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Unable to update the Airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  createAirport,
  deleteAirport,
  getAirport,
  getAirports,
  updateAirport,
};
