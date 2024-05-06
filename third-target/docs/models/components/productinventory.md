# ProductInventory

Information about the total inventory as well as the locations inventory is in.


## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `totalQuantity`                                                                              | *Decimal*                                                                                    | :heavy_minus_sign:                                                                           | The total quantity of stock remaining across locations.                                      |
| `locations`                                                                                  | [components.ProductInventoryLocation](../../models/components/productinventorylocation.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |