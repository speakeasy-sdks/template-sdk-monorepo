# Accounts

## Example Usage

```typescript
import { Accounts, AccountStatus, AccountType } from "@speakeasy-sdks/accounting/sdk/models/shared";
import { Decimal } from "@speakeasy-sdks/accounting/sdk/types";

let value: Accounts = {
  links: {
    current: {
      href: "/companies/{id}/data/{dataType}?page=1&pageSize=10",
    },
    self: {
      href: "/companies/{id}/data/{dataType}",
    },
  },
  pageNumber: 1,
  pageSize: 10,
  results: [
    {
      currency: "EUR",
      currentBalance: new Decimal("0"),
      description:
        "Invoices the business has issued but has not yet collected payment on.",
      fullyQualifiedCategory: "Asset.Current",
      fullyQualifiedName: "Cash On Hand",
      id: "1b6266d1-1e44-46c5-8eb5-a8f98e03124e",
      modifiedDate: "2022-10-23T00:00:00Z",
      name: "Accounts Receivable",
      nominalCode: "610",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      status: AccountStatus.Active,
      type: AccountType.Asset,
    },
  ],
  totalResults: 1,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `links`                                                                                           | [shared.Links](../../../sdk/models/shared/links.md)                                               | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `results`                                                                                         | [shared.Account](../../../sdk/models/shared/account.md)[]                                         | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |