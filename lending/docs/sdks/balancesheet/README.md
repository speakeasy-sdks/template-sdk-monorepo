# BalanceSheet
(*financialStatements.balanceSheet*)

### Available Operations

* [get](#get) - Get balance sheet
* [getCategorizedAccounts](#getcategorizedaccounts) - Get categorized balance sheet statement

## get

Gets the latest balance sheet for a company.

### Example Usage

```typescript
import { Lending } from "lending";
import { GetAccountingBalanceSheetRequest } from "lending/dist/sdk/models/operations";

async function run() {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const periodLength: number = 4;
const periodsToCompare: number = 20;
const startMonth: string = "2022-10-23T00:00:00.000Z";

  const res = await sdk.financialStatements.balanceSheet.get(companyId, periodLength, periodsToCompare, startMonth);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `periodLength`                                                      | *number*                                                            | :heavy_check_mark:                                                  | Number of months defining the period of interest.                   | 4                                                                   |
| `periodsToCompare`                                                  | *number*                                                            | :heavy_check_mark:                                                  | Number of periods with `periodLength` to compare.                   | 20                                                                  |
| `startMonth`                                                        | *string*                                                            | :heavy_minus_sign:                                                  | The month the report starts from.                                   | 2022-10-23T00:00:00.000Z                                            |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetAccountingBalanceSheetResponse](../../sdk/models/operations/getaccountingbalancesheetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getCategorizedAccounts

The *Get categorized balance sheet statement* endpoint returns a list of categorized accounts that appear on a company’s Balance Sheet along with a balance per financial statement date.

Codat suggests a category for each account automatically, but you can [change it](https://docs.codat.io/lending/enhanced-financials/overview#categorize-accounts) to a more suitable one.

### Example Usage

```typescript
import { Lending } from "lending";
import { GetCategorizedBalanceSheetStatementRequest } from "lending/dist/sdk/models/operations";

async function run() {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const reportDate: string = "29-09-2020";
const numberOfPeriods: number = 258121;

  const res = await sdk.financialStatements.balanceSheet.getCategorizedAccounts(companyId, reportDate, numberOfPeriods);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Unique identifier for a company.                                                                                                             | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                                                         |
| `reportDate`                                                                                                                                 | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month. | 29-09-2020                                                                                                                                   |
| `numberOfPeriods`                                                                                                                            | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | The number of periods to return. If not provided, 12 periods will be used as the default value.                                              |                                                                                                                                              |
| `retries`                                                                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                                     | :heavy_minus_sign:                                                                                                                           | Configuration to override the default retry behavior of the client.                                                                          |                                                                                                                                              |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |                                                                                                                                              |


### Response

**Promise<[operations.GetCategorizedBalanceSheetStatementResponse](../../sdk/models/operations/getcategorizedbalancesheetstatementresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
