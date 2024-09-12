<!-- Start SDK Example Usage [usage] -->
```typescript
import { LendingTs } from "@speakeasy-sdks/lending";

const lendingTs = new LendingTs({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await lendingTs.companies.list(
    1,
    100,
    "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    "-modifiedDate",
  );

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->