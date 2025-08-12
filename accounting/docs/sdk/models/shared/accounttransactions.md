# AccountTransactions

## Example Usage

```typescript
import { AccountTransactions } from "@speakeasy-sdks/accounting/sdk/models/shared";

let value: AccountTransactions = {
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
  totalResults: 1,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `links`                                                                                           | [shared.Links](../../../sdk/models/shared/links.md)                                               | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `results`                                                                                         | [shared.AccountTransaction](../../../sdk/models/shared/accounttransaction.md)[]                   | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |