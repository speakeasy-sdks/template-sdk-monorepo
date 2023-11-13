<!-- Start SDK Example Usage -->
```typescript
import { Lending } from "lending";

(async () => {
    const sdk = new Lending({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const res = await sdk.companies.create({
        description: "Requested early access to the new financing scheme.",
        name: "Bank of Dave",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->