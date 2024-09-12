# GetAccountResponse

## Example Usage

```typescript
import { GetAccountResponse } from "@speakeasy-sdks/accounting/sdk/models/operations";
import { AccountStatus, AccountType } from "@speakeasy-sdks/accounting/sdk/models/shared";
import { Decimal } from "@speakeasy-sdks/accounting/sdk/types";

let value: GetAccountResponse = {
  account: {
    currency: "GBP",
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
  contentType: "<value>",
  statusCode: 143353,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `account`                                                             | [shared.Account](../../../sdk/models/shared/account.md)               | :heavy_minus_sign:                                                    | Success                                                               |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `errorMessage`                                                        | [shared.ErrorMessage](../../../sdk/models/shared/errormessage.md)     | :heavy_minus_sign:                                                    | Your API request was not properly authorized.                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |