function addRowLockOnFlights(flightId) {
  return 'SELECT * FROM "Flights" WHERE "Flights"."id" = (:id);';
}

module.exports = {
  addRowLockOnFlights,
};
