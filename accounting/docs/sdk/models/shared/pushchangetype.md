# PushChangeType

Type of change being applied to record in third party platform.

## Example Usage

```typescript
import { PushChangeType } from "@speakeasy-sdks/accounting/sdk/models/shared";

let value: PushChangeType = PushChangeType.Created;
```

## Values

| Name                 | Value                |
| -------------------- | -------------------- |
| `Unknown`            | Unknown              |
| `Created`            | Created              |
| `Modified`           | Modified             |
| `Deleted`            | Deleted              |
| `AttachmentUploaded` | AttachmentUploaded   |