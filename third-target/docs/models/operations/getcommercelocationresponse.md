# GetCommerceLocationResponse


## Fields

| Field                                                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                                                                                                                                                                                                        | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                | N/A                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                   |
| `commerceLocation`                                                                                                                                                                                                                                                                                                | [components.CommerceLocation](../../models/components/commercelocation.md)                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                | OK                                                                                                                                                                                                                                                                                                                | {<br/>"id": "15",<br/>"name": "London Warehouse",<br/>"address": {<br/>"type": "Inventory",<br/>"line1": "Warner House",<br/>"line2": "98 Theobald's Road",<br/>"city": "London",<br/>"region": "",<br/>"country": "United Kingdom",<br/>"postalCode": "WC1X 8WB"<br/>},<br/>"modifiedDate": "2020-08-12T14:37:37",<br/>"sourceModifiedDate": "2020-08-12T14:37:37"<br/>} |