# Reports
(*reports*)

## Overview

Reports

### Available Operations

* [getAgedCreditorsReport](#getagedcreditorsreport) - Aged creditors report
* [getAgedDebtorsReport](#getageddebtorsreport) - Aged debtors report
* [getBalanceSheet](#getbalancesheet) - Get balance sheet
* [getCashFlowStatement](#getcashflowstatement) - Get cash flow statement
* [getProfitAndLoss](#getprofitandloss) - Get profit and loss
* [isAgedCreditorsReportAvailable](#isagedcreditorsreportavailable) - Aged creditors report available
* [isAgedDebtorReportAvailable](#isageddebtorreportavailable) - Aged debtors report available

## getAgedCreditorsReport

Returns aged creditors report for company that shows the total balance owed by a business to its suppliers over time.

### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetAgedCreditorsReportRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";
import { RFCDate } from "@speakeasy-sdks/accounting/dist/sdk/types";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const numberOfPeriods: number = 12;
const periodLengthDays: number = 30;
const reportDate: RFCDate = new RFCDate("2022-12-31");

  const res = await sdk.reports.getAgedCreditorsReport(companyId, numberOfPeriods, periodLengthDays, reportDate);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `numberOfPeriods`                                                   | *number*                                                            | :heavy_minus_sign:                                                  | Number of periods to include in the report.                         | 12                                                                  |
| `periodLengthDays`                                                  | *number*                                                            | :heavy_minus_sign:                                                  | The length of period in days.                                       | 30                                                                  |
| `reportDate`                                                        | [RFCDate](../../types/rfcdate.md)                                   | :heavy_minus_sign:                                                  | Date the report is generated up to.                                 | 2022-12-31                                                          |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetAgedCreditorsReportResponse](../../models/operations/getagedcreditorsreportresponse.md)>**


## getAgedDebtorsReport

Returns aged debtors report for company that shows the total outstanding balance due from customers to the business over time.

### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetAgedDebtorsReportRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";
import { RFCDate } from "@speakeasy-sdks/accounting/dist/sdk/types";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const numberOfPeriods: number = 12;
const periodLengthDays: number = 30;
const reportDate: RFCDate = new RFCDate("2022-12-31");

  const res = await sdk.reports.getAgedDebtorsReport(companyId, numberOfPeriods, periodLengthDays, reportDate);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `numberOfPeriods`                                                   | *number*                                                            | :heavy_minus_sign:                                                  | Number of periods to include in the report.                         | 12                                                                  |
| `periodLengthDays`                                                  | *number*                                                            | :heavy_minus_sign:                                                  | The length of period in days.                                       | 30                                                                  |
| `reportDate`                                                        | [RFCDate](../../types/rfcdate.md)                                   | :heavy_minus_sign:                                                  | Date the report is generated up to.                                 | 2022-12-31                                                          |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetAgedDebtorsReportResponse](../../models/operations/getageddebtorsreportresponse.md)>**


## getBalanceSheet

Gets the latest balance sheet for a company.

### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetBalanceSheetRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const periodLength: number = 4;
const periodsToCompare: number = 20;
const startMonth: string = "2022-10-23T00:00:00.000Z";

  const res = await sdk.reports.getBalanceSheet(companyId, periodLength, periodsToCompare, startMonth);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `periodLength`                                                      | *number*                                                            | :heavy_check_mark:                                                  | Number of months defining the period of interest.                   | 4                                                                   |
| `periodsToCompare`                                                  | *number*                                                            | :heavy_check_mark:                                                  | Number of periods with `periodLength` to compare.                   | 20                                                                  |
| `startMonth`                                                        | *string*                                                            | :heavy_minus_sign:                                                  | The month the report starts from.                                   | 2022-10-23T00:00:00.000Z                                            |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetBalanceSheetResponse](../../models/operations/getbalancesheetresponse.md)>**


## getCashFlowStatement

Gets the latest cash flow statement for a company.

### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetCashFlowStatementRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const periodLength: number = 4;
const periodsToCompare: number = 20;
const startMonth: string = "2022-10-23T00:00:00.000Z";

  const res = await sdk.reports.getCashFlowStatement(companyId, periodLength, periodsToCompare, startMonth);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `periodLength`                                                      | *number*                                                            | :heavy_check_mark:                                                  | Number of months defining the period of interest.                   | 4                                                                   |
| `periodsToCompare`                                                  | *number*                                                            | :heavy_check_mark:                                                  | Number of periods with `periodLength` to compare.                   | 20                                                                  |
| `startMonth`                                                        | *string*                                                            | :heavy_minus_sign:                                                  | The month the report starts from.                                   | 2022-10-23T00:00:00.000Z                                            |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetCashFlowStatementResponse](../../models/operations/getcashflowstatementresponse.md)>**


## getProfitAndLoss

Gets the latest profit and loss for a company.

### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetProfitAndLossRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const periodLength: number = 4;
const periodsToCompare: number = 20;
const startMonth: string = "2022-10-23T00:00:00.000Z";

  const res = await sdk.reports.getProfitAndLoss(companyId, periodLength, periodsToCompare, startMonth);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `periodLength`                                                      | *number*                                                            | :heavy_check_mark:                                                  | Number of months defining the period of interest.                   | 4                                                                   |
| `periodsToCompare`                                                  | *number*                                                            | :heavy_check_mark:                                                  | Number of periods with `periodLength` to compare.                   | 20                                                                  |
| `startMonth`                                                        | *string*                                                            | :heavy_minus_sign:                                                  | The month the report starts from.                                   | 2022-10-23T00:00:00.000Z                                            |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetProfitAndLossResponse](../../models/operations/getprofitandlossresponse.md)>**


## isAgedCreditorsReportAvailable

Indicates whether the aged creditor report is available for the company.

### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { IsAgedCreditorsReportAvailableRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";

  const res = await sdk.reports.isAgedCreditorsReportAvailable(companyId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.IsAgedCreditorsReportAvailableResponse](../../models/operations/isagedcreditorsreportavailableresponse.md)>**


## isAgedDebtorReportAvailable

Indicates whether the aged debtor report is available for the company.

### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { IsAgedDebtorReportAvailableRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";

  const res = await sdk.reports.isAgedDebtorReportAvailable(companyId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.IsAgedDebtorReportAvailableResponse](../../models/operations/isageddebtorreportavailableresponse.md)>**

