# GetAccountTransactionResponse

## Example Usage

```typescript
import { GetAccountTransactionResponse } from "@speakeasy-sdks/accounting/sdk/models/operations";
import { AccountTransactionLineRecordRefDataType } from "@speakeasy-sdks/accounting/sdk/models/shared";

let value: GetAccountTransactionResponse = {
  accountTransaction: {
    currency: "USD",
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
  contentType: "<value>",
  statusCode: 602763,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `accountTransaction`                                                          | [shared.AccountTransaction](../../../sdk/models/shared/accounttransaction.md) | :heavy_minus_sign:                                                            | Success                                                                       |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `errorMessage`                                                                | [shared.ErrorMessage](../../../sdk/models/shared/errormessage.md)             | :heavy_minus_sign:                                                            | Your API request was not properly authorized.                                 |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |