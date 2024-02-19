# Bills
(*bills*)

## Overview

Bills

### Available Operations

* [create](#create) - Create bill
* [delete](#delete) - Delete bill
* [downloadAttachment](#downloadattachment) - Download bill attachment
* [get](#get) - Get bill
* [getAttachment](#getattachment) - Get bill attachment
* [getCreateUpdateModel](#getcreateupdatemodel) - Get create/update bill model
* [list](#list) - List bills
* [listAttachments](#listattachments) - List bill attachments
* [update](#update) - Update bill
* [uploadAttachment](#uploadattachment) - Upload bill attachment

## create

The *Create bill* endpoint creates a new [bill](https://docs.codat.io/accounting-api#/schemas/Bill) for a given company's connection.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill model](https://docs.codat.io/accounting-api#/operations/get-create-update-bills-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating a bill.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { CreateBillRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";
import {
  AccountingCustomerRef,
  AccountRef,
  Allocation,
  Bill,
  BilledToType,
  BillLineItem,
  BillStatus,
  ItemRef,
  Metadata,
  PaymentAllocationItems,
  PaymentAllocationPayment,
  ProjectRef,
  PropertieTracking,
  PurchaseOrderRef,
  SupplementalData,
  SupplierRef,
  TaxRateRef,
  TrackingCategoryRef,
  WithholdingTax,
  Zero,
  ZeroDataType,
} from "@speakeasy-sdks/accounting/dist/sdk/models/shared";

async function run() {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const bill: Bill = {
  currency: "USD",
  dueDate: "2022-10-23T00:00:00Z",
  issueDate: "2022-10-23T00:00:00Z",
  lineItems: [
    {
      accountRef: {},
      itemRef: {
        id: "<id>",
      },
      purchaseOrderLineRef: {},
      quantity: 8592.13,
      taxRateRef: {},
      tracking: {
        categoryRefs: [
          {
            id: "<id>",
          },
        ],
        customerRef: {
          id: "<id>",
        },
        isBilledTo: BilledToType.NotApplicable,
        isRebilledTo: BilledToType.NotApplicable,
        projectRef: {
          id: "<id>",
        },
      },
      trackingCategoryRefs: [
        {
          id: "<id>",
        },
      ],
      unitAmount: 1343.65,
    },
  ],
  metadata: {},
  modifiedDate: "2022-10-23T00:00:00Z",
  paymentAllocations: [
    {
      allocation: {
        allocatedOnDate: "2022-10-23T00:00:00Z",
        currency: "EUR",
      },
      payment: {
        accountRef: {},
        currency: "EUR",
        paidOnDate: "2022-10-23T00:00:00Z",
      },
    },
  ],
  purchaseOrderRefs: [
    {},
  ],
  sourceModifiedDate: "2022-10-23T00:00:00Z",
  status: BillStatus.Draft,
  subTotal: 0.86,
  supplementalData: {
    content: {
      "key": {
        "key": "<value>",
      },
    },
  },
  supplierRef: {
    id: "<id>",
  },
  taxAmount: 4552.22,
  totalAmount: 1697.27,
  withholdingTax: [
    {
      amount: 3015.1,
      name: "<value>",
    },
  ],
};
const timeoutInMinutes: number = 89964;

  const res = await sdk.bills.create(companyId, connectionId, bill, timeoutInMinutes);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                             | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `companyId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for a company.                                      | 8a210b68-6988-11ed-a1eb-0242ac120002                                  |
| `connectionId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for a connection.                                   | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                  |
| `bill`                                                                | [shared.Bill](../../sdk/models/shared/bill.md)                        | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
| `timeoutInMinutes`                                                    | *number*                                                              | :heavy_minus_sign:                                                    | Time limit for the push operation to complete before it is timed out. |                                                                       |
| `retries`                                                             | [utils.RetryConfig](../../internal/utils/retryconfig.md)              | :heavy_minus_sign:                                                    | Configuration to override the default retry behavior of the client.   |                                                                       |
| `config`                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)          | :heavy_minus_sign:                                                    | Available config options for making requests.                         |                                                                       |


### Response

**Promise<[operations.CreateBillResponse](../../sdk/models/operations/createbillresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## delete

The *Delete bill* endpoint allows you to delete a specified bill from an accounting platform. 

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are itemized records of goods received or services provided to the SMB.

### Process 
1. Pass the `{billId}` to the *Delete bill* endpoint and store the `pushOperationKey` returned.
2. Check the status of the delete operation by checking the status of the push operation either via
    1. [Push operation webhook](https://docs.codat.io/introduction/webhooks/core-rules-types#push-operation-status-has-changed) (advised),
    2. [Push operation status endpoint](https://docs.codat.io/codat-api#/operations/get-push-operation).

   A `Success` status indicates that the bill object was deleted from the accounting platform.
3. (Optional) Check that the bill was deleted from the accounting platform.

### Effect on related objects

Be aware that deleting a bill from an accounting platform might cause related objects to be modified. For example, if you delete a paid bill in QuickBooks Online or QuickBooks Desktop, the bill is deleted but the bill payment against that bill is not. The bill payment is converted to a payment on account.

## Integration specifics
Integrations that support soft delete do not permanently delete the object in the accounting platform.

| Integration | Soft Delete | Details                                                                                                      |  
|-------------|-------------|--------------------------------------------------------------------------------------------------------------|
| QuickBooks Online | No          | - |
| QuickBooks Desktop | No          | - |
| Oracle NetSuite   | No          | When deleting a bill that's already linked to a bill payment, you must delete the linked bill payment first. |                                                                                                      |
| Sage Intacct   | No          | When deleting a bill that's already linked to a bill payment, you must delete the linked bill payment first. |

> **Supported Integrations**
> 
> This functionality is currently supported for our QuickBooks Online, QuickBooks Desktop, Xero, Oracle NetSuite and Sage Intacct integrations.

### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { DeleteBillRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

async function run() {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const billId: string = "7110701885";
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

  const res = await sdk.bills.delete(billId, companyId, connectionId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `billId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a bill.                                       | 13d946f0-c5d5-42bc-b092-97ece17923ab                                |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a connection.                                 | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.DeleteBillResponse](../../sdk/models/operations/deletebillresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## downloadAttachment

The *Download bill attachment* endpoint downloads a specific attachment for a given `billId` and `attachmentId`.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support downloading a bill attachment.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { DownloadBillAttachmentRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

async function run() {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const attachmentId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const billId: string = "EILBDVJVNUAGVKRQ";
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

  const res = await sdk.bills.downloadAttachment(attachmentId, billId, companyId, connectionId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `attachmentId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for an attachment.                                | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `billId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a bill.                                       | 13d946f0-c5d5-42bc-b092-97ece17923ab                                |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a connection.                                 | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.DownloadBillAttachmentResponse](../../sdk/models/operations/downloadbillattachmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

The *Get bill* endpoint returns a single bill for a given billId.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support getting a specific bill.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetBillRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

async function run() {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const billId: string = "7110701885";
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";

  const res = await sdk.bills.get(billId, companyId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `billId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a bill.                                       | 13d946f0-c5d5-42bc-b092-97ece17923ab                                |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetBillResponse](../../sdk/models/operations/getbillresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAttachment

The *Get bill attachment* endpoint returns a specific attachment for a given `billId` and `attachmentId`.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support getting a bill attachment.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetBillAttachmentRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

async function run() {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const attachmentId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const billId: string = "EILBDVJVNUAGVKRQ";
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

  const res = await sdk.bills.getAttachment(attachmentId, billId, companyId, connectionId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `attachmentId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for an attachment.                                | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `billId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a bill.                                       | 13d946f0-c5d5-42bc-b092-97ece17923ab                                |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a connection.                                 | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetBillAttachmentResponse](../../sdk/models/operations/getbillattachmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCreateUpdateModel

﻿The *Get create/update bill model* endpoint returns the expected data for the request payload when creating and updating a [bill](https://docs.codat.io/accounting-api#/schemas/Bill) for a given company and integration.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating and updating a bill.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetCreateUpdateBillsModelRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

async function run() {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

  const res = await sdk.bills.getCreateUpdateModel(companyId, connectionId);

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

**Promise<[operations.GetCreateUpdateBillsModelResponse](../../sdk/models/operations/getcreateupdatebillsmodelresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## list

The *List bills* endpoint returns a list of [bills](https://docs.codat.io/accounting-api#/schemas/Bill) for a given company's connection.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

async function run() {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const res = await sdk.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    orderBy: "-modifiedDate",
    page: 1,
    pageSize: 100,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListBillsRequest](../../sdk/models/operations/listbillsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                       | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListBillsResponse](../../sdk/models/operations/listbillsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAttachments

The *List bill attachments* endpoint returns a list of attachments available to download for a given `billId`.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support listing bill attachments.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { ListBillAttachmentsRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

async function run() {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const billId: string = "EILBDVJVNUAGVKRQ";
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

  const res = await sdk.bills.listAttachments(billId, companyId, connectionId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `billId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a bill.                                       | 13d946f0-c5d5-42bc-b092-97ece17923ab                                |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a connection.                                 | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.ListBillAttachmentsResponse](../../sdk/models/operations/listbillattachmentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

The *Update bill* endpoint updates an existing [bill](https://docs.codat.io/accounting-api#/schemas/Bill) for a given company's connection.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill model](https://docs.codat.io/accounting-api#/operations/get-create-update-bills-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating an account.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { BilledToType, BillStatus, ZeroDataType } from "@speakeasy-sdks/accounting/dist/sdk/models/shared";

async function run() {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const res = await sdk.bills.update({
    bill: {
      currency: "EUR",
      dueDate: "2022-10-23T00:00:00Z",
      issueDate: "2022-10-23T00:00:00Z",
      lineItems: [
        {
          accountRef: {},
          itemRef: {
            id: "<id>",
          },
          purchaseOrderLineRef: {},
          quantity: 156.52,
          taxRateRef: {},
          tracking: {
            categoryRefs: [
              {
                id: "<id>",
              },
            ],
            customerRef: {
              id: "<id>",
            },
            isBilledTo: BilledToType.NotApplicable,
            isRebilledTo: BilledToType.Customer,
            projectRef: {
              id: "<id>",
            },
          },
          trackingCategoryRefs: [
            {
              id: "<id>",
            },
          ],
          unitAmount: 9914.64,
        },
      ],
      metadata: {},
      modifiedDate: "2022-10-23T00:00:00Z",
      paymentAllocations: [
        {
          allocation: {
            allocatedOnDate: "2022-10-23T00:00:00Z",
            currency: "EUR",
          },
          payment: {
            accountRef: {},
            currency: "USD",
            paidOnDate: "2022-10-23T00:00:00Z",
          },
        },
      ],
      purchaseOrderRefs: [
        {},
      ],
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      status: BillStatus.Unknown,
      subTotal: 540.62,
      supplementalData: {
        content: {
          "key": {
            "key": "<value>",
          },
        },
      },
      supplierRef: {
        id: "<id>",
      },
      taxAmount: 2782.81,
      totalAmount: 8965.01,
      withholdingTax: [
        {
          amount: 4995.57,
          name: "<value>",
        },
      ],
    },
    billId: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.UpdateBillRequest](../../sdk/models/operations/updatebillrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                         | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UpdateBillResponse](../../sdk/models/operations/updatebillresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## uploadAttachment

The *Upload bill attachment* endpoint uploads an attachment and assigns it against a specific `billId`.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

**Integration-specific behaviour**

For more details on supported file types by integration see [Attachments](https://docs.codat.io/accounting-api#/schemas/Attachment).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support uploading a bill attachment.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { UploadBillAttachmentRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";
import { AttachmentUpload, CodatFile } from "@speakeasy-sdks/accounting/dist/sdk/models/shared";

async function run() {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const billId: string = "EILBDVJVNUAGVKRQ";
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const attachmentUpload: AttachmentUpload = {
  file: {
    content: new TextEncoder().encode("0x3ABc1980Ef"),
    fileName: "novel.mpg4",
  },
};

  const res = await sdk.bills.uploadAttachment(billId, companyId, connectionId, attachmentUpload);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `billId`                                                               | *string*                                                               | :heavy_check_mark:                                                     | Unique identifier for a bill.                                          | 13d946f0-c5d5-42bc-b092-97ece17923ab                                   |
| `companyId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Unique identifier for a company.                                       | 8a210b68-6988-11ed-a1eb-0242ac120002                                   |
| `connectionId`                                                         | *string*                                                               | :heavy_check_mark:                                                     | Unique identifier for a connection.                                    | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                   |
| `attachmentUpload`                                                     | [shared.AttachmentUpload](../../sdk/models/shared/attachmentupload.md) | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `retries`                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)               | :heavy_minus_sign:                                                     | Configuration to override the default retry behavior of the client.    |                                                                        |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |                                                                        |


### Response

**Promise<[operations.UploadBillAttachmentResponse](../../sdk/models/operations/uploadbillattachmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
