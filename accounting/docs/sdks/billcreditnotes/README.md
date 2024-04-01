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
import { BillCreditNoteStatus, BilledToType } from "@speakeasy-sdks/accounting/sdk/models/shared";
import { Decimal } from "@speakeasy-sdks/accounting/sdk/types";

async function run() {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
  const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
  const billCreditNote = {
    allocatedOnDate: "2022-10-23T00:00:00Z",
    billCreditNoteNumber: "14763237",
    createdFromRefs: [
      {
        dataType: "invoice",
      },
    ],
    currency: "USD",
    discountPercentage: new Decimal("0"),
    id: "6a0e9dfb-87b0-47d3-aaaf-9753ae9e757d",
    issueDate: "2019-02-18T16:03:07.268Z",
    lineItems: [
      {
        accountRef: {
          id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
        },
        createdFromLineRef: {},
        description: "AcmeMagnet",
        discountAmount: new Decimal("0"),
        itemRef: {
          id: "3",
        },
        quantity: new Decimal("4"),
        subTotal: new Decimal("100"),
        taxAmount: new Decimal("10"),
        taxRateRef: {
          id: "6c88aff3-7cb9-4980-a3d3-443e72e02498",
        },
        totalAmount: new Decimal("110"),
        tracking: {
          categoryRefs: [
            {
              id: "<id>",
            },
          ],
          customerRef: {
            id: "<id>",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "<id>",
          },
        },
        trackingCategoryRefs: [
          {
            id: "department_1",
            name: "ACMERockets",
          },
          {
            id: "costcode_2",
            name: "ACM2-ACMESigns",
          },
        ],
        unitAmount: new Decimal("25"),
      },
      {
        accountRef: {
          id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
        },
        createdFromLineRef: {},
        description: "ACMEDisintegratingPistol",
        discountAmount: new Decimal("0"),
        itemRef: {
          id: "3abf0883-03f7-44c6-bc15-1372522d25e1",
        },
        quantity: new Decimal("3"),
        subTotal: new Decimal("75"),
        taxAmount: new Decimal("7.5"),
        taxRateRef: {
          id: "6c88aff3-7cb9-4980-a3d3-443e72e02498",
        },
        totalAmount: new Decimal("82.5"),
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
        unitAmount: new Decimal("25"),
      },
      {
        accountRef: {
          id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
        },
        createdFromLineRef: {},
        description: "ACMEWhippedCreamDispenser",
        discountAmount: new Decimal("0"),
        itemRef: {
          id: "3691f3d9-0ff7-4358-8a93-bed31c1b4b03",
        },
        quantity: new Decimal("6"),
        subTotal: new Decimal("312"),
        taxAmount: new Decimal("31.2"),
        taxRateRef: {
          id: "6c88aff3-7cb9-4980-a3d3-443e72e02498",
        },
        totalAmount: new Decimal("343.2"),
        tracking: {
          categoryRefs: [
            {
              id: "<id>",
            },
          ],
          customerRef: {
            id: "<id>",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "<id>",
          },
        },
        trackingCategoryRefs: [
          {
            id: "<id>",
          },
        ],
        unitAmount: new Decimal("52"),
      },
      {
        accountRef: {
          id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
        },
        createdFromLineRef: {},
        description: "ACMEJetPropelledPogoStick",
        discountAmount: new Decimal("0"),
        itemRef: {
          id: "075410d4-7edc-4936-ba52-9e1e43cbe300",
        },
        quantity: new Decimal("1"),
        subTotal: new Decimal("130"),
        taxAmount: new Decimal("27.3"),
        taxRateRef: {
          id: "d606732b-db18-44d7-823b-7f15f42c32ea",
        },
        totalAmount: new Decimal("157.3"),
        tracking: {
          categoryRefs: [
            {
              id: "<id>",
            },
          ],
          customerRef: {
            id: "<id>",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "<id>",
          },
        },
        trackingCategoryRefs: [
          {
            id: "<id>",
          },
        ],
        unitAmount: new Decimal("130"),
      },
    ],
    metadata: {},
    modifiedDate: "2022-10-23T00:00:00Z",
    note: "Track separately",
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
    remainingCredit: new Decimal("693"),
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: BillCreditNoteStatus.Submitted,
    subTotal: new Decimal("805.78"),
    supplementalData: {
      content: {
        "key": {
          "key": "<value>",
        },
      },
    },
    supplierRef: {
      id: "67C6A7A1-5E84-4AC4-B950-24A114E379D0",
      supplierName: "Chin's Gas and Oil",
    },
    totalAmount: new Decimal("693"),
    totalDiscount: new Decimal("0"),
    totalTaxAmount: new Decimal("0"),
    withholdingTax: [
      {
        amount: new Decimal("1697.27"),
        name: "<value>",
      },
    ],
  };
  const timeoutInMinutes = 301510;
  
  const result = await sdk.billCreditNotes.create(companyId, connectionId, billCreditNote, timeoutInMinutes);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Unique identifier for a company.                                                                                                                                               | [object Object]                                                                                                                                                                |
| `connectionId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Unique identifier for a connection.                                                                                                                                            | [object Object]                                                                                                                                                                |
| `billCreditNote`                                                                                                                                                               | [shared.BillCreditNote](../../sdk/models/shared/billcreditnote.md)                                                                                                             | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `timeoutInMinutes`                                                                                                                                                             | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Time limit for the push operation to complete before it is timed out.                                                                                                          |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |


### Response

**Promise<[operations.CreateBillCreditNoteResponse](../../sdk/models/operations/createbillcreditnoteresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

The *Get bill credit note* endpoint returns a single bill credit note for a given billCreditNoteId.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support getting a specific bill credit note.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

async function run() {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const billCreditNoteId = "<value>";
  const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
  
  const result = await sdk.billCreditNotes.get(billCreditNoteId, companyId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `billCreditNoteId`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Unique identifier for a bill credit note.                                                                                                                                      |                                                                                                                                                                                |
| `companyId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Unique identifier for a company.                                                                                                                                               | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |


### Response

**Promise<[operations.GetBillCreditNoteResponse](../../sdk/models/operations/getbillcreditnoteresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCreateUpdateModel

The *Get create/update bill credit note model* endpoint returns the expected data for the request payload when creating and updating a [bill credit note](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company and integration.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating and updating a bill credit note.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

async function run() {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
  const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
  
  const result = await sdk.billCreditNotes.getCreateUpdateModel(companyId, connectionId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Unique identifier for a company.                                                                                                                                               | [object Object]                                                                                                                                                                |
| `connectionId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Unique identifier for a connection.                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |


### Response

**Promise<[operations.GetCreateUpdateBillCreditNotesModelResponse](../../sdk/models/operations/getcreateupdatebillcreditnotesmodelresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## list

The *List bill credit notes* endpoint returns a list of [bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

async function run() {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const result = await sdk.billCreditNotes.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    orderBy: "-modifiedDate",
    page: 1,
    pageSize: 100,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListBillCreditNotesRequest](../../sdk/models/operations/listbillcreditnotesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise<[operations.ListBillCreditNotesResponse](../../sdk/models/operations/listbillcreditnotesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

The *Update bill credit note* endpoint updates an existing [bill credit note](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating an account.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { BillCreditNoteStatus, BilledToType } from "@speakeasy-sdks/accounting/sdk/models/shared";
import { Decimal } from "@speakeasy-sdks/accounting/sdk/types";

async function run() {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const result = await sdk.billCreditNotes.update({
    billCreditNote: {
      allocatedOnDate: "2022-10-23T00:00:00Z",
      billCreditNoteNumber: "14763237",
      createdFromRefs: [
        {
          dataType: "journalEntry",
        },
      ],
      currency: "USD",
      discountPercentage: new Decimal("0"),
      id: "6a0e9dfb-87b0-47d3-aaaf-9753ae9e757d",
      issueDate: "2019-02-18T16:03:07.268Z",
      lineItems: [
        {
          accountRef: {
            id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
          },
          createdFromLineRef: {},
          description: "AcmeMagnet",
          discountAmount: new Decimal("0"),
          itemRef: {
            id: "3",
          },
          quantity: new Decimal("4"),
          subTotal: new Decimal("100"),
          taxAmount: new Decimal("10"),
          taxRateRef: {
            id: "6c88aff3-7cb9-4980-a3d3-443e72e02498",
          },
          totalAmount: new Decimal("110"),
          tracking: {
            categoryRefs: [
              {
                id: "<id>",
              },
            ],
            customerRef: {
              id: "<id>",
            },
            isBilledTo: BilledToType.Customer,
            isRebilledTo: BilledToType.Unknown,
            projectRef: {
              id: "<id>",
            },
          },
          trackingCategoryRefs: [
            {
              id: "department_1",
              name: "ACMERockets",
            },
            {
              id: "costcode_2",
              name: "ACM2-ACMESigns",
            },
          ],
          unitAmount: new Decimal("25"),
        },
        {
          accountRef: {
            id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
          },
          createdFromLineRef: {},
          description: "ACMEDisintegratingPistol",
          discountAmount: new Decimal("0"),
          itemRef: {
            id: "3abf0883-03f7-44c6-bc15-1372522d25e1",
          },
          quantity: new Decimal("3"),
          subTotal: new Decimal("75"),
          taxAmount: new Decimal("7.5"),
          taxRateRef: {
            id: "6c88aff3-7cb9-4980-a3d3-443e72e02498",
          },
          totalAmount: new Decimal("82.5"),
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
          unitAmount: new Decimal("25"),
        },
        {
          accountRef: {
            id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
          },
          createdFromLineRef: {},
          description: "ACMEWhippedCreamDispenser",
          discountAmount: new Decimal("0"),
          itemRef: {
            id: "3691f3d9-0ff7-4358-8a93-bed31c1b4b03",
          },
          quantity: new Decimal("6"),
          subTotal: new Decimal("312"),
          taxAmount: new Decimal("31.2"),
          taxRateRef: {
            id: "6c88aff3-7cb9-4980-a3d3-443e72e02498",
          },
          totalAmount: new Decimal("343.2"),
          tracking: {
            categoryRefs: [
              {
                id: "<id>",
              },
            ],
            customerRef: {
              id: "<id>",
            },
            isBilledTo: BilledToType.Project,
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
          unitAmount: new Decimal("52"),
        },
        {
          accountRef: {
            id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
          },
          createdFromLineRef: {},
          description: "ACMEJetPropelledPogoStick",
          discountAmount: new Decimal("0"),
          itemRef: {
            id: "075410d4-7edc-4936-ba52-9e1e43cbe300",
          },
          quantity: new Decimal("1"),
          subTotal: new Decimal("130"),
          taxAmount: new Decimal("27.3"),
          taxRateRef: {
            id: "d606732b-db18-44d7-823b-7f15f42c32ea",
          },
          totalAmount: new Decimal("157.3"),
          tracking: {
            categoryRefs: [
              {
                id: "<id>",
              },
            ],
            customerRef: {
              id: "<id>",
            },
            isBilledTo: BilledToType.Customer,
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
          unitAmount: new Decimal("130"),
        },
      ],
      metadata: {},
      modifiedDate: "2022-10-23T00:00:00Z",
      note: "Track separately",
      paymentAllocations: [
        {
          allocation: {
            allocatedOnDate: "2022-10-23T00:00:00Z",
            currency: "EUR",
          },
          payment: {
            accountRef: {},
            currency: "GBP",
            paidOnDate: "2022-10-23T00:00:00Z",
          },
        },
      ],
      remainingCredit: new Decimal("693"),
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      status: BillCreditNoteStatus.Submitted,
      subTotal: new Decimal("805.78"),
      supplementalData: {
        content: {
          "key": {
            "key": "<value>",
          },
        },
      },
      supplierRef: {
        id: "67C6A7A1-5E84-4AC4-B950-24A114E379D0",
        supplierName: "Chin's Gas and Oil",
      },
      totalAmount: new Decimal("693"),
      totalDiscount: new Decimal("0"),
      totalTaxAmount: new Decimal("0"),
      withholdingTax: [
        {
          amount: new Decimal("8965.01"),
          name: "<value>",
        },
      ],
    },
    billCreditNoteId: "<value>",
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateBillCreditNoteRequest](../../sdk/models/operations/updatebillcreditnoterequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise<[operations.UpdateBillCreditNoteResponse](../../sdk/models/operations/updatebillcreditnoteresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

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
import { openAsBlob } from "node:fs";

async function run() {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const billCreditNoteId = "<value>";
  const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
  const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
  const attachmentUpload = {
    file: await openAsBlob("./sample-file"),
  };
  
  const result = await sdk.billCreditNotes.uploadAttachment(billCreditNoteId, companyId, connectionId, attachmentUpload);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `billCreditNoteId`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Unique identifier for a bill credit note.                                                                                                                                      |                                                                                                                                                                                |
| `companyId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Unique identifier for a company.                                                                                                                                               | [object Object]                                                                                                                                                                |
| `connectionId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Unique identifier for a connection.                                                                                                                                            | [object Object]                                                                                                                                                                |
| `attachmentUpload`                                                                                                                                                             | [shared.AttachmentUpload](../../sdk/models/shared/attachmentupload.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |


### Response

**Promise<[operations.UploadBillCreditNoteAttachmentResponse](../../sdk/models/operations/uploadbillcreditnoteattachmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
