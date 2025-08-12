<!-- Start SDK Example Usage [usage] -->
```typescript
import { LendingTs } from "@speakeasy-sdks/lending";

const lendingTs = new LendingTs({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await lendingTs.companies.update(
    "8a210b68-6988-11ed-a1eb-0242ac120002",
    {
      name: "New Name",
    },
  );

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->