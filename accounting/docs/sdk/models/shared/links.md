# Links

## Example Usage

```typescript
import { Links } from "@speakeasy-sdks/accounting/sdk/models/shared";

let value: Links = {
  current: {
    href: "/companies?page=1&pageSize=10",
  },
  self: {
    href: "/companies",
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `current`                                             | [shared.HalRef](../../../sdk/models/shared/halref.md) | :heavy_check_mark:                                    | N/A                                                   |
| `next`                                                | [shared.HalRef](../../../sdk/models/shared/halref.md) | :heavy_minus_sign:                                    | N/A                                                   |
| `previous`                                            | [shared.HalRef](../../../sdk/models/shared/halref.md) | :heavy_minus_sign:                                    | N/A                                                   |
| `self`                                                | [shared.HalRef](../../../sdk/models/shared/halref.md) | :heavy_check_mark:                                    | N/A                                                   |