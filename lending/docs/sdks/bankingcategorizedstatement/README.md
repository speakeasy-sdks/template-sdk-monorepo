# BankingCategorizedStatement
(*banking.categorizedStatement*)

### Available Operations

* [get](#get) - Get categorized bank statement

## get

﻿> **Categorization engine**
>
> The categorization engine uses machine learning and has been fully trained against Plaid and TrueLayer banking data sources. It is not fully trained against the Basiq banking data source.

The _Get categorized bank statement_ endpoint provides a fully categorized list of banking transactions for a company. Accounts and transaction data are obtained from the company's banking data sources.

### Example Usage

```typescript
import { SDK } from "openapi";
import { GetCategorizedBankStatementRequest } from "openapi/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const page: number = 1;
const pageSize: number = 100;
const query: string = "female";

  const res = await sdk.banking.categorizedStatement.get(companyId, page, pageSize, query);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                       | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `companyId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | Unique identifier for a company.                                                                | 8a210b68-6988-11ed-a1eb-0242ac120002                                                            |
| `page`                                                                                          | *number*                                                                                        | :heavy_minus_sign:                                                                              | Page number. [Read more](https://docs.codat.io/using-the-api/paging).                           | 1                                                                                               |
| `pageSize`                                                                                      | *number*                                                                                        | :heavy_minus_sign:                                                                              | Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging). | 100                                                                                             |
| `query`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).                  |                                                                                                 |
| `retries`                                                                                       | [utils.RetryConfig](../../models/utils/retryconfig.md)                                          | :heavy_minus_sign:                                                                              | Configuration to override the default retry behavior of the client.                             |                                                                                                 |
| `config`                                                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                    | :heavy_minus_sign:                                                                              | Available config options for making requests.                                                   |                                                                                                 |


### Response

**Promise<[operations.GetCategorizedBankStatementResponse](../../models/operations/getcategorizedbankstatementresponse.md)>**

