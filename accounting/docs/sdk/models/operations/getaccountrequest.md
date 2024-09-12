# GetAccountRequest

## Example Usage

```typescript
import { GetAccountRequest } from "@speakeasy-sdks/accounting/sdk/models/operations";

let value: GetAccountRequest = {
  accountId: "<value>",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `accountId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for an account.    |                                      |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |