# CreateAccountRequest

## Example Usage

```typescript
import { CreateAccountRequest } from "@speakeasy-sdks/accounting/sdk/models/operations";
import { AccountStatus, AccountType } from "@speakeasy-sdks/accounting/sdk/models/shared";
import { Decimal } from "@speakeasy-sdks/accounting/sdk/types";

let value: CreateAccountRequest = {
  accountPrototype: {
    currency: "USD",
    currentBalance: new Decimal("0"),
    description:
      "Invoices the business has issued but has not yet collected payment on.",
    fullyQualifiedCategory: "Asset.Current",
    fullyQualifiedName: "Cash On Hand",
    name: "Accounts Receivable",
    nominalCode: "610",
    status: AccountStatus.Active,
    type: AccountType.Asset,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `accountPrototype`                                                        | [shared.AccountPrototype](../../../sdk/models/shared/accountprototype.md) | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `companyId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | Unique identifier for a company.                                          | 8a210b68-6988-11ed-a1eb-0242ac120002                                      |
| `connectionId`                                                            | *string*                                                                  | :heavy_check_mark:                                                        | Unique identifier for a connection.                                       | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                      |
| `timeoutInMinutes`                                                        | *number*                                                                  | :heavy_minus_sign:                                                        | Time limit for the push operation to complete before it is timed out.     |                                                                           |