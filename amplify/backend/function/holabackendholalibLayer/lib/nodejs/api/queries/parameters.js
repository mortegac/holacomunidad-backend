const gql = require("graphql-tag");

const getParameters = gql`
  query GetParameters($id: ID!) {
    getParameters(id: $id) {
      id
      type
      correlative
      createdAt
      updatedAt
    }
  }
`;
const listParameters = gql`
  query ListParameters(
    $filter: ModelParametersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParameters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        correlative
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

module.exports = {
  getParameters,
  listParameters
}