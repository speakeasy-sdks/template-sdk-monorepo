# AccountsPayableTracking

Categories, and a project and customer, against which the item is tracked.


## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `categoryRefs`                                                                       | [components.TrackingCategoryRef](../../models/components/trackingcategoryref.md)[]   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `customerRef`                                                                        | [components.AccountingCustomerRef](../../models/components/accountingcustomerref.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `projectRef`                                                                         | [components.ProjectRef](../../models/components/projectref.md)                       | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `isBilledTo`                                                                         | [components.BilledToType](../../models/components/billedtotype.md)                   | :heavy_check_mark:                                                                   | Defines if the invoice or credit note is billed/rebilled to a project or customer.   |
| `isRebilledTo`                                                                       | [components.BilledToType](../../models/components/billedtotype.md)                   | :heavy_check_mark:                                                                   | Defines if the invoice or credit note is billed/rebilled to a project or customer.   |