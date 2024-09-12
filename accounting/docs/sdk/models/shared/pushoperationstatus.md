# PushOperationStatus

The current status of the push operation.

## Example Usage

```typescript
import { PushOperationStatus } from "@speakeasy-sdks/accounting/sdk/models/shared";

let value: PushOperationStatus = PushOperationStatus.Success;
```

## Values

| Name       | Value      |
| ---------- | ---------- |
| `Pending`  | Pending    |
| `Failed`   | Failed     |
| `Success`  | Success    |
| `TimedOut` | TimedOut   |