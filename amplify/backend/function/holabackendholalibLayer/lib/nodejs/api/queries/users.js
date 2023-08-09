const gql = require("graphql-tag");

const listUsers = gql`
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        idUser
        name
        validated
        hasAdminAccess
        perfil
        Geo {
          lat
          long
          height
        }
        Company {
          id
          name
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

const userAccess = gql`
  query ListUserAccesses(
    $filter: ModelUserAccessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserAccesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        idUser
        module
        date
        day
        month
        year
        hour
        createdAt
        updatedAt
      }
    }
  }
`;

module.exports = {
  listUsers,
  userAccess,
}