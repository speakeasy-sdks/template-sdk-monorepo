# Reports
(*accountsReceivable.reports*)

### Available Operations

* [getAgedCreditors](#getagedcreditors) - Aged creditors report
* [getAgedDebtors](#getageddebtors) - Aged debtors report
* [isAgedCreditorsAvailable](#isagedcreditorsavailable) - Aged creditors report available
* [isAgedDebtorsAvailable](#isageddebtorsavailable) - Aged debtors report available

## getAgedCreditors

Returns aged creditors report for company that shows the total balance owed by a business to its suppliers over time.

### Example Usage

```typescript
import { Lending } from "lending";
import { GetAccountingAgedCreditorsReportRequest } from "lending/dist/sdk/models/operations";
import { RFCDate } from "lending/dist/sdk/types";

async function run() {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const numberOfPeriods: number = 12;
const periodLengthDays: number = 30;
const reportDate: RFCDate = new RFCDate("2022-12-31");

  const res = await sdk.accountsReceivable.reports.getAgedCreditors(companyId, numberOfPeriods, periodLengthDays, reportDate);

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
| `numberOfPeriods`                                                   | *number*                                                            | :heavy_minus_sign:                                                  | Number of periods to include in the report.                         | 12                                                                  |
| `periodLengthDays`                                                  | *number*                                                            | :heavy_minus_sign:                                                  | The length of period in days.                                       | 30                                                                  |
| `reportDate`                                                        | [RFCDate](../../types/rfcdate.md)                                   | :heavy_minus_sign:                                                  | Date the report is generated up to.                                 | 2022-12-31                                                          |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetAccountingAgedCreditorsReportResponse](../../sdk/models/operations/getaccountingagedcreditorsreportresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getAgedDebtors

Returns aged debtors report for company that shows the total outstanding balance due from customers to the business over time.

### Example Usage

```typescript
import { Lending } from "lending";
import { GetAccountingAgedDebtorsReportRequest } from "lending/dist/sdk/models/operations";
import { RFCDate } from "lending/dist/sdk/types";

async function run() {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const numberOfPeriods: number = 12;
const periodLengthDays: number = 30;
const reportDate: RFCDate = new RFCDate("2022-12-31");

  const res = await sdk.accountsReceivable.reports.getAgedDebtors(companyId, numberOfPeriods, periodLengthDays, reportDate);

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
| `numberOfPeriods`                                                   | *number*                                                            | :heavy_minus_sign:                                                  | Number of periods to include in the report.                         | 12                                                                  |
| `periodLengthDays`                                                  | *number*                                                            | :heavy_minus_sign:                                                  | The length of period in days.                                       | 30                                                                  |
| `reportDate`                                                        | [RFCDate](../../types/rfcdate.md)                                   | :heavy_minus_sign:                                                  | Date the report is generated up to.                                 | 2022-12-31                                                          |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetAccountingAgedDebtorsReportResponse](../../sdk/models/operations/getaccountingageddebtorsreportresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## isAgedCreditorsAvailable

Indicates whether the aged creditor report is available for the company.

### Example Usage

```typescript
import { Lending } from "lending";
import { IsAgedCreditorsReportAvailableRequest } from "lending/dist/sdk/models/operations";

async function run() {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";

  const res = await sdk.accountsReceivable.reports.isAgedCreditorsAvailable(companyId);

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
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.IsAgedCreditorsReportAvailableResponse](../../sdk/models/operations/isagedcreditorsreportavailableresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## isAgedDebtorsAvailable

Indicates whether the aged debtors report is available for the company.

### Example Usage

```typescript
import { Lending } from "lending";
import { IsAgedDebtorsReportAvailableRequest } from "lending/dist/sdk/models/operations";

async function run() {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";

  const res = await sdk.accountsReceivable.reports.isAgedDebtorsAvailable(companyId);

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
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.IsAgedDebtorsReportAvailableResponse](../../sdk/models/operations/isageddebtorsreportavailableresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
