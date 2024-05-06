# Liabilities
(*liabilities*)

## Overview

Debt and other liabilities.

### Available Operations

* [generateLoanTransactions](#generateloantransactions) - Generate loan transactions report
* [listLoanTransactions](#listloantransactions) - List loan transactions
* [generateLoanSummary](#generateloansummary) - Generate loan summaries report
* [getLoanSummary](#getloansummary) - Get loan summaries

## generateLoanTransactions

The _Generate loan transactions_ endpoint requests the generation of the Loan Transactions report.

Learn more about Codat's liabilities feature [here](https://docs.codat.io/lending/features/liabilities-overview).

Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { SDK } from "openapi";
import { SourceType } from "openapi/models/operations";

async function run() {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
  const sourceType = SourceType.Accounting;
  
  const result = await sdk.liabilities.generateLoanTransactions(companyId, sourceType);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Unique identifier for a company.                                                                                                                                               | [object Object]                                                                                                                                                                |
| `sourceType`                                                                                                                                                                   | [operations.SourceType](../../models/operations/sourcetype.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                             | Data source type.                                                                                                                                                              |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |


### Response

**Promise<[operations.GenerateLoanTransactionsResponse](../../models/operations/generateloantransactionsresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## listLoanTransactions

The *List loan transactions* endpoint returns all [loan transactions](https://docs.codat.io/lending-api#/schemas/LoanTransactions) identified from a company's accounting, banking, and commerce integrations.

This detail gives analysts a better idea of the loan obligations a company may have.

Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { SDK } from "openapi";
import { QueryParamSourceType } from "openapi/models/operations";

async function run() {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
  const sourceType = QueryParamSourceType.Commerce;
  
  const result = await sdk.liabilities.listLoanTransactions(companyId, sourceType);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Unique identifier for a company.                                                                                                                                               | [object Object]                                                                                                                                                                |
| `sourceType`                                                                                                                                                                   | [operations.QueryParamSourceType](../../models/operations/queryparamsourcetype.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | Data source type.                                                                                                                                                              |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |


### Response

**Promise<[operations.ListLoanTransactionsResponse](../../models/operations/listloantransactionsresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## generateLoanSummary

The _Generate loan summaries_ endpoint requests the generation of the Loan Summaries report.

Learn more about Codat's liabilities feature [here](https://docs.codat.io/lending/features/liabilities-overview).

Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { SDK } from "openapi";
import { GenerateLoanSummaryQueryParamSourceType } from "openapi/models/operations";

async function run() {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
  const sourceType = GenerateLoanSummaryQueryParamSourceType.Accounting;
  
  const result = await sdk.liabilities.generateLoanSummary(companyId, sourceType);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Unique identifier for a company.                                                                                                                                               | [object Object]                                                                                                                                                                |
| `sourceType`                                                                                                                                                                   | [operations.GenerateLoanSummaryQueryParamSourceType](../../models/operations/generateloansummaryqueryparamsourcetype.md)                                                       | :heavy_check_mark:                                                                                                                                                             | Data source type.                                                                                                                                                              |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |


### Response

**Promise<[operations.GenerateLoanSummaryResponse](../../models/operations/generateloansummaryresponse.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorMessage         | 401,402,403,404,429,500,503 | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## getLoanSummary

The *Get loan summaries* endpoint returns a summary by integration type of all loans identified from a company's accounting, banking, and commerce integrations.

The endpoint returns a list of a company's [loan summaries](https://docs.codat.io/lending-api#/schemas/LoanSummary) for each valid data connection.

Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { SDK } from "openapi";
import { GetLoanSummaryQueryParamSourceType } from "openapi/models/operations";

async function run() {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
  const sourceType = GetLoanSummaryQueryParamSourceType.Banking;
  
  const result = await sdk.liabilities.getLoanSummary(companyId, sourceType);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Unique identifier for a company.                                                                                                                                               | [object Object]                                                                                                                                                                |
| `sourceType`                                                                                                                                                                   | [operations.GetLoanSummaryQueryParamSourceType](../../models/operations/getloansummaryqueryparamsourcetype.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | Data source type.                                                                                                                                                              |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |


### Response

**Promise<[operations.GetLoanSummaryResponse](../../models/operations/getloansummaryresponse.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorMessage         | 401,402,403,404,429,500,503 | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
