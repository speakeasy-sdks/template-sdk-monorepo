# ReportLine


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accountId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | Identifier for the account, unique for the company in the accounting platform. |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Name of the report line item.                                                  |
| `value`                                                                        | *Decimal*                                                                      | :heavy_check_mark:                                                             | Numerical value of the line item.                                              |
| `items`                                                                        | [components.ReportLine](../../models/components/reportline.md)[]               | :heavy_minus_sign:                                                             | An array of ReportLine items.                                                  |