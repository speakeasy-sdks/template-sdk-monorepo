# Items
(*items*)

## Overview

Items

### Available Operations

* [create](#create) - Create item
* [get](#get) - Get item
* [getCreateModel](#getcreatemodel) - Get create item model
* [list](#list) - List items

## create

The *Create item* endpoint creates a new [item](https://docs.codat.io/accounting-api#/schemas/Item) for a given company's connection.

[Items](https://docs.codat.io/accounting-api#/schemas/Item) allow your customers to save and track details of the products and services that they buy and sell.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create item model](https://docs.codat.io/accounting-api#/operations/get-create-items-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items) for integrations that support creating an account.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { CreateItemRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";
import {
  AccountRef,
  BillItem,
  InvoiceItem,
  Item,
  ItemStatus,
  ItemType,
  Metadata,
  SupplementalData,
  TaxRateRef,
} from "@speakeasy-sdks/accounting/dist/sdk/models/shared";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const item: Item = {
  billItem: {
    accountRef: {},
    taxRateRef: {},
  },
  invoiceItem: {
    accountRef: {},
    taxRateRef: {},
  },
  isBillItem: false,
  isInvoiceItem: false,
  itemStatus: ItemStatus.Active,
  metadata: {},
  modifiedDate: "2022-10-23T00:00:00.000Z",
  sourceModifiedDate: "2022-10-23T00:00:00.000Z",
  supplementalData: {
    content: {
      "Extended": {
        "South": "shred",
      },
    },
  },
  type: ItemType.Inventory,
};
const timeoutInMinutes: number = 951062;

  const res = await sdk.items.create(companyId, connectionId, item, timeoutInMinutes);

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
| `item`                                                                | [shared.Item](../../models/shared/item.md)                            | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
| `timeoutInMinutes`                                                    | *number*                                                              | :heavy_minus_sign:                                                    | Time limit for the push operation to complete before it is timed out. |                                                                       |
| `retries`                                                             | [utils.RetryConfig](../../models/utils/retryconfig.md)                | :heavy_minus_sign:                                                    | Configuration to override the default retry behavior of the client.   |                                                                       |
| `config`                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)          | :heavy_minus_sign:                                                    | Available config options for making requests.                         |                                                                       |


### Response

**Promise<[operations.CreateItemResponse](../../models/operations/createitemresponse.md)>**


## get

The *Get item* endpoint returns a single item for a given itemId.

[Items](https://docs.codat.io/accounting-api#/schemas/Item) allow your customers to save and track details of the products and services that they buy and sell.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items) for integrations that support getting a specific item.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetItemRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const itemId: string = "female";

  const res = await sdk.items.get(companyId, itemId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `itemId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for an item.                                      |                                                                     |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetItemResponse](../../models/operations/getitemresponse.md)>**


## getCreateModel

The *Get create item model* endpoint returns the expected data for the request payload when creating an [item](https://docs.codat.io/accounting-api#/schemas/Item) for a given company and integration.

[Items](https://docs.codat.io/accounting-api#/schemas/Item) allow your customers to save and track details of the products and services that they buy and sell.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items) for integrations that support creating an item.


### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetCreateItemsModelRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

  const res = await sdk.items.getCreateModel(companyId, connectionId);

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

**Promise<[operations.GetCreateItemsModelResponse](../../models/operations/getcreateitemsmodelresponse.md)>**


## list

The *List items* endpoint returns a list of [items](https://docs.codat.io/accounting-api#/schemas/Item) for a given company's connection.

[Items](https://docs.codat.io/accounting-api#/schemas/Item) allow your customers to save and track details of the products and services that they buy and sell.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

(async() => {
  const sdk = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const res = await sdk.items.list({
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

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ListItemsRequest](../../models/operations/listitemsrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `retries`                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                     | :heavy_minus_sign:                                                         | Configuration to override the default retry behavior of the client.        |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListItemsResponse](../../models/operations/listitemsresponse.md)>**

