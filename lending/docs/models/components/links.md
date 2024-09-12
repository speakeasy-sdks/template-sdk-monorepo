# Links

## Example Usage

```typescript
import { Links } from "@speakeasy-sdks/lending/models/components";

let value: Links = {
  self: {
    href: "/companies",
  },
  current: {
    href: "/companies?page=1&pageSize=10",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `self`                                                 | [components.HalRef](../../models/components/halref.md) | :heavy_check_mark:                                     | N/A                                                    |
| `current`                                              | [components.HalRef](../../models/components/halref.md) | :heavy_check_mark:                                     | N/A                                                    |
| `next`                                                 | [components.HalRef](../../models/components/halref.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `previous`                                             | [components.HalRef](../../models/components/halref.md) | :heavy_minus_sign:                                     | N/A                                                    |