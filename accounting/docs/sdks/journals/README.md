# Journals
(*journals*)

## Overview

Journals

### Available Operations

* [create](#create) - Create journal
* [get](#get) - Get journal
* [getCreateModel](#getcreatemodel) - Get create journal model
* [list](#list) - List journals

## create

The *Create journal* endpoint creates a new [journal](https://docs.codat.io/accounting-api#/schemas/Journal) for a given company's connection.

[Journals](https://docs.codat.io/accounting-api#/schemas/Journal) are used to record all the financial transactions of a company.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create journal model](https://docs.codat.io/accounting-api#/operations/get-create-journals-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journals) for integrations that support creating an account.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { CreateJournalRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";
import { Journal, JournalStatus, Metadata } from "@speakeasy-sdks/accounting/dist/sdk/models/shared";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const journal: Journal = {
  createdOn: "2022-10-23T00:00:00.000Z",
  metadata: {},
  modifiedDate: "2022-10-23T00:00:00.000Z",
  sourceModifiedDate: "2022-10-23T00:00:00.000Z",
};
const timeoutInMinutes: number = 859213;

  const res = await sdk.journals.create(companyId, connectionId, journal, timeoutInMinutes);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                             | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `companyId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for a company.                                      | 8a210b68-6988-11ed-a1eb-0242ac120002                                  |
| `connectionId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for a connection.                                   | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                  |
| `journal`                                                             | [shared.Journal](../../models/shared/journal.md)                      | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
| `timeoutInMinutes`                                                    | *number*                                                              | :heavy_minus_sign:                                                    | Time limit for the push operation to complete before it is timed out. |                                                                       |
| `retries`                                                             | [utils.RetryConfig](../../models/utils/retryconfig.md)                | :heavy_minus_sign:                                                    | Configuration to override the default retry behavior of the client.   |                                                                       |
| `config`                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)          | :heavy_minus_sign:                                                    | Available config options for making requests.                         |                                                                       |


### Response

**Promise<[operations.CreateJournalResponse](../../models/operations/createjournalresponse.md)>**


## get

The *Get journal* endpoint returns a single journal for a given journalId.

[Journals](https://docs.codat.io/accounting-api#/schemas/Journal) are used to record all the financial transactions of a company.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journals) for integrations that support getting a specific journal.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetJournalRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const journalId: string = "female";

  const res = await sdk.journals.get(companyId, journalId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `journalId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a journal.                                    |                                                                     |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetJournalResponse](../../models/operations/getjournalresponse.md)>**


## getCreateModel

The *Get create journal model* endpoint returns the expected data for the request payload when creating a [journal](https://docs.codat.io/accounting-api#/schemas/Journal) for a given company and integration.

[Journals](https://docs.codat.io/accounting-api#/schemas/Journal) are used to record all the financial transactions of a company.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journals) for integrations that support creating a journal.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetCreateJournalsModelRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

  const res = await sdk.journals.getCreateModel(companyId, connectionId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a connection.                                 | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetCreateJournalsModelResponse](../../models/operations/getcreatejournalsmodelresponse.md)>**


## list

The *List journals* endpoint returns a list of [journals](https://docs.codat.io/accounting-api#/schemas/Journal) for a given company's connection.

[Journals](https://docs.codat.io/accounting-api#/schemas/Journal) are used to record all the financial transactions of a company.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const res = await sdk.journals.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    orderBy: "-modifiedDate",
    page: 1,
    pageSize: 100,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListJournalsRequest](../../models/operations/listjournalsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                           | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListJournalsResponse](../../models/operations/listjournalsresponse.md)>**

