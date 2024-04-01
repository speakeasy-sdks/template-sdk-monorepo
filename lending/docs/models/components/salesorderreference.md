# SalesOrderReference


## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | Unique identifier to a record in `dataType`.                                                 |
| `dataType`                                                                                   | [components.AccountingInvoiceDataType](../../models/components/accountinginvoicedatatype.md) | :heavy_minus_sign:                                                                           | The underlying data type associated to the reference `id`.                                   |