const gql = require("graphql-tag");

const createUsers = gql`
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
    }
  }
`;
const updateUsers = gql`
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
    }
  }
`;

// const setUserAccess = `
//   mutation CreateUsersAccess(
//     $input: CreateUsersAccessInput!
//     $condition: ModelUsersAccessConditionInput
//   ) {
//     createUsersAccess(input: $input, condition: $condition) {
//       id
//     }
//   }
// `;

const setUserAccess = gql`
  mutation CreateUserAccess(
    $input: CreateUserAccessInput!
    $condition: ModelUserAccessConditionInput
  ) {
    createUserAccess(input: $input, condition: $condition) {
      id
    }
  }
`;

module.exports = {
  createUsers,
  updateUsers,
  setUserAccess,
}