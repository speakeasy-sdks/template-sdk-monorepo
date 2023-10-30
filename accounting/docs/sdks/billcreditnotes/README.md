# BillCreditNotes
(*billCreditNotes*)

## Overview

Bill credit notes

### Available Operations

* [create](#create) - Create bill credit note
* [get](#get) - Get bill credit note
* [getCreateUpdateModel](#getcreateupdatemodel) - Get create/update bill credit note model
* [list](#list) - List bill credit notes
* [update](#update) - Update bill credit note
* [uploadAttachment](#uploadattachment) - Upload bill credit note attachment

## create

The *Create bill credit note* endpoint creates a new [bill credit note](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating an account.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { CreateBillCreditNoteRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";
import {
  AccountingCustomerRef,
  AccountRef,
  BillCreditNote,
  BillCreditNoteLineItem,
  BillCreditNoteLineItemTracking,
  BillCreditNoteStatus,
  BilledToType,
  ItemRef,
  Items,
  ItemsAllocation,
  Metadata,
  PaymentAllocationPayment,
  ProjectRef,
  SupplementalData,
  SupplierRef,
  TaxRateRef,
  TrackingCategoryRef,
  WithholdingTaxitems,
} from "@speakeasy-sdks/accounting/dist/sdk/models/shared";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const billCreditNote: BillCreditNote = {
  allocatedOnDate: "2022-10-23T00:00:00.000Z",
  billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
  currency: "USD",
  discountPercentage: 0,
  id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
  issueDate: "2022-10-23T00:00:00.000Z",
  lineItems: [
    {
      accountRef: {},
      itemRef: {
        id: "<ID>",
      },
      quantity: 8592.13,
      taxRateRef: {},
      tracking: {
        categoryRefs: [
          {
            id: "<ID>",
          },
        ],
        customerRef: {
          id: "<ID>",
        },
        isBilledTo: BilledToType.NotApplicable,
        isRebilledTo: BilledToType.NotApplicable,
        projectRef: {
          id: "<ID>",
        },
      },
      trackingCategoryRefs: [
        {
          id: "<ID>",
        },
      ],
      unitAmount: 1343.65,
    },
  ],
  metadata: {},
  modifiedDate: "2022-10-23T00:00:00.000Z",
  note: "Bill Credit Note with 1 line items, totaling 805.78",
  paymentAllocations: [
    {
      allocation: {
        allocatedOnDate: "2022-10-23T00:00:00.000Z",
        currency: "EUR",
      },
      payment: {
        accountRef: {},
        currency: "EUR",
        paidOnDate: "2022-10-23T00:00:00.000Z",
      },
    },
  ],
  remainingCredit: 0,
  sourceModifiedDate: "2022-10-23T00:00:00.000Z",
  status: BillCreditNoteStatus.Paid,
  subTotal: 805.78,
  supplementalData: {
    content: {
      "key": {
        "key": "string",
      },
    },
  },
  supplierRef: {
    id: "<ID>",
  },
  totalAmount: 805.78,
  totalDiscount: 0,
  totalTaxAmount: 0,
  withholdingTax: [
    {
      amount: 8915.1,
      name: "string",
    },
  ],
};
const timeoutInMinutes: number = 86;

  const res = await sdk.billCreditNotes.create(companyId, connectionId, billCreditNote, timeoutInMinutes);


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
| `billCreditNote`                                                      | [shared.BillCreditNote](../../models/shared/billcreditnote.md)        | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
| `timeoutInMinutes`                                                    | *number*                                                              | :heavy_minus_sign:                                                    | Time limit for the push operation to complete before it is timed out. |                                                                       |
| `retries`                                                             | [utils.RetryConfig](../../models/utils/retryconfig.md)                | :heavy_minus_sign:                                                    | Configuration to override the default retry behavior of the client.   |                                                                       |
| `config`                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)          | :heavy_minus_sign:                                                    | Available config options for making requests.                         |                                                                       |


### Response

**Promise<[operations.CreateBillCreditNoteResponse](../../models/operations/createbillcreditnoteresponse.md)>**


## get

The *Get bill credit note* endpoint returns a single bill credit note for a given billCreditNoteId.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support getting a specific bill credit note.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetBillCreditNoteRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const billCreditNoteId: string = "string";
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";

  const res = await sdk.billCreditNotes.get(billCreditNoteId, companyId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `billCreditNoteId`                                                  | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a bill credit note.                           |                                                                     |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetBillCreditNoteResponse](../../models/operations/getbillcreditnoteresponse.md)>**


## getCreateUpdateModel

The *Get create/update bill credit note model* endpoint returns the expected data for the request payload when creating and updating a [bill credit note](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company and integration.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating and updating a bill credit note.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetCreateUpdateBillCreditNotesModelRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

  const res = await sdk.billCreditNotes.getCreateUpdateModel(companyId, connectionId);


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

**Promise<[operations.GetCreateUpdateBillCreditNotesModelResponse](../../models/operations/getcreateupdatebillcreditnotesmodelresponse.md)>**


## list

The *List bill credit notes* endpoint returns a list of [bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const res = await sdk.billCreditNotes.list({
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListBillCreditNotesRequest](../../models/operations/listbillcreditnotesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListBillCreditNotesResponse](../../models/operations/listbillcreditnotesresponse.md)>**


## update

The *Update bill credit note* endpoint updates an existing [bill credit note](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating an account.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { BillCreditNoteStatus, BilledToType } from "@speakeasy-sdks/accounting/dist/sdk/models/shared";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const res = await sdk.billCreditNotes.update({
    billCreditNote: {
      allocatedOnDate: "2022-10-23T00:00:00.000Z",
      billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
      currency: "GBP",
      discountPercentage: 0,
      id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
      issueDate: "2022-10-23T00:00:00.000Z",
      lineItems: [
        {
          accountRef: {},
          itemRef: {
            id: "<ID>",
          },
          quantity: 156.52,
          taxRateRef: {},
          tracking: {
            categoryRefs: [
              {
                id: "<ID>",
              },
            ],
            customerRef: {
              id: "<ID>",
            },
            isBilledTo: BilledToType.NotApplicable,
            isRebilledTo: BilledToType.Customer,
            projectRef: {
              id: "<ID>",
            },
          },
          trackingCategoryRefs: [
            {
              id: "<ID>",
            },
          ],
          unitAmount: 9914.64,
        },
      ],
      metadata: {},
      modifiedDate: "2022-10-23T00:00:00.000Z",
      note: "Bill Credit Note with 1 line items, totaling 805.78",
      paymentAllocations: [
        {
          allocation: {
            allocatedOnDate: "2022-10-23T00:00:00.000Z",
            currency: "EUR",
          },
          payment: {
            accountRef: {},
            currency: "USD",
            paidOnDate: "2022-10-23T00:00:00.000Z",
          },
        },
      ],
      remainingCredit: 0,
      sourceModifiedDate: "2022-10-23T00:00:00.000Z",
      status: BillCreditNoteStatus.Paid,
      subTotal: 805.78,
      supplementalData: {
        content: {
          "key": {
            "key": "string",
          },
        },
      },
      supplierRef: {
        id: "<ID>",
      },
      totalAmount: 805.78,
      totalDiscount: 0,
      totalTaxAmount: 0,
      withholdingTax: [
        {
          amount: 1341.51,
          name: "string",
        },
      ],
    },
    billCreditNoteId: "string",
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateBillCreditNoteRequest](../../models/operations/updatebillcreditnoterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateBillCreditNoteResponse](../../models/operations/updatebillcreditnoteresponse.md)>**


## uploadAttachment

---
stoplight-id: c26f5b1b19168
---

The *Upload bill credit note attachment* endpoint uploads an attachment and assigns it against a specific `billCreditNoteId`.

[Bill Credit Notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

For more details on supported file types by integration see [Attachments](https://docs.codat.io/accounting-api#/schemas/Attachment).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support uploading a bill credit note attachment.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { UploadBillCreditNoteAttachmentRequest, UploadBillCreditNoteAttachmentRequestBody } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const billCreditNoteId: string = "string";
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const requestBody: UploadBillCreditNoteAttachmentRequestBody = {
  content: "v/ghW&IC$x" as bytes <<<>>>,
  requestBody: "string",
};

  const res = await sdk.billCreditNotes.uploadAttachment(billCreditNoteId, companyId, connectionId, requestBody);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `billCreditNoteId`                                                                                                           | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Unique identifier for a bill credit note.                                                                                    |                                                                                                                              |
| `companyId`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Unique identifier for a company.                                                                                             | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                                         |
| `connectionId`                                                                                                               | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Unique identifier for a connection.                                                                                          | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                                                         |
| `requestBody`                                                                                                                | [operations.UploadBillCreditNoteAttachmentRequestBody](../../models/operations/uploadbillcreditnoteattachmentrequestbody.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `retries`                                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                       | :heavy_minus_sign:                                                                                                           | Configuration to override the default retry behavior of the client.                                                          |                                                                                                                              |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |                                                                                                                              |


### Response

**Promise<[operations.UploadBillCreditNoteAttachmentResponse](../../models/operations/uploadbillcreditnoteattachmentresponse.md)>**

