# AccountsReceivableReports
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
import { SDK } from "openapi";
import { GetAccountingAgedCreditorsReportRequest } from "openapi/dist/sdk/models/operations";
import { RFCDate } from "openapi/dist/sdk/types";

(async() => {
  const sdk = new SDK({
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

**Promise<[operations.GetAccountingAgedCreditorsReportResponse](../../models/operations/getaccountingagedcreditorsreportresponse.md)>**


## getAgedDebtors

Returns aged debtors report for company that shows the total outstanding balance due from customers to the business over time.

### Example Usage

```typescript
import { SDK } from "openapi";
import { GetAccountingAgedDebtorsReportRequest } from "openapi/dist/sdk/models/operations";
import { RFCDate } from "openapi/dist/sdk/types";

(async() => {
  const sdk = new SDK({
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

**Promise<[operations.GetAccountingAgedDebtorsReportResponse](../../models/operations/getaccountingageddebtorsreportresponse.md)>**


## isAgedCreditorsAvailable

Indicates whether the aged creditor report is available for the company.

### Example Usage

```typescript
import { SDK } from "openapi";
import { IsAgedCreditorsReportAvailableRequest } from "openapi/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";

  const res = await sdk.accountsReceivable.reports.isAgedCreditorsAvailable(companyId);

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


## isAgedDebtorsAvailable

Indicates whether the aged debtors report is available for the company.

### Example Usage

```typescript
import { SDK } from "openapi";
import { IsAgedDebtorsReportAvailableRequest } from "openapi/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";

  const res = await sdk.accountsReceivable.reports.isAgedDebtorsAvailable(companyId);

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

**Promise<[operations.IsAgedDebtorsReportAvailableResponse](../../models/operations/isageddebtorsreportavailableresponse.md)>**

