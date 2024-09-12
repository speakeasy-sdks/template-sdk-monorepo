<!-- Start SDK Example Usage [usage] -->
```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

const accounting = new Accounting({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await accounting.accountTransactions.get(
    "<value>",
    "8a210b68-6988-11ed-a1eb-0242ac120002",
    "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  );

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->