const gql = require("graphql-tag");


const updateThings = gql`
  mutation UpdateThings(
    $input: UpdateThingsInput!
    $condition: ModelThingsConditionInput
  ) {
    updateThings(input: $input, condition: $condition) {
      id
    }
  }
`;


module.exports = {
  updateThings,
}