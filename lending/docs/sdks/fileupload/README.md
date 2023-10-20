# FileUpload
(*fileUpload*)

## Overview

Endpoints to manage uploaded files.

### Available Operations

* [download](#download) - Download all files for a company
* [listUploaded](#listuploaded) - List all files uploaded by a company
* [upload](#upload) - Upload files for a company

## download

The *Download files* endpoint downloads all files that have  been uploaded by to SMB to Codat. A `date` may be specified to download any files uploaded on the date provided.

### Example Usage

```typescript
import { SDK } from "openapi";
import { DownloadFilesRequest } from "openapi/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const date: string = "2022-10-23T00:00:00.000Z";

  const res = await sdk.fileUpload.download(companyId, date);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `date`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | Only download files uploaded on this date.                          | 2022-10-23T00:00:00.000Z                                            |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.DownloadFilesResponse](../../models/operations/downloadfilesresponse.md)>**


## listUploaded

﻿The *List files* endpoint returns a list of all files uploaded to Codat by the SMB. 

### Example Usage

```typescript
import { SDK } from "openapi";
import { ListFilesRequest } from "openapi/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";

  const res = await sdk.fileUpload.listUploaded(companyId);

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

**Promise<[operations.ListFilesResponse](../../models/operations/listfilesresponse.md)>**


## upload

The *Upload files* endpoint uploads multiple files provided by the SMB to Codat. This may include personal identity documents, pitch decks, contracts, or files with accounting and banking data.

Uploaded files must meet the following requirements:

- Up to 20 files can be uploaded at a time.
- PDF, XLS, XLSX, XLSB, CSV, DOC, DOCX, PPT, PPTX, JPEG, JPG, and PNG files can be uploaded.
- Each file can be up to 10MB in size.

### Example Usage

```typescript
import { SDK } from "openapi";
import { UploadFilesRequest, UploadFilesRequestBody } from "openapi/dist/sdk/models/operations";

(async() => {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const requestBody: UploadFilesRequestBody = {
  content: "F?SRSKG@^n" as bytes <<<>>>,
  requestBody: "incubate",
};

  const res = await sdk.fileUpload.upload(companyId, connectionId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `companyId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier for a company.                                                       | 8a210b68-6988-11ed-a1eb-0242ac120002                                                   |
| `connectionId`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier for a connection.                                                    | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                   |
| `requestBody`                                                                          | [operations.UploadFilesRequestBody](../../models/operations/uploadfilesrequestbody.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |                                                                                        |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |                                                                                        |


### Response

**Promise<[operations.UploadFilesResponse](../../models/operations/uploadfilesresponse.md)>**

