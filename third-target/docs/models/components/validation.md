# Validation

A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `errors`                                                                 | [components.ValidationItem](../../models/components/validationitem.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |
| `warnings`                                                               | [components.ValidationItem](../../models/components/validationitem.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |