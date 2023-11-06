# FinancialStatementsCashFlow
(*financialStatements.cashFlow*)

### Available Operations

* [get](#get) - Get cash flow statement

## get

Gets the latest cash flow statement for a company.

### Example Usage

```typescript
import { Lending } from "lending";
import { GetAccountingCashFlowStatementRequest } from "lending/dist/sdk/models/operations";

(async() => {
  const sdk = new Lending({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  });
const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
const periodLength: number = 4;
const periodsToCompare: number = 20;
const startMonth: string = "2022-10-23T00:00:00.000Z";

  const res = await sdk.financialStatements.cashFlow.get(companyId, periodLength, periodsToCompare, startMonth);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `periodLength`                                                      | *number*                                                            | :heavy_check_mark:                                                  | Number of months defining the period of interest.                   | 4                                                                   |
| `periodsToCompare`                                                  | *number*                                                            | :heavy_check_mark:                                                  | Number of periods with `periodLength` to compare.                   | 20                                                                  |
| `startMonth`                                                        | *string*                                                            | :heavy_minus_sign:                                                  | The month the report starts from.                                   | 2022-10-23T00:00:00.000Z                                            |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.GetAccountingCashFlowStatementResponse](../../models/operations/getaccountingcashflowstatementresponse.md)>**

