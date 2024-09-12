# GetCreateChartOfAccountsModelResponse

## Example Usage

```typescript
import { GetCreateChartOfAccountsModelResponse } from "@speakeasy-sdks/accounting/sdk/models/operations";

let value: GetCreateChartOfAccountsModelResponse = {
  contentType: "<value>",
  statusCode: 537373,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `errorMessage`                                                        | [shared.ErrorMessage](../../../sdk/models/shared/errormessage.md)     | :heavy_minus_sign:                                                    | Your API request was not properly authorized.                         |
| `pushOption`                                                          | [shared.PushOption](../../../sdk/models/shared/pushoption.md)         | :heavy_minus_sign:                                                    | OK                                                                    |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |