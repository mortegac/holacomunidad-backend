const gql = require("graphql-tag");

const updateParameters = gql`
  mutation UpdateParameters(
    $input: UpdateParametersInput!
    $condition: ModelParametersConditionInput
  ) {
    updateParameters(input: $input, condition: $condition) {
      id
      type
      correlative
      createdAt
      updatedAt
    }
  }
`;

const createParameters = gql`
  mutation CreateParameters(
    $input: CreateParametersInput!
    $condition: ModelParametersConditionInput
  ) {
    createParameters(input: $input, condition: $condition) {
      id
    }
  }
`;



module.exports = {
  createParameters,
  updateParameters,
}