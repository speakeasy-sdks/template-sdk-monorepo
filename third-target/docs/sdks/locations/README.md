# Locations
(*sales.locations*)

### Available Operations

* [list](#list) - List locations
* [get](#get) - Get location

## list

The *List locations* endpoint returns a list of [locations](https://docs.codat.io/lending-api#/schemas/Location) for a given company's connection.

[Locations](https://docs.codat.io/lending-api#/schemas/Location) hold information on the geographic location at which stocks of [products](https://docs.codat.io/lending-api#/schemas/Product) may be held or where [orders](https://docs.codat.io/lending-api#/schemas/Order) were placed.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
  const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
  
  const result = await sdk.sales.locations.list(companyId, connectionId);

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

**Promise<[operations.ListCommerceLocationsResponse](../../models/operations/listcommercelocationsresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 401,402,403,404,409,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## get

The *Get location* endpoint returns a single location for a given locationId.

[Locations](https://docs.codat.io/lending-api#/schemas/Location) hold information on the geographic location at which stocks of [products](https://docs.codat.io/lending-api#/schemas/Product) may be held or where [orders](https://docs.codat.io/lending-api#/schemas/Order) were placed.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-locations) for integrations that support getting a specific location.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
  const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
  const locationId = "<value>";
  
  const result = await sdk.sales.locations.get(companyId, connectionId, locationId);

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
| `locationId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Unique identifier for a location.                                                                                                                                              |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |


### Response

**Promise<[operations.GetCommerceLocationResponse](../../models/operations/getcommercelocationresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 401,402,403,404,409,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |
