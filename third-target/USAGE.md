<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "openapi";

async function run() {
    const sdk = new SDK({
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