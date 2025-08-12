# CreateAccountResponse

## Example Usage

```typescript
import { CreateAccountResponse } from "@speakeasy-sdks/accounting/sdk/models/operations";

let value: CreateAccountResponse = {
  contentType: "<value>",
  statusCode: 859023,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `createAccountResponse`                                                             | [shared.CreateAccountResponse](../../../sdk/models/shared/createaccountresponse.md) | :heavy_minus_sign:                                                                  | Success                                                                             |
| `errorMessage`                                                                      | [shared.ErrorMessage](../../../sdk/models/shared/errormessage.md)                   | :heavy_minus_sign:                                                                  | The request made is not valid.                                                      |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |