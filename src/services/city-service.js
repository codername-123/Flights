const { CityRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    if (
      error.name == "SequelizeValidationError" ||
      error.name == "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      "Can not create City",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteCity(id) {
  try {
    const response = await cityRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statuscode == StatusCodes.NOT_FOUND) {
      throw new AppError("City does not exist", error.statuscode);
    }
    throw new AppError(
      "Can not delete the city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCity(id) {
  try {
    const city = await cityRepository.get(id);
    return city;
  } catch (error) {
    if (error.statuscode == StatusCodes.NOT_FOUND) {
      throw new AppError("City does not exist", error.statuscode);
    }
    throw new AppError(
      "Can not get data of the city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCities() {
  try {
    const cities = await cityRepository.getAll();
    return cities;
  } catch (error) {
    throw new AppError(
      "Can not get data of cities",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateCity(id, data) {
  try {
    const city = await cityRepository.update(id, data);
    return city;
  } catch (error) {
    if (error.statuscode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "City/column to be updated does not exist",
        error.statuscode
      );
    }
    if (
      error.name == "SequelizeValidationError" ||
      error.name == "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      "Cannot update the city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createCity,
  getCities,
  getCity,
  deleteCity,
  updateCity,
};
