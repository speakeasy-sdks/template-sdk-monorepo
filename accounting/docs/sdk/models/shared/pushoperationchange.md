# PushOperationChange

## Example Usage

```typescript
import { DataType, PushOperationChange } from "@speakeasy-sdks/accounting/sdk/models/shared";

let value: PushOperationChange = {
  recordRef: {
    dataType: DataType.Invoices,
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `attachmentId`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | Unique identifier for the attachment created otherwise null.              |
| `recordRef`                                                               | [shared.PushOperationRef](../../../sdk/models/shared/pushoperationref.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `type`                                                                    | [shared.PushChangeType](../../../sdk/models/shared/pushchangetype.md)     | :heavy_minus_sign:                                                        | Type of change being applied to record in third party platform.           |