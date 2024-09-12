# AccountTransactionLine

## Example Usage

```typescript
import { AccountTransactionLine, AccountTransactionLineRecordRefDataType } from "@speakeasy-sdks/accounting/sdk/models/shared";

let value: AccountTransactionLine = {
  recordRef: {
    dataType: AccountTransactionLineRecordRefDataType.Transfers,
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                | *Decimal*                                                                                               | :heavy_minus_sign:                                                                                      | Amount in the bill payment currency.                                                                    |
| `description`                                                                                           | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Description of the account transaction.                                                                 |
| `recordRef`                                                                                             | [shared.AccountTransactionLineRecordRef](../../../sdk/models/shared/accounttransactionlinerecordref.md) | :heavy_minus_sign:                                                                                      | Links an account transaction line to the underlying record that created it.                             |