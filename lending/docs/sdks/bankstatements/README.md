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

The *End upload session* endpoint finalizes a bank statement upload session, either cancelling the dataset or triggering ingestion of the data and enrichment of uploaded transactions.

A session is a one-time process where bank statements can be uploaded to Codat. The session will time out if no data is uploaded for 90 minutes.

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

The *Get upload configuration* endpoint returns the bank statement upload configuration for the data connection.

Bank statement upload configuration allows configuration of the source of the data to be uploaded to the *Upload data* endpoint, the provider ID for a truelayer connection, and sets the account ID of the account. Data uploaded to the *Upload data* endpoint must be for the configured account.Bank statement upload configuration is used to define the source from which data is to be uploaded as well as any source specific requirements such as the provider ID for TrueLayer. 

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

The *Set upload configuration* endpoint sets the bank statement upload configuration for the data connection

Bank statement upload configuration is used to define the source from which data is to be uploaded as well as any source specific requirements such as the provider ID for TrueLayer.

If configuration is already present for the data connection a Bad Request response will be returned. If there is already a data connection for the same company with the same account ID, a Bad Request response will be returned.

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

The *Start upload session* endpoint initiates a bank statement upload session for a given company.

A session is a one-time session where bank statements can be uploaded to Codat.

If a session is already in progress for a data type bad request will be returned. The session will time out if no data is uploaded for 90 minutes.
Use the *Close upload session* endpoint to complete or cancel a session. 

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

The *Upload data* endpoint uploads a page of bank accounts or bank transactions data to the session.

Upload data will only be accepted for the account configured via the *Set upload configuration* endpoint, and configuration is required before uploading.

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
