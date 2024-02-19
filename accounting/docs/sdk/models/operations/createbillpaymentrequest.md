# CreateBillPaymentRequest


## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique identifier for a company.                                                                 | 8a210b68-6988-11ed-a1eb-0242ac120002                                                             |
| `connectionId`                                                                                   | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique identifier for a connection.                                                              | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                             |
| `billPayment`                                                                                    | [shared.BillPayment](../../../sdk/models/shared/billpayment.md)                                  | :heavy_minus_sign:                                                                               | N/A                                                                                              | {"totalAmount":1000,"lines":[{"amount":1000,"links":[{"type":"Bill","id":"x","amount":-1000}]}]} |
| `timeoutInMinutes`                                                                               | *number*                                                                                         | :heavy_minus_sign:                                                                               | Time limit for the push operation to complete before it is timed out.                            |                                                                                                  |