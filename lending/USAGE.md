<!-- Start SDK Example Usage [usage] -->
```typescript
import { LendingTs } from "@speakeasy-sdks/lending";

async function run() {
    const sdk = new LendingTs({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const page = 1;
    const pageSize = 100;
    const query = "<value>";
    const orderBy = "-modifiedDate";

    const result = await sdk.companies.list(page, pageSize, query, orderBy);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->