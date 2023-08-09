const gql = require("graphql-tag");



const ListResidentialParkingLots = gql`
  query ListResidentialParkingLots(
    $filter: ModelResidentialParkingLotsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResidentialParkingLots(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        hasThing
        Things {
          id
          activeChargeEvent
          currentConsumedNow
          corrienteCargador
          lastCheckedIn
          state
          macAddress
          electricalAmperage
          installer
          parkingNumber
          parkingFloorNumber
          electricalFase
          createdAt
          updatedAt
          usersThingId
        }
        Residential {
          id
          name
          address
          declaredPower
          totalParkingLots
          totalApartments
          typeOfResidence
          isSmartmeter
          buildingImage
          residenceServiceMargin
          energicaServiceMargin
          peakEnergyRate
          lowEnergyRate
          factor
          factorCap
          createdAt
          updatedAt
          companiesResidentialId
        }
        createdAt
        updatedAt
        thingsResidentialParkingLotsId
        residentialResidentialParkingLotsId
      }
      nextToken
    }
  }
`;

module.exports = {
  ListResidentialParkingLots,
}