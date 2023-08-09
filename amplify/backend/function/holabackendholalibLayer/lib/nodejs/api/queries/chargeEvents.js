const gql = require("graphql-tag");

const listThingsChargeEvents = gql`
  query ListThingsChargeEvents(
    $filter: ModelThingsChargeEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThingsChargeEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        startCharge
        endCharge
        chargingHours
        amount
        day
        month
        year
        hour
        hourFull
        status
        isActive
        type
        createdAt
        updatedAt
        usersThingsChargeEventId
        thingsThingsChargeEventId
      }
      nextToken
    }
  }
`;
module.exports = {
  listThingsChargeEvents,
}