# DirectCosts
(*directCosts*)

## Overview

Direct costs

### Available Operations

* [create](#create) - Create direct cost
* [downloadAttachment](#downloadattachment) - Download direct cost attachment
* [get](#get) - Get direct cost
* [getAttachment](#getattachment) - Get direct cost attachment
* [getCreateModel](#getcreatemodel) - Get create direct cost model
* [list](#list) - List direct costs
* [listAttachments](#listattachments) - List direct cost attachments
* [uploadAttachment](#uploadattachment) - Upload direct cost attachment

## create

The *Create direct cost* endpoint creates a new [direct cost](https://docs.codat.io/accounting-api#/schemas/DirectCost) for a given company's connection.

[Direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) are the expenses associated with a business' operations. For example, purchases of raw materials that are paid off at the point of the purchase and service fees are considered direct costs.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create direct cost model](https://docs.codat.io/accounting-api#/operations/get-create-directCosts-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating an account.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { CreateDirectCostRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";
import {
  AccountRef,
  ContactRef,
  DataType,
  DirectCost,
  DirectCostLineItem,
  InvoiceTo,
  ItemRef,
  Items,
  ItemsAllocation,
  Metadata,
  PaymentAllocationPayment,
  SupplementalData,
  TaxRateRef,
  Tracking,
  TrackingCategoryRef,
  TrackingRecordReference,
} from "@speakeasy-sdks/accounting/dist/sdk/models/shared";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const directCost: DirectCost = {
  contactRef: {
    dataType: DataType.Invoices,
    id: "<ID>",
  },
  currency: "USD",
  issueDate: "2022-10-23T00:00:00.000Z",
  lineItems: [
    {
      accountRef: {},
      itemRef: {
        id: "<ID>",
      },
      quantity: 6384.24,
      taxRateRef: {},
      tracking: {
        invoiceTo: {
          dataType: "transfer",
        },
        recordRefs: [
          {
            dataType: "invoice",
          },
        ],
      },
      trackingCategoryRefs: [
        {
          id: "<ID>",
        },
      ],
      unitAmount: 2884.08,
    },
  ],
  metadata: {},
  modifiedDate: "2022-10-23T00:00:00.000Z",
  paymentAllocations: [
    {
      allocation: {
        allocatedOnDate: "2022-10-23T00:00:00.000Z",
        currency: "GBP",
      },
      payment: {
        accountRef: {},
        currency: "EUR",
        paidOnDate: "2022-10-23T00:00:00.000Z",
      },
    },
  ],
  sourceModifiedDate: "2022-10-23T00:00:00.000Z",
  subTotal: 9510.62,
  supplementalData: {
    content: {
      "abnormally": {
        "deposit": "evolve",
      },
    },
  },
  taxAmount: 7150.4,
  totalAmount: 7926.2,
};
const timeoutInMinutes: number = 855952;

  const res = await sdk.directCosts.create(companyId, connectionId, directCost, timeoutInMinutes);

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
| `directCost`                                                          | [shared.DirectCost](../../models/shared/directcost.md)                | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
| `timeoutInMinutes`                                                    | *number*                                                              | :heavy_minus_sign:                                                    | Time limit for the push operation to complete before it is timed out. |                                                                       |
| `retries`                                                             | [utils.RetryConfig](../../models/utils/retryconfig.md)                | :heavy_minus_sign:                                                    | Configuration to override the default retry behavior of the client.   |                                                                       |
| `config`                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)          | :heavy_minus_sign:                                                    | Available config options for making requests.                         |                                                                       |


### Response

**Promise<[operations.CreateDirectCostResponse](../../models/operations/createdirectcostresponse.md)>**


## downloadAttachment

The *Download direct cost attachment* endpoint downloads a specific attachment for a given `directCostId` and `attachmentId`.

[Direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support downloading a direct cost attachment.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { DownloadDirectCostAttachmentRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const attachmentId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const directCostId: string = "complex";

  const res = await sdk.directCosts.downloadAttachment(attachmentId, companyId, connectionId, directCostId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `attachmentId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for an attachment.                                | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a connection.                                 | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                |
| `directCostId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a direct cost.                                |                                                                     |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.DownloadDirectCostAttachmentResponse](../../models/operations/downloaddirectcostattachmentresponse.md)>**


## get

The *Get direct cost* endpoint returns a single direct cost for a given directCostId.

[Direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support getting a specific direct cost.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetDirectCostRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const directCostId: string = "female";

  const res = await sdk.directCosts.get(companyId, connectionId, directCostId);

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
| `directCostId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a direct cost.                                |                                                                     |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetDirectCostResponse](../../models/operations/getdirectcostresponse.md)>**


## getAttachment

The *Get direct cost attachment* endpoint returns a specific attachment for a given `directCostId` and `attachmentId`.

[Direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support getting a direct cost attachment.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetDirectCostAttachmentRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const attachmentId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const directCostId: string = "provided";

  const res = await sdk.directCosts.getAttachment(attachmentId, companyId, connectionId, directCostId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `attachmentId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for an attachment.                                | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a connection.                                 | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                |
| `directCostId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a direct cost.                                |                                                                     |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetDirectCostAttachmentResponse](../../models/operations/getdirectcostattachmentresponse.md)>**


## getCreateModel

The *Get create direct cost model* endpoint returns the expected data for the request payload when creating a [direct cost](https://docs.codat.io/accounting-api#/schemas/DirectCost) for a given company and integration.

[Direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating a direct cost.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetCreateDirectCostsModelRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

  const res = await sdk.directCosts.getCreateModel(companyId, connectionId);

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

**Promise<[operations.GetCreateDirectCostsModelResponse](../../models/operations/getcreatedirectcostsmodelresponse.md)>**


## list

The *List direct costs* endpoint returns a list of [direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) for a given company's connection.

[Direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const res = await sdk.directCosts.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
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

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListDirectCostsRequest](../../models/operations/listdirectcostsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListDirectCostsResponse](../../models/operations/listdirectcostsresponse.md)>**


## listAttachments

The *List direct cost attachments* endpoint returns a list of attachments available to download for given `directCostId`.

[Direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support listing direct cost attachments.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { ListDirectCostAttachmentsRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const directCostId: string = "behind";

  const res = await sdk.directCosts.listAttachments(companyId, connectionId, directCostId);

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
| `directCostId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a direct cost.                                |                                                                     |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.ListDirectCostAttachmentsResponse](../../models/operations/listdirectcostattachmentsresponse.md)>**


## uploadAttachment

The *Upload direct cost attachment* endpoint uploads an attachment and assigns it against a specific `directCostId`.

[Direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.

**Integration-specific behaviour**

For more details on supported file types by integration see [Attachments](https://docs.codat.io/accounting-api#/schemas/Attachment).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support uploading a direct cost attachment.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { UploadDirectCostAttachmentRequest, UploadDirectCostAttachmentRequestBody } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const directCostId: string = "huzzah";
const requestBody: UploadDirectCostAttachmentRequestBody = {
  content: "ghW&IC$xd6" as bytes <<<>>>,
  requestBody: "novel",
};

  const res = await sdk.directCosts.uploadAttachment(companyId, connectionId, directCostId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Unique identifier for a company.                                                                                     | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                                 |
| `connectionId`                                                                                                       | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Unique identifier for a connection.                                                                                  | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                                                 |
| `directCostId`                                                                                                       | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Unique identifier for a direct cost.                                                                                 |                                                                                                                      |
| `requestBody`                                                                                                        | [operations.UploadDirectCostAttachmentRequestBody](../../models/operations/uploaddirectcostattachmentrequestbody.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `retries`                                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                               | :heavy_minus_sign:                                                                                                   | Configuration to override the default retry behavior of the client.                                                  |                                                                                                                      |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |                                                                                                                      |


### Response

**Promise<[operations.UploadDirectCostAttachmentResponse](../../models/operations/uploaddirectcostattachmentresponse.md)>**

