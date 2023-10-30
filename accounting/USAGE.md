<!-- Start SDK Example Usage -->


```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import { GetAccountTransactionRequest } from "@speakeasy-sdks/accounting/dist/sdk/models/operations";

(async () => {
    const sdk = new Accounting({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });
    const accountTransactionId: string = "string";
    const companyId: string = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId: string = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

    const res = await sdk.accountTransactions.get(accountTransactionId, companyId, connectionId);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->