# Connections
(*connections*)

## Overview

Manage your companies' data connections.

### Available Operations

* [create](#create) - Create connection
* [delete](#delete) - Delete connection
* [get](#get) - Get connection
* [list](#list) - List connections
* [unlink](#unlink) - Unlink connection

## create

﻿Creates a connection for the company by providing a valid `platformKey`. 

Use the [List Integrations](https://docs.codat.io/lending-api#/operations/list-integrations) endpoint to access valid platform keys. 

### Example Usage

```typescript
import { Lending } from "lending";
import { CreateConnectionRequest, CreateConnectionRequestBody } from "lending/dist/sdk/models/operations";

(async() => {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const requestBody: CreateConnectionRequestBody = {
  platformKey: "gbol",
};

  const res = await sdk.connections.create(companyId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique identifier for a company.                                                                 | 8a210b68-6988-11ed-a1eb-0242ac120002                                                             |
| `requestBody`                                                                                    | [operations.CreateConnectionRequestBody](../../models/operations/createconnectionrequestbody.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |                                                                                                  |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |                                                                                                  |


### Response

**Promise<[operations.CreateConnectionResponse](../../models/operations/createconnectionresponse.md)>**


## delete

﻿Revoke and remove a connection from a company.
This operation is not reversible. The end user would need to reauthorize a new data connection if you wish to view new data for this company.

### Example Usage

```typescript
import { Lending } from "lending";
import { DeleteConnectionRequest } from "lending/dist/sdk/models/operations";

(async() => {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

  const res = await sdk.connections.delete(companyId, connectionId);

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

**Promise<[operations.DeleteConnectionResponse](../../models/operations/deleteconnectionresponse.md)>**


## get

﻿Returns a specific connection for a company when valid identifiers are provided. If the identifiers are for a deleted company and/or connection, a not found response is returned.

### Example Usage

```typescript
import { Lending } from "lending";
import { GetConnectionRequest } from "lending/dist/sdk/models/operations";

(async() => {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

  const res = await sdk.connections.get(companyId, connectionId);

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

**Promise<[operations.GetConnectionResponse](../../models/operations/getconnectionresponse.md)>**


## list

﻿List the connections for a company.

### Example Usage

```typescript
import { Lending } from "lending";

(async() => {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });

  const res = await sdk.connections.list({
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

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListConnectionsRequest](../../models/operations/listconnectionsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListConnectionsResponse](../../models/operations/listconnectionsresponse.md)>**


## unlink

﻿This allows you to deauthorize a connection, without deleting it from Codat. This means you can still view any data that has previously been pulled into Codat, and also lets you re-authorize in future if your customer wishes to resume sharing their data.

### Example Usage

```typescript
import { Lending } from "lending";
import { UnlinkConnectionRequest, UnlinkConnectionUpdateConnection } from "lending/dist/sdk/models/operations";
import { DataConnectionStatus } from "lending/dist/sdk/models/shared";

(async() => {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
const requestBody: UnlinkConnectionUpdateConnection = {};

  const res = await sdk.connections.unlink(companyId, connectionId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Unique identifier for a company.                                                                           | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                       |
| `connectionId`                                                                                             | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Unique identifier for a connection.                                                                        | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                                       |
| `requestBody`                                                                                              | [operations.UnlinkConnectionUpdateConnection](../../models/operations/unlinkconnectionupdateconnection.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |                                                                                                            |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |                                                                                                            |


### Response

**Promise<[operations.UnlinkConnectionResponse](../../models/operations/unlinkconnectionresponse.md)>**

