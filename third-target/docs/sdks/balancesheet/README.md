# BalanceSheet
(*financialStatements.balanceSheet*)

### Available Operations

* [getCategorizedAccounts](#getcategorizedaccounts) - Get categorized balance sheet statement
* [get](#get) - Get balance sheet

## getCategorizedAccounts

The *Get categorized balance sheet statement* endpoint returns a list of categorized accounts that appear on a company’s Balance Sheet along with a balance per financial statement date.

Codat suggests a category for each account automatically, but you can [change it](https://docs.codat.io/lending/enhanced-financials/overview#categorize-accounts) to a more suitable one.

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
  const reportDate = "29-09-2020";
  const numberOfPeriods = 258121;
  
  const result = await sdk.financialStatements.balanceSheet.getCategorizedAccounts(companyId, reportDate, numberOfPeriods);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Unique identifier for a company.                                                                                                                                               | [object Object]                                                                                                                                                                |
| `reportDate`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.                                   | [object Object]                                                                                                                                                                |
| `numberOfPeriods`                                                                                                                                                              | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The number of periods to return. If not provided, 12 periods will be used as the default value.                                                                                |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |


### Response

**Promise<[operations.GetCategorizedBalanceSheetStatementResponse](../../models/operations/getcategorizedbalancesheetstatementresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## get

Gets the latest balance sheet for a company.

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
  const periodLength = 4;
  const periodsToCompare = 20;
  const startMonth = "2022-10-23T00:00:00Z";
  
  const result = await sdk.financialStatements.balanceSheet.get(companyId, periodLength, periodsToCompare, startMonth);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Unique identifier for a company.                                                                                                                                               | [object Object]                                                                                                                                                                |
| `periodLength`                                                                                                                                                                 | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Number of months defining the period of interest.                                                                                                                              | [object Object]                                                                                                                                                                |
| `periodsToCompare`                                                                                                                                                             | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Number of periods with `periodLength` to compare.                                                                                                                              | [object Object]                                                                                                                                                                |
| `startMonth`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The month the report starts from.                                                                                                                                              | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |


### Response

**Promise<[operations.GetAccountingBalanceSheetResponse](../../models/operations/getaccountingbalancesheetresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 401,402,403,404,409,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |
