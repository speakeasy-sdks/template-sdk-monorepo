# ListAccountsResponse

## Example Usage

```typescript
import { ListAccountsResponse } from "@speakeasy-sdks/accounting/sdk/models/operations";
import { AccountStatus, AccountType } from "@speakeasy-sdks/accounting/sdk/models/shared";
import { Decimal } from "@speakeasy-sdks/accounting/sdk/types";

let value: ListAccountsResponse = {
  accounts: {
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
        fullyQualifiedName: "Fixed Asset",
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
  },
  contentType: "<value>",
  statusCode: 414662,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                                                                                                         | Type                                                                                                                                                                                                          | Required                                                                                                                                                                                                      | Description                                                                                                                                                                                                   | Example                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accounts`                                                                                                                                                                                                    | [shared.Accounts](../../../sdk/models/shared/accounts.md)                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                            | Success                                                                                                                                                                                                       | {<br/>"pageNumber": 1,<br/>"pageSize": 10,<br/>"totalResults": 1,<br/>"_links": {<br/>"self": {<br/>"href": "/companies/{id}/data/{dataType}"<br/>},<br/>"current": {<br/>"href": "/companies/{id}/data/{dataType}?page=1\u0026pageSize=10"<br/>}<br/>}<br/>} |
| `contentType`                                                                                                                                                                                                 | *string*                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                            | HTTP response content type for this operation                                                                                                                                                                 |                                                                                                                                                                                                               |
| `errorMessage`                                                                                                                                                                                                | [shared.ErrorMessage](../../../sdk/models/shared/errormessage.md)                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                            | Your `query` parameter was not correctly formed                                                                                                                                                               |                                                                                                                                                                                                               |
| `statusCode`                                                                                                                                                                                                  | *number*                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                            | HTTP response status code for this operation                                                                                                                                                                  |                                                                                                                                                                                                               |
| `rawResponse`                                                                                                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                                                                                                       |                                                                                                                                                                                                               |