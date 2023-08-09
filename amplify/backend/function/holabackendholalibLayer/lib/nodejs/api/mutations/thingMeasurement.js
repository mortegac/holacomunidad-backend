const gql = require("graphql-tag");

const createMeasurementThing = gql`
  mutation CreateMeasurementThing(
    $input: CreateMeasurementThingInput!
    $condition: ModelMeasurementThingConditionInput
  ) {
    createMeasurementThing(input: $input, condition: $condition) {
      id
    }
  }
`;


module.exports = {
  createMeasurementThing,
}