const gql = require("graphql-tag");

const listPaymentTransactions = gql`
  query ListPaymentTransactions(
    $filter: ModelPaymentTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        token
        amount
        buy_order
        card_number
        transaction_date
        accounting_date
        installments_number
        payment_type_code
        session_id
        vci
        day
        month
        hour
        year
        glosa
        usersPaymentTransactionsId
        idEve
        horaOn
        horaOff
        chargingHours
      }
      nextToken
    }
  }
`;

module.exports = {
    listPaymentTransactions
}