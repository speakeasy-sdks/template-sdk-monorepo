# PushOptionChoice

## Example Usage

```typescript
import { PushOptionChoice } from "@speakeasy-sdks/accounting/sdk/models/shared";

let value: PushOptionChoice = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | A description of the property.                                        |
| `displayName`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | The property's display name.                                          |
| `required`                                                            | *boolean*                                                             | :heavy_minus_sign:                                                    | The property is required if `True`.                                   |
| `type`                                                                | [shared.PushOptionType](../../../sdk/models/shared/pushoptiontype.md) | :heavy_minus_sign:                                                    | The option type.                                                      |
| `value`                                                               | *string*                                                              | :heavy_minus_sign:                                                    | Allowed value for field.                                              |