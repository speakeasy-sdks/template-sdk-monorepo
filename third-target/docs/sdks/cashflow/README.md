# CashFlow
(*financialStatements.cashFlow*)

### Available Operations

* [get](#get) - Get cash flow statement

## get

Gets the latest cash flow statement for a company.

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
  
  const result = await sdk.financialStatements.cashFlow.get(companyId, periodLength, periodsToCompare, startMonth);

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

**Promise<[operations.GetAccountingCashFlowStatementResponse](../../models/operations/getaccountingcashflowstatementresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 401,402,403,404,409,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |
