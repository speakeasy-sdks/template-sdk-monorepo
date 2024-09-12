# AccountingSupplier

> View the coverage for suppliers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers" target="_blank">Data coverage explorer</a>.

## Overview

From the **Suppliers** endpoints, you can retrieve a list of [all the suppliers for a company](https://docs.codat.io/lending-api#/operations/list-suppliers). Suppliers' data links to accounts payable [bills](https://docs.codat.io/lending-api#/schemas/Bill).


## Fields

| Field                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `modifiedDate`                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                         | 2022-10-23 00:00:00 +0000 UTC                                                                                                                                                                                                                                                               |
| `sourceModifiedDate`                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                         | 2022-10-23 00:00:00 +0000 UTC                                                                                                                                                                                                                                                               |
| `id`                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | Identifier for the supplier, unique to the company in the accounting platform.                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                             |
| `supplierName`                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | Name of the supplier as recorded in the accounting system, typically the company name.                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                             |
| `contactName`                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | Name of the main contact for the supplier.                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                             |
| `emailAddress`                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | Email address that the supplier may be contacted on.                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                             |
| `phone`                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | Phone number that the supplier may be contacted on.                                                                                                                                                                                                                                         | +44 25691 154789                                                                                                                                                                                                                                                                            |
| `addresses`                                                                                                                                                                                                                                                                                 | [components.AccountingAddress](../../models/components/accountingaddress.md)[]                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | An array of Addresses.                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                             |
| `registrationNumber`                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | Company number of the supplier. In the UK, this is typically the company registration number issued by Companies House.                                                                                                                                                                     |                                                                                                                                                                                                                                                                                             |
| `taxNumber`                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | Supplier's company tax number.                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                             |
| `status`                                                                                                                                                                                                                                                                                    | [components.SupplierStatus](../../models/components/supplierstatus.md)                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                          | Status of the supplier.                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                             |
| `defaultCurrency`                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | Default currency the supplier's transactional data is recorded in.                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                             |
| `metadata`                                                                                                                                                                                                                                                                                  | [components.Metadata](../../models/components/metadata.md)                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                             |
| `supplementalData`                                                                                                                                                                                                                                                                          | [components.SupplementalData](../../models/components/supplementaldata.md)                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | Supplemental data is additional data you can include in our standard data types. <br/><br/>It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data. |                                                                                                                                                                                                                                                                                             |