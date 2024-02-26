# BankStatementUploadConfiguration

Settings for uploading banking data to Codat


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `accountId`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | The ID of the account in the 3rd party platform                               |
| `providerId`                                                                  | *string*                                                                      | :heavy_minus_sign:                                                            | The truelayer provider ID, required if source is truelayer, ignored otherwise |
| `source`                                                                      | [shared.Source](../../../sdk/models/shared/source.md)                         | :heavy_minus_sign:                                                            | The source or format of the banking data e.g. Codat                           |