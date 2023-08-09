const gql = require("graphql-tag");

const createPaymentTransactions = gql`
  mutation CreatePaymentTransactions(
    $input: CreatePaymentTransactionsInput!
    $condition: ModelPaymentTransactionsConditionInput
  ) {
    createPaymentTransactions(input: $input, condition: $condition) {
      id
    }
  }
`;

const updatePaymentTransactions = gql`
  mutation UpdatePaymentTransactions(
    $input: UpdatePaymentTransactionsInput!
    $condition: ModelPaymentTransactionsConditionInput
  ) {
    updatePaymentTransactions(input: $input, condition: $condition) {
      id
    }
  }
`;


module.exports = {
  createPaymentTransactions,
  updatePaymentTransactions
}


