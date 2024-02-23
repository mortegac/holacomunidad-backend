const gql = require("graphql-tag");

const getResumeDashboard = gql`
  query GetResumeDashboard($id: ID!) {
    getResumeDashboard(id: $id) {
      id
      lastIdCreated
      name
      type
      count
      isAll
      idLocation
      day
      month
      year
      createdAt
      updatedAt
      __typename
    }
  }
`;

const listResumeDashboards = gql`
  query ListResumeDashboards(
    $filter: ModelResumeDashboardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResumeDashboards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        type
        count
        isAll
        idLocation
        day
        month
        year
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

const getResumeIdProcess = gql`
  query GetResumeIdProcess($id: ID!) {
    getResumeIdProcess(id: $id) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;

module.exports = {
  getResumeDashboard,
  listResumeDashboards,
  getResumeIdProcess,
}