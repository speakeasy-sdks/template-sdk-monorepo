# Liabilities
(*liabilities*)

## Overview

Debt and other liabilities.

### Available Operations

* [generateLoanSummary](#generateloansummary) - Generate loan summaries report
* [generateLoanTransactions](#generateloantransactions) - Generate loan transactions report
* [getLoanSummary](#getloansummary) - Get loan summaries
* [listLoanTransactions](#listloantransactions) - List loan transactions

## generateLoanSummary

The _Generate loan summaries_ endpoint requests the generation of the Loan Summaries report.

Learn more about Codat's liabilities feature [here](https://docs.codat.io/lending/features/liabilities-overview).

Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { SDK } from "openapi";
import { GenerateLoanSummaryRequest, GenerateLoanSummarySourceType } from "openapi/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const sourceType: GenerateLoanSummarySourceType = GenerateLoanSummarySourceType.Accounting;

  const res = await sdk.liabilities.generateLoanSummary(companyId, sourceType);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Unique identifier for a company.                                                                     | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                 |
| `sourceType`                                                                                         | [operations.GenerateLoanSummarySourceType](../../models/operations/generateloansummarysourcetype.md) | :heavy_check_mark:                                                                                   | Data source type.                                                                                    |                                                                                                      |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |                                                                                                      |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |                                                                                                      |


### Response

**Promise<[operations.GenerateLoanSummaryResponse](../../models/operations/generateloansummaryresponse.md)>**


## generateLoanTransactions

The _Generate loan transactions_ endpoint requests the generation of the Loan Transactions report.

Learn more about Codat's liabilities feature [here](https://docs.codat.io/lending/features/liabilities-overview).

Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { SDK } from "openapi";
import { GenerateLoanTransactionsRequest, GenerateLoanTransactionsSourceType } from "openapi/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const sourceType: GenerateLoanTransactionsSourceType = GenerateLoanTransactionsSourceType.Accounting;

  const res = await sdk.liabilities.generateLoanTransactions(companyId, sourceType);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Unique identifier for a company.                                                                               | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                           |
| `sourceType`                                                                                                   | [operations.GenerateLoanTransactionsSourceType](../../models/operations/generateloantransactionssourcetype.md) | :heavy_check_mark:                                                                                             | Data source type.                                                                                              |                                                                                                                |
| `retries`                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |                                                                                                                |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |                                                                                                                |


### Response

**Promise<[operations.GenerateLoanTransactionsResponse](../../models/operations/generateloantransactionsresponse.md)>**


## getLoanSummary

The *Get loan summaries* endpoint returns a summary by integration type of all loans identified from a company's accounting, banking, and commerce integrations.

The endpoint returns a list of a company's [loan summaries](https://docs.codat.io/lending-api#/schemas/LoanSummary) for each valid data connection.

Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { SDK } from "openapi";
import { GetLoanSummaryRequest, GetLoanSummarySourceType } from "openapi/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const sourceType: GetLoanSummarySourceType = GetLoanSummarySourceType.Banking;

  const res = await sdk.liabilities.getLoanSummary(companyId, sourceType);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `companyId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | Unique identifier for a company.                                                           | 8a210b68-6988-11ed-a1eb-0242ac120002                                                       |
| `sourceType`                                                                               | [operations.GetLoanSummarySourceType](../../models/operations/getloansummarysourcetype.md) | :heavy_check_mark:                                                                         | Data source type.                                                                          |                                                                                            |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |                                                                                            |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |                                                                                            |


### Response

**Promise<[operations.GetLoanSummaryResponse](../../models/operations/getloansummaryresponse.md)>**


## listLoanTransactions

The *List loan transactions* endpoint returns all [loan transactions](https://docs.codat.io/lending-api#/schemas/LoanTransactions) identified from a company's accounting, banking, and commerce integrations.

This detail gives analysts a better idea of the loan obligations a company may have.

Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { SDK } from "openapi";
import { ListLoanTransactionsRequest, ListLoanTransactionsSourceType } from "openapi/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const sourceType: ListLoanTransactionsSourceType = ListLoanTransactionsSourceType.Commerce;

  const res = await sdk.liabilities.listLoanTransactions(companyId, sourceType);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | Unique identifier for a company.                                                                       | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                   |
| `sourceType`                                                                                           | [operations.ListLoanTransactionsSourceType](../../models/operations/listloantransactionssourcetype.md) | :heavy_check_mark:                                                                                     | Data source type.                                                                                      |                                                                                                        |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |                                                                                                        |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |                                                                                                        |


### Response

**Promise<[operations.ListLoanTransactionsResponse](../../models/operations/listloantransactionsresponse.md)>**

