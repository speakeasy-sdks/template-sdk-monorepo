<!-- Start SDK Example Usage [usage] -->
```typescript
import { LendingTs } from "@speakeasy-sdks/lending";

const lendingTs = new LendingTs({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const page = 1;
    const pageSize = 100;
    const query = "id=e3334455-1aed-4e71-ab43-6bccf12092ee";
    const orderBy = "-modifiedDate";

    const result = await lendingTs.companies.list(page, pageSize, query, orderBy);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->