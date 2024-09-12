# DataIntegritySummary


## Fields

| Field                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                               | The data type which the data type in the URL has been matched against. For example, if you've matched accountTransactions and banking-transactions, and you call this endpoint with accountTransactions in the URL, this property would be banking-transactions. |
| `byAmount`                                                                                                                                                                                                                                                       | [components.DataIntegrityByAmount](../../models/components/dataintegritybyamount.md)                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                              |
| `byCount`                                                                                                                                                                                                                                                        | [components.DataIntegrityByCount](../../models/components/dataintegritybycount.md)                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                              |