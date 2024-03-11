# BankingTransactionCategory

The Banking Transaction Categories data type provides a list of hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.

Responses are paged, so you should provide `page` and `pageSize` query parameters in your request.


## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `hasChildren`                                                                                               | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | A Boolean indicating whether there are other bank transaction categories beneath this one in the hierarchy. |                                                                                                             |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The unique identifier of the bank transaction category.                                                     |                                                                                                             |
| `modifiedDate`                                                                                              | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         | 2022-10-23 00:00:00 +0000 UTC                                                                               |
| `name`                                                                                                      | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The name of the bank transaction category.                                                                  |                                                                                                             |
| `parentId`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The unique identifier of the parent bank transaction category.                                              |                                                                                                             |
| `sourceModifiedDate`                                                                                        | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         | 2022-10-23 00:00:00 +0000 UTC                                                                               |
| `status`                                                                                                    | [shared.TransactionCategoryStatus](../../../sdk/models/shared/transactioncategorystatus.md)                 | :heavy_minus_sign:                                                                                          | The status of the transaction category.                                                                     |                                                                                                             |