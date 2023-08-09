const gql = require("graphql-tag");


const createThingsChargeEvent = gql`
  mutation CreateThingsChargeEvent(
    $input: CreateThingsChargeEventInput!
    $condition: ModelThingsChargeEventConditionInput
  ) {
    createThingsChargeEvent(input: $input, condition: $condition) {
      id
    }
  }
`;

const updateThingsChargeEvent = gql`
  mutation UpdateThingsChargeEvent(
    $input: UpdateThingsChargeEventInput!
    $condition: ModelThingsChargeEventConditionInput
  ) {
    updateThingsChargeEvent(input: $input, condition: $condition) {
      id
    }
  }
`;

module.exports = {
  createThingsChargeEvent,
  updateThingsChargeEvent,
}