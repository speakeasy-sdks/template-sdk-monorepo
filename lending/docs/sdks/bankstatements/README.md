# BankStatements
(*bankStatements*)

## Overview

Retrieve banking data from linked bank accounts.

### Available Operations

* [endUploadSession](#enduploadsession) - End upload session
* [getUploadConfiguration](#getuploadconfiguration) - Get upload configuration
* [setUploadConfiguration](#setuploadconfiguration) - Set upload configuration
* [startUploadSession](#startuploadsession) - Start upload session
* [uploadBankStatementData](#uploadbankstatementdata) - Upload data

## endUploadSession

Use the *End upload session* endpoint to finalize a bank statement upload session. Include a `status` in the request body to indicate if you want to cancel the processing of the dataset or trigger the ingestion and enrichment of the data.

A session is a one-time process that enables you to upload bank statements to Codat. It will time out after 90 minutes if no data is uploaded.

### Example Usage

```typescript
import { Lending } from "lending";
import { EndBankStatementUploadSessionRequest } from "lending/dist/sdk/models/operations";
import { EndUploadSessionRequest, EndUploadSessionRequestStatus } from "lending/dist/sdk/models/shared";

async function run() {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const datasetId: string = "d58db2ab-edef-4881-8b6b-a7e79d33244c";
const endUploadSessionRequest: EndUploadSessionRequest = {};

  const res = await sdk.bankStatements.endUploadSession(companyId, connectionId, datasetId, endUploadSessionRequest);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `companyId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | Unique identifier for a company.                                                     | 8a210b68-6988-11ed-a1eb-0242ac120002                                                 |
| `connectionId`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | Unique identifier for a connection.                                                  | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                 |
| `datasetId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | Unique identifier for the dataset that completed its sync.                           |                                                                                      |
| `endUploadSessionRequest`                                                            | [shared.EndUploadSessionRequest](../../sdk/models/shared/enduploadsessionrequest.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `retries`                                                                            | [utils.RetryConfig](../../internal/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |                                                                                      |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |                                                                                      |


### Response

**Promise<[operations.EndBankStatementUploadSessionResponse](../../sdk/models/operations/endbankstatementuploadsessionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUploadConfiguration

Use the *Get upload configuration* endpoint to view the existing bank statement upload configuration for the specified data connection.

With this configuration, you set the source of the data you plan to upload, the ID of the account in third-party banking platform, and a provider ID, if required. This lets us determine the expected format of the data and any source-specific requirements.

When you use the [*Upload data*](https://docs.codat.io/lending-api#/operations/upload-bank-statement-data) endpoint next, you must upload the data for the account you configured. 

### Example Usage

```typescript
import { Lending } from "lending";
import { GetBankStatementUploadConfigurationRequest } from "lending/dist/sdk/models/operations";

async function run() {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

  const res = await sdk.bankStatements.getUploadConfiguration(companyId, connectionId);

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
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a connection.                                 | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetBankStatementUploadConfigurationResponse](../../sdk/models/operations/getbankstatementuploadconfigurationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## setUploadConfiguration

Use the *Set upload configuration* endpoint to create bank statement upload configuration for the specified data connection. 

With this configuration, you set the source of the data you plan to upload, the ID of the account in third-party banking platform, and a provider ID, if required. This lets us determine the expected format of the data and any source-specific requirements.

Each data connection can only have one configuration for each company and external account ID combination. You will receive a Bad Request response if you try to set it again. 

### Example Usage

```typescript
import { Lending } from "lending";
import { SetBankStatementUploadConfigurationRequest } from "lending/dist/sdk/models/operations";
import { BankStatementUploadConfiguration, Source } from "lending/dist/sdk/models/shared";

async function run() {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const bankStatementUploadConfiguration: BankStatementUploadConfiguration = {};

  const res = await sdk.bankStatements.setUploadConfiguration(companyId, connectionId, bankStatementUploadConfiguration);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | Unique identifier for a company.                                                                       | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                   |
| `connectionId`                                                                                         | *string*                                                                                               | :heavy_check_mark:                                                                                     | Unique identifier for a connection.                                                                    | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                                   |
| `bankStatementUploadConfiguration`                                                                     | [shared.BankStatementUploadConfiguration](../../sdk/models/shared/bankstatementuploadconfiguration.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `retries`                                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |                                                                                                        |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |                                                                                                        |


### Response

**Promise<[operations.SetBankStatementUploadConfigurationResponse](../../sdk/models/operations/setbankstatementuploadconfigurationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## startUploadSession

Use the *Start upload session* endpoint to initiate a bank statement upload session for a given company.

A session is a one-time process that enables you to upload bank statements to Codat. It will time out after 90 minutes if no data is uploaded. 

You can only have one active session per data type at a time. You can complete or cancel a session using the [*End upload session*](https://docs.codat.io/lending-api#/operations/end-bank-statement-upload-session) endpoint.

### Example Usage

```typescript
import { Lending } from "lending";
import { StartBankStatementUploadSessionRequest } from "lending/dist/sdk/models/operations";
import { StartUploadSessionRequest, StartUploadSessionRequestDataType } from "lending/dist/sdk/models/shared";

async function run() {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const startUploadSessionRequest: StartUploadSessionRequest = {};

  const res = await sdk.bankStatements.startUploadSession(companyId, connectionId, startUploadSessionRequest);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `companyId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | Unique identifier for a company.                                                         | 8a210b68-6988-11ed-a1eb-0242ac120002                                                     |
| `connectionId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | Unique identifier for a connection.                                                      | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                     |
| `startUploadSessionRequest`                                                              | [shared.StartUploadSessionRequest](../../sdk/models/shared/startuploadsessionrequest.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `retries`                                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |                                                                                          |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |                                                                                          |


### Response

**Promise<[operations.StartBankStatementUploadSessionResponse](../../sdk/models/operations/startbankstatementuploadsessionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## uploadBankStatementData

During an active session, use the **Upload data* endpoint to uploads a page of bank accounts or bank transactions data to the session.

Make sure you created configuration for the account using the [*Set upload configuration*](https://docs.codat.io/lending-api#/operations/set-bank-statement-upload-configuration) endpoint before attempting an upload. 

### Example Usage

```typescript
import { Lending } from "lending";
import { Path } from "lending/dist/sdk/models/shared";

async function run() {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const res = await sdk.bankStatements.uploadBankStatementData({
    requestBody: "<value>",
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    datasetId: "10afb615-fc5a-4e43-99bd-eeba7c3a2259",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.UploadBankStatementDataRequest](../../sdk/models/operations/uploadbankstatementdatarequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.UploadBankStatementDataResponse](../../sdk/models/operations/uploadbankstatementdataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
