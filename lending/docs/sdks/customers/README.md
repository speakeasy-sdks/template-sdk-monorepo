# Customers
(*accountsReceivable.customers*)

### Available Operations

* [downloadAttachment](#downloadattachment) - Download customer attachment
* [get](#get) - Get customer
* [getAttachment](#getattachment) - Get customer attachment
* [list](#list) - List customers
* [listAttachments](#listattachments) - List customer attachments

## downloadAttachment

The *Download customer attachment* endpoint downloads a specific attachment for a given `customerId` and `attachmentId`.

[Customers](https://docs.codat.io/lending-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support downloading a customer attachment.


### Example Usage

```typescript
import { Lending } from "lending";
import { DownloadAccountingCustomerAttachmentRequest } from "lending/dist/sdk/models/operations";

async function run() {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const attachmentId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const customerId: string = "string";

  const res = await sdk.accountsReceivable.customers.downloadAttachment(attachmentId, companyId, connectionId, customerId);

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
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a connection.                                 | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                |
| `customerId`                                                        | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a customer.                                   |                                                                     |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.DownloadAccountingCustomerAttachmentResponse](../../sdk/models/operations/downloadaccountingcustomerattachmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

The *Get customer* endpoint returns a single customer for a given customerId.

[Customers](https://docs.codat.io/lending-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support getting a specific customer.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { Lending } from "lending";
import { GetAccountingCustomerRequest } from "lending/dist/sdk/models/operations";

async function run() {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const customerId: string = "string";

  const res = await sdk.accountsReceivable.customers.get(companyId, customerId);

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
| `customerId`                                                        | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a customer.                                   |                                                                     |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetAccountingCustomerResponse](../../sdk/models/operations/getaccountingcustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAttachment

The *Get customer attachment* endpoint returns a specific attachment for a given `customerId` and `attachmentId`.

[Customers](https://docs.codat.io/lending-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support getting a customer attachment.


### Example Usage

```typescript
import { Lending } from "lending";
import { GetAccountingCustomerAttachmentRequest } from "lending/dist/sdk/models/operations";

async function run() {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const attachmentId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const customerId: string = "string";

  const res = await sdk.accountsReceivable.customers.getAttachment(attachmentId, companyId, connectionId, customerId);

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
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a connection.                                 | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                |
| `customerId`                                                        | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a customer.                                   |                                                                     |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetAccountingCustomerAttachmentResponse](../../sdk/models/operations/getaccountingcustomerattachmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## list

The *List customers* endpoint returns a list of [customers](https://docs.codat.io/lending-api#/schemas/Customer) for a given company's connection.

[Customers](https://docs.codat.io/lending-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { Lending } from "lending";

async function run() {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const res = await sdk.accountsReceivable.customers.list({
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

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ListAccountingCustomersRequest](../../sdk/models/operations/listaccountingcustomersrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListAccountingCustomersResponse](../../sdk/models/operations/listaccountingcustomersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAttachments

The *List customer attachments* endpoint returns a list of attachments avialable to download for given `customerId`.

[Customers](https://docs.codat.io/lending-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support listing customer attachments.


### Example Usage

```typescript
import { Lending } from "lending";
import { ListAccountingCustomerAttachmentsRequest } from "lending/dist/sdk/models/operations";

async function run() {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const customerId: string = "string";

  const res = await sdk.accountsReceivable.customers.listAttachments(companyId, connectionId, customerId);

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
| `customerId`                                                        | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a customer.                                   |                                                                     |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.ListAccountingCustomerAttachmentsResponse](../../sdk/models/operations/listaccountingcustomerattachmentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
