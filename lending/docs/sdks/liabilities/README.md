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
import { Lending } from "lending";
import { GenerateLoanSummaryRequest, SourceType } from "lending/dist/sdk/models/operations";

(async() => {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const sourceType: SourceType = SourceType.Accounting;

  const res = await sdk.liabilities.generateLoanSummary(companyId, sourceType);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                             | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `companyId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for a company.                                      | 8a210b68-6988-11ed-a1eb-0242ac120002                                  |
| `sourceType`                                                          | [operations.SourceType](../../../sdk/models/operations/sourcetype.md) | :heavy_check_mark:                                                    | Data source type.                                                     |                                                                       |
| `retries`                                                             | [utils.RetryConfig](../../internal/utils/retryconfig.md)              | :heavy_minus_sign:                                                    | Configuration to override the default retry behavior of the client.   |                                                                       |
| `config`                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)          | :heavy_minus_sign:                                                    | Available config options for making requests.                         |                                                                       |


### Response

**Promise<[operations.GenerateLoanSummaryResponse](../../sdk/models/operations/generateloansummaryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## generateLoanTransactions

The _Generate loan transactions_ endpoint requests the generation of the Loan Transactions report.

Learn more about Codat's liabilities feature [here](https://docs.codat.io/lending/features/liabilities-overview).

Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { Lending } from "lending";
import { GenerateLoanTransactionsRequest, QueryParamSourceType } from "lending/dist/sdk/models/operations";

(async() => {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const sourceType: QueryParamSourceType = QueryParamSourceType.Accounting;

  const res = await sdk.liabilities.generateLoanTransactions(companyId, sourceType);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                 | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `companyId`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | Unique identifier for a company.                                                          | 8a210b68-6988-11ed-a1eb-0242ac120002                                                      |
| `sourceType`                                                                              | [operations.QueryParamSourceType](../../../sdk/models/operations/queryparamsourcetype.md) | :heavy_check_mark:                                                                        | Data source type.                                                                         |                                                                                           |
| `retries`                                                                                 | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                  | :heavy_minus_sign:                                                                        | Configuration to override the default retry behavior of the client.                       |                                                                                           |
| `config`                                                                                  | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                              | :heavy_minus_sign:                                                                        | Available config options for making requests.                                             |                                                                                           |


### Response

**Promise<[operations.GenerateLoanTransactionsResponse](../../sdk/models/operations/generateloantransactionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getLoanSummary

The *Get loan summaries* endpoint returns a summary by integration type of all loans identified from a company's accounting, banking, and commerce integrations.

The endpoint returns a list of a company's [loan summaries](https://docs.codat.io/lending-api#/schemas/LoanSummary) for each valid data connection.

Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { Lending } from "lending";
import { GetLoanSummaryQueryParamSourceType, GetLoanSummaryRequest } from "lending/dist/sdk/models/operations";

(async() => {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const sourceType: GetLoanSummaryQueryParamSourceType = GetLoanSummaryQueryParamSourceType.Banking;

  const res = await sdk.liabilities.getLoanSummary(companyId, sourceType);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                             | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Unique identifier for a company.                                                                                      | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                                  |
| `sourceType`                                                                                                          | [operations.GetLoanSummaryQueryParamSourceType](../../../sdk/models/operations/getloansummaryqueryparamsourcetype.md) | :heavy_check_mark:                                                                                                    | Data source type.                                                                                                     |                                                                                                                       |
| `retries`                                                                                                             | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                              | :heavy_minus_sign:                                                                                                    | Configuration to override the default retry behavior of the client.                                                   |                                                                                                                       |
| `config`                                                                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                          | :heavy_minus_sign:                                                                                                    | Available config options for making requests.                                                                         |                                                                                                                       |


### Response

**Promise<[operations.GetLoanSummaryResponse](../../sdk/models/operations/getloansummaryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listLoanTransactions

The *List loan transactions* endpoint returns all [loan transactions](https://docs.codat.io/lending-api#/schemas/LoanTransactions) identified from a company's accounting, banking, and commerce integrations.

This detail gives analysts a better idea of the loan obligations a company may have.

Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { Lending } from "lending";
import { ListLoanTransactionsQueryParamSourceType, ListLoanTransactionsRequest } from "lending/dist/sdk/models/operations";

(async() => {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const sourceType: ListLoanTransactionsQueryParamSourceType = ListLoanTransactionsQueryParamSourceType.Commerce;

  const res = await sdk.liabilities.listLoanTransactions(companyId, sourceType);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                         | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                       | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | Unique identifier for a company.                                                                                                  | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                                              |
| `sourceType`                                                                                                                      | [operations.ListLoanTransactionsQueryParamSourceType](../../../sdk/models/operations/listloantransactionsqueryparamsourcetype.md) | :heavy_check_mark:                                                                                                                | Data source type.                                                                                                                 |                                                                                                                                   |
| `retries`                                                                                                                         | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                          | :heavy_minus_sign:                                                                                                                | Configuration to override the default retry behavior of the client.                                                               |                                                                                                                                   |
| `config`                                                                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                      | :heavy_minus_sign:                                                                                                                | Available config options for making requests.                                                                                     |                                                                                                                                   |


### Response

**Promise<[operations.ListLoanTransactionsResponse](../../sdk/models/operations/listloantransactionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
