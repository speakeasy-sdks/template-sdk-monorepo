# ExcelReports
(*excelReports*)

## Overview

Download reports in Excel format.

### Available Operations

* [download](#download) - Download Excel report
* [generate](#generate) - Generate Excel report
* [getStatus](#getstatus) - Get Excel report status

## download

﻿The *Download Excel report* endpoint downloads the latest successfully generated Excel report of a specified report type for a given company. 

The downloadable Excel file is returned in the response. You can save it to your local machine.

You can [learn more](https://docs.codat.io/lending/excel/overview) about valid Excel report types.

### Example Usage

```typescript
import { SDK } from "openapi";
import { DownloadExcelReportRequest } from "openapi/dist/sdk/models/operations";
import { ExcelReportTypes } from "openapi/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const reportType: ExcelReportTypes = ExcelReportTypes.EnhancedFinancials;

  const res = await sdk.excelReports.download(companyId, reportType);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `reportType`                                                        | [shared.ExcelReportTypes](../../models/shared/excelreporttypes.md)  | :heavy_check_mark:                                                  | The type of report you want to generate and download.               |                                                                     |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.DownloadExcelReportResponse](../../models/operations/downloadexcelreportresponse.md)>**


## generate

The *Generate Excel report* endpoint requests the production of a downloadable Excel file for a report type specified in the `reportType` query parameter.

In response, the endpoint returns the [status](https://docs.codat.io/lending-api#/schemas/ExcelStatus) detailing the current state of the report generation request.

### Report types

| reportType                                                                           | Description                                                                                                                                   |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| [audit](https://docs.codat.io/lending/excel/audit-report)                            | Identifies inaccurate or out-of-date accounts, helping you to make decisions with confidence.                                                   || [audit](https://docs.codat.io/lending/excel/audit-report)                            | Identify inaccurate or out-of-date accounts, helping you to make decisions with confidence.                                                   |
| [enhancedCashFlow](https://docs.codat.io/lending/excel/enhanced-invoices-report)     | Provides a fully categorized list of bank transactions for a company, allowing lenders to accurately forecast a company's cash flow.  |
| [enhancedFinancials](https://docs.codat.io/lending/excel/enhanced-financials-report) | Supports decision-making using fully categorized financial statements to allow lenders to automate their underwriting processes.                |
| [enhancedInvoices](https://docs.codat.io/lending/excel/enhanced-invoices-report)     | Helps verify that payments have been made against historic invoices. Great for invoice finance lenders.                                       |

[Learn more](https://docs.codat.io/lending/excel/overview) about valid Excel report types.




### Example Usage

```typescript
import { SDK } from "openapi";
import { GenerateExcelReportRequest } from "openapi/dist/sdk/models/operations";
import { ExcelReportTypes } from "openapi/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const reportType: ExcelReportTypes = ExcelReportTypes.EnhancedInvoices;

  const res = await sdk.excelReports.generate(companyId, reportType);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `reportType`                                                        | [shared.ExcelReportTypes](../../models/shared/excelreporttypes.md)  | :heavy_check_mark:                                                  | The type of report you want to generate and download.               |                                                                     |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GenerateExcelReportResponse](../../models/operations/generateexcelreportresponse.md)>**


## getStatus

﻿The *Get Excel report status* returns the status of the report mostly recently requested for Excel generation. It does not return the status of any historical report requests. 

Poll this endpoint to check the progress of the report once you have requested its generation. This will not affect the generation of the report. 

When the report generation completes successfully, the `inProgress` property will be marked as `false` and the `success` field will be marked as `true`.

### Example Usage

```typescript
import { SDK } from "openapi";
import { GetExcelReportGenerationStatusRequest } from "openapi/dist/sdk/models/operations";
import { ExcelReportTypes } from "openapi/dist/sdk/models/shared";

(async() => {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const reportType: ExcelReportTypes = ExcelReportTypes.EnhancedCashFlow;

  const res = await sdk.excelReports.getStatus(companyId, reportType);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `reportType`                                                        | [shared.ExcelReportTypes](../../models/shared/excelreporttypes.md)  | :heavy_check_mark:                                                  | The type of report you want to generate and download.               |                                                                     |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetExcelReportGenerationStatusResponse](../../models/operations/getexcelreportgenerationstatusresponse.md)>**

