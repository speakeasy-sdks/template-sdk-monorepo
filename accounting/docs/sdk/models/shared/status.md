# Status

The status of the account transaction.

## Example Usage

```typescript
import { Status } from "@speakeasy-sdks/accounting/sdk/models/shared";

let value: Status = Status.Unreconciled;
```

## Values

| Name           | Value          |
| -------------- | -------------- |
| `Unknown`      | Unknown        |
| `Unreconciled` | Unreconciled   |
| `Reconciled`   | Reconciled     |
| `Void`         | Void           |