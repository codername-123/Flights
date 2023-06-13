const CrudRepository = require("./crud-repository");
const { Flight, Airport, Airplane, City } = require("../models");
const db = require("../models");
const { addRowLockOnFlights } = require("./raw-queries");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sort) {
    const response = await Flight.findAll({
      where: filter,
      order: sort,
      include: [
        {
          required: true,
          model: Airport,
          as: "departureAirport",
          include: {
            model: City,
            required: true,
          },
        },
        {
          required: true,
          model: Airport,
          as: "arrivalAirport",
          include: {
            model: City,
            required: true,
          },
        },
        {
          required: true,
          attributes: ["modelNumber"],
          model: Airplane,
          as: "airplaneDetails",
        },
      ],
      // Below is another way to define join on non primary key, then you don't require targetKey in flights model association with Airports
      // include: [
      //   {
      //     model: Airplane,
      //     required: true,
      //     as: "airplaneDetail",
      //   },
      //   {
      //     model: Airport,
      //     required: true,
      //     as: "departureAirport",
      //     on: {
      //       col1: Sequelize.where(
      //         Sequelize.col("Flight.departureAirportId"),
      //         "=",
      //         Sequelize.col("departureAirport.code")
      //       ),
      //     },
      //     include: {
      //       model: City,
      //       required: true,
      //     },
      //   },
      //   {
      //     model: Airport,
      //     required: true,
      //     as: "arrivalAirport",
      //     on: {
      //       col1: Sequelize.where(
      //         Sequelize.col("Flight.arrivalAirportId"),
      //         "=",
      //         Sequelize.col("arrivalAirport.code")
      //       ),
      //     },
      //     include: {
      //       model: City,
      //       required: true,
      //     },
      //   },
      // ],
    });
    return response;
  }

  async updateRemainingSeats(flightId, seats, dec = true) {
    await db.sequelize.query(addRowLockOnFlights(), {
      replacements: { id: flightId },
      type: db.sequelize.QueryTypes.SELECT,
    });
    const flight = await Flight.findByPk(flightId);
    if (dec) {
      const response = await flight.decrement("totalSeats", { by: seats });
      return response;
    } else {
      const response = await flight.increment("totalSeats", { by: seats });
      return response;
    }
  }
}
module.exports = FlightRepository;
