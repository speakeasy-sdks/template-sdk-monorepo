# ErrorValidation

A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.

## Example Usage

```typescript
import { ErrorValidation } from "@speakeasy-sdks/lending/models/components";

let value: ErrorValidation = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `errors`                                                                           | [components.ErrorValidationItem](../../models/components/errorvalidationitem.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `warnings`                                                                         | [components.ErrorValidationItem](../../models/components/errorvalidationitem.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |