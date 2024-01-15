# ClientRateLimitResetWebhook

Webhook request body for a client that has had their rate limit reset.


## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `alertId`                                                                                               | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Unique identifier of the webhook event.                                                                 |
| `clientId`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Unique identifier for your client in Codat.                                                             |
| `clientName`                                                                                            | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Name of your client in Codat.                                                                           |
| `data`                                                                                                  | [shared.ClientRateLimitResetWebhookData](../../../sdk/models/shared/clientratelimitresetwebhookdata.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `message`                                                                                               | *string*                                                                                                | :heavy_minus_sign:                                                                                      | A human readable message about the webhook.                                                             |
| `ruleId`                                                                                                | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Unique identifier for the rule.                                                                         |
| `ruleType`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The type of rule.                                                                                       |