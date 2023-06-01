"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
        foreignKey: "airplaneId",
        as: "airplaneDetails",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      this.belongsTo(models.Airport, {
        foreignkey: "code",
        as: "departureAirport",
        ondelete: "cascade",
        onUpdate: "cascade",
      });
      this.belongsTo(models.Airport, {
        foreignkey: "code",
        as: "arrivalAirport",
        ondelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Flight.init(
    {
      flightNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Airplanes",
          key: "id",
        },
        onDelete: "cascade",
      },
      departureAirportId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "Airports",
          key: "code",
        },
        onDelete: "cascade",
      },
      arrivalAirportId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "Airports",
          key: "code",
        },
        onDelete: "cascade",
      },
      arrivalTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      departureTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      boardingGate: {
        type: DataTypes.STRING,
      },
      totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
