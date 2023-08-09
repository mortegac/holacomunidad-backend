const gql = require("graphql-tag");


// horaOn: "12:05", 
// horaOff: "13:05",
// date: "1662351226038",
// day: "05",
// month: "09",
// year: "2022",
// statusCron: false,
// usersThingsCronsId: "mortega@apgca.cl" , 
// thingsThingsCronsId: "EVE-MOC",

const createThingsCrons = gql`
  mutation CreateThingsCrons(
    $input: CreateThingsCronsInput!
    $condition: ModelThingsCronsConditionInput
  ) {
    createThingsCrons(input: $input, condition: $condition) {
      id
    }
  }
`;

const updateThingsCrons = gql`
  mutation UpdateThingsCrons(
    $input: UpdateThingsCronsInput!
    $condition: ModelThingsCronsConditionInput
  ) {
    updateThingsCrons(input: $input, condition: $condition) {
      id
    }
  }
`;


module.exports = {
  createThingsCrons,
  updateThingsCrons
}