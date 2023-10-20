# TransactionsAccountTransactions
(*transactions.accountTransactions*)

### Available Operations

* [get](#get) - Get account transaction
* [list](#list) - List account transactions

## get

The *Get account transaction* endpoint returns a single account transaction for a given accountTransactionId.

[Account transactions](https://docs.codat.io/lending-api#/schemas/AccountTransaction) represent bank activity within an accounting platform. All transactions that go through a bank account are recorded as account transactions.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=accountTransactions) for integrations that support getting a specific account transaction.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { SDK } from "openapi";
import { GetAccountingAccountTransactionRequest } from "openapi/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const accountTransactionId: string = "female";
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

  const res = await sdk.transactions.accountTransactions.get(accountTransactionId, companyId, connectionId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `accountTransactionId`                                              | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for an account transaction.                       |                                                                     |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a connection.                                 | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetAccountingAccountTransactionResponse](../../models/operations/getaccountingaccounttransactionresponse.md)>**


## list

The *List account transactions* endpoint returns a list of [account transactions](https://docs.codat.io/lending-api#/schemas/AccountTransaction) for a given company's connection.

[Account transactions](https://docs.codat.io/lending-api#/schemas/AccountTransaction) represent bank activity within an accounting platform. All transactions that go through a bank account are recorded as account transactions.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { SDK } from "openapi";

(async() => {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const res = await sdk.transactions.accountTransactions.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    orderBy: "-modifiedDate",
    page: 1,
    pageSize: 100,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.ListAccountingAccountTransactionsRequest](../../models/operations/listaccountingaccounttransactionsrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.ListAccountingAccountTransactionsResponse](../../models/operations/listaccountingaccounttransactionsresponse.md)>**

