# DataConnectionStatus

The current authorization status of the data connection.

## Example Usage

```typescript
import { DataConnectionStatus } from "@speakeasy-sdks/lending/models/components";

let value: DataConnectionStatus = DataConnectionStatus.Linked;
```

## Values

| Name           | Value          |
| -------------- | -------------- |
| `PendingAuth`  | PendingAuth    |
| `Linked`       | Linked         |
| `Unlinked`     | Unlinked       |
| `Deauthorized` | Deauthorized   |