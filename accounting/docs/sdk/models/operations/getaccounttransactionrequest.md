# GetAccountTransactionRequest

## Example Usage

```typescript
import { GetAccountTransactionRequest } from "@speakeasy-sdks/accounting/sdk/models/operations";

let value: GetAccountTransactionRequest = {
  accountTransactionId: "<value>",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `accountTransactionId`                        | *string*                                      | :heavy_check_mark:                            | Unique identifier for an account transaction. |                                               |
| `companyId`                                   | *string*                                      | :heavy_check_mark:                            | Unique identifier for a company.              | 8a210b68-6988-11ed-a1eb-0242ac120002          |
| `connectionId`                                | *string*                                      | :heavy_check_mark:                            | Unique identifier for a connection.           | 2e9d2c44-f675-40ba-8049-353bfcb5e171          |