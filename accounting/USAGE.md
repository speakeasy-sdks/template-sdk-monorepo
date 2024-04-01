<!-- Start SDK Example Usage [usage] -->
```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

async function run() {
    const sdk = new Accounting({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const accountTransactionId = "<value>";
    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

    const result = await sdk.accountTransactions.get(accountTransactionId, companyId, connectionId);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->