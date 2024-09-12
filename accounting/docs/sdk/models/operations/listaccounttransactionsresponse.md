# ListAccountTransactionsResponse

## Example Usage

```typescript
import { ListAccountTransactionsResponse } from "@speakeasy-sdks/accounting/sdk/models/operations";
import { AccountTransactionLineRecordRefDataType } from "@speakeasy-sdks/accounting/sdk/models/shared";

let value: ListAccountTransactionsResponse = {
  accountTransactions: {
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
        date: "2022-10-23T00:00:00Z",
        lines: [
          {
            recordRef: {
              dataType: AccountTransactionLineRecordRefDataType.Transfers,
            },
          },
        ],
        modifiedDate: "2022-10-23T00:00:00Z",
        sourceModifiedDate: "2022-10-23T00:00:00Z",
      },
    ],
    totalResults: 1,
  },
  contentType: "<value>",
  statusCode: 623564,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                                                                                                         | Type                                                                                                                                                                                                          | Required                                                                                                                                                                                                      | Description                                                                                                                                                                                                   | Example                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountTransactions`                                                                                                                                                                                         | [shared.AccountTransactions](../../../sdk/models/shared/accounttransactions.md)                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                            | Success                                                                                                                                                                                                       | {<br/>"pageNumber": 1,<br/>"pageSize": 10,<br/>"totalResults": 1,<br/>"_links": {<br/>"self": {<br/>"href": "/companies/{id}/data/{dataType}"<br/>},<br/>"current": {<br/>"href": "/companies/{id}/data/{dataType}?page=1\u0026pageSize=10"<br/>}<br/>}<br/>} |
| `contentType`                                                                                                                                                                                                 | *string*                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                            | HTTP response content type for this operation                                                                                                                                                                 |                                                                                                                                                                                                               |
| `errorMessage`                                                                                                                                                                                                | [shared.ErrorMessage](../../../sdk/models/shared/errormessage.md)                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                            | Your `query` parameter was not correctly formed                                                                                                                                                               |                                                                                                                                                                                                               |
| `statusCode`                                                                                                                                                                                                  | *number*                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                            | HTTP response status code for this operation                                                                                                                                                                  |                                                                                                                                                                                                               |
| `rawResponse`                                                                                                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                                                                                                       |                                                                                                                                                                                                               |