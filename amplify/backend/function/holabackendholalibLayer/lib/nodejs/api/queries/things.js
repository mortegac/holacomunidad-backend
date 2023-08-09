const gql = require("graphql-tag");

const ListThings = gql`
  query ListThings(
    $filter: ModelThingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        activeChargeEvent
        corrienteCargador
        lastCheckedIn
        state
        Users {
          id
          name
          validated
          perfil
          createdAt
          updatedAt
          companiesUsersId
        }
        macAddress
        createdAt
        updatedAt
        usersThingId
      }
      nextToken
    }
  }
`;

module.exports = {
  ListThings,
}