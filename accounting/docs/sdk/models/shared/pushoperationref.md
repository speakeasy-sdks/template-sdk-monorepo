# PushOperationRef

## Example Usage

```typescript
import { DataType, PushOperationRef } from "@speakeasy-sdks/accounting/sdk/models/shared";

let value: PushOperationRef = {
  dataType: DataType.Invoices,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `dataType`                                                | [shared.DataType](../../../sdk/models/shared/datatype.md) | :heavy_minus_sign:                                        | Available data types                                      | invoices                                                  |
| `id`                                                      | *string*                                                  | :heavy_minus_sign:                                        | Unique identifier for a push operation.                   |                                                           |