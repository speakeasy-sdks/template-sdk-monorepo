# InvoiceLineItem


## Fields

| Field                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountRef`                                                                                                                                                                                                                                                                                        | [shared.AccountRef](../../../sdk/models/shared/accountref.md)                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                  | Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.                                                                                                                                               |
| `description`                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                  | Friendly name of the goods or services provided.                                                                                                                                                                                                                                                    |
| `discountAmount`                                                                                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                  | Numerical value of any discounts applied.                                                                                                                                                                                                                                                           |
| `discountPercentage`                                                                                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                  | Percentage rate (from 0 to 100) of any discounts applied to the unit amount.                                                                                                                                                                                                                        |
| `isDirectIncome`                                                                                                                                                                                                                                                                                    | *boolean*                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                  | The invoice is a direct income if `True`.                                                                                                                                                                                                                                                           |
| `itemRef`                                                                                                                                                                                                                                                                                           | [shared.PropertieItemRef](../../../sdk/models/shared/propertieitemref.md)                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                  | Reference to the item the line is linked to.                                                                                                                                                                                                                                                        |
| `quantity`                                                                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                  | Number of units of goods or services provided.                                                                                                                                                                                                                                                      |
| `subTotal`                                                                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                  | Amount of the line, inclusive of discounts but exclusive of tax.                                                                                                                                                                                                                                    |
| `taxAmount`                                                                                                                                                                                                                                                                                         | *number*                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                  | Amount of tax for the line.                                                                                                                                                                                                                                                                         |
| `taxRateRef`                                                                                                                                                                                                                                                                                        | [shared.TaxRateRef](../../../sdk/models/shared/taxrateref.md)                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                  | Data types that reference a tax rate, for example invoice and bill line items, use a taxRateRef that includes the ID and name of the linked tax rate.<br/><br/>Found on:<br/><br/>- Bill line items<br/>- Bill Credit Note line items<br/>- Credit Note line items<br/>- Direct incomes line items<br/>- Invoice line items<br/>- Items |
| `totalAmount`                                                                                                                                                                                                                                                                                       | *number*                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                  | Total amount of the line, including tax. When pushing invoices to Xero, the total amount is exclusive of tax to allow automatic calculations if a tax rate or tax amount is not specified.                                                                                                          |
| `tracking`                                                                                                                                                                                                                                                                                          | [shared.AccountsReceivableTracking](../../../sdk/models/shared/accountsreceivabletracking.md)                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                  | Categories, and a project and customer, against which the item is tracked.                                                                                                                                                                                                                          |
| ~~`trackingCategoryRefs`~~                                                                                                                                                                                                                                                                          | [shared.TrackingCategoryRef](../../../sdk/models/shared/trackingcategoryref.md)[]                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Reference to the tracking categories to which the line item is linked.                                                                                             |
| `unitAmount`                                                                                                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                  | Price of each unit of goods or services.                                                                                                                                                                                                                                                            |