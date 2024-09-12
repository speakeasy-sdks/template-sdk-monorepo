# AccountTransactionLineRecordRef

Links an account transaction line to the underlying record that created it.

## Example Usage

```typescript
import { AccountTransactionLineRecordRef, AccountTransactionLineRecordRefDataType } from "@speakeasy-sdks/accounting/sdk/models/shared";

let value: AccountTransactionLineRecordRef = {
  dataType: AccountTransactionLineRecordRefDataType.Transfers,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `dataType`                                                                                                              | [shared.AccountTransactionLineRecordRefDataType](../../../sdk/models/shared/accounttransactionlinerecordrefdatatype.md) | :heavy_minus_sign:                                                                                                      | Name of underlying data type.                                                                                           | transfers                                                                                                               |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | 'id' of the underlying record or data type.                                                                             |                                                                                                                         |