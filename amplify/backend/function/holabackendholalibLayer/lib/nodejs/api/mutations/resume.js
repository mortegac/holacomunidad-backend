const gql = require("graphql-tag");

const updateResumeDashboard = gql`
  mutation UpdateResumeDashboard(
    $input: UpdateResumeDashboardInput!
    $condition: ModelResumeDashboardConditionInput
  ) {
    updateResumeDashboard(input: $input, condition: $condition) {
      id
      name
      type
      count
      isAll
      idLocation
      day
      month
      year
    }
  }
`;

const createResumeIdProcess = gql`
  mutation CreateResumeIdProcess(
    $input: CreateResumeIdProcessInput!
    $condition: ModelResumeIdProcessConditionInput
  ) {
    createResumeIdProcess(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;


module.exports = {
  updateResumeDashboard,
  createResumeIdProcess
}