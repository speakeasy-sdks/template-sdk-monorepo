# Companies

## Example Usage

```typescript
import { Companies, DataConnectionStatus, SourceType } from "@speakeasy-sdks/lending/models/components";

let value: Companies = {
  results: [
    {
      id: "0498e921-9b53-4396-a412-4f2f5983b0a2",
      name: "string",
      description: "Requested early access to the new financing scheme.",
      platform: "string",
      redirect:
        "https://link.codat.io/company/27628208-459c-46a2-a705-5641ce25f739",
      lastSync: "2022-01-01T12:00:00.000Z",
      created: "2022-01-01T12:00:00.000Z",
      createdByUserName: "string",
      dataConnections: [
        {
          id: "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
          integrationId: "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
          integrationKey: "dfxm",
          sourceId: "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
          sourceType: SourceType.Banking,
          platformName: "Basiq",
          linkUrl:
            "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
          status: DataConnectionStatus.Linked,
          lastSync: "2022-10-27T10:22:43.6464237Z",
          created: "2022-10-27T09:53:29Z",
          dataConnectionErrors: [
            {
              erroredOnUtc: "2022-10-23T00:00:00Z",
            },
          ],
        },
      ],
      groups: [
        {
          id: "d7a6c4b4-dc87-45f6-b803-62f466398680",
        },
      ],
    },
  ],
  pageNumber: 1,
  pageSize: 10,
  totalResults: 1,
  links: {
    self: {
      href: "/companies/{id}/data/{dataType}",
    },
    current: {
      href: "/companies/{id}/data/{dataType}?page=1&pageSize=10",
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `results`                                                                                         | [components.Company](../../models/components/company.md)[]                                        | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |
| `links`                                                                                           | [components.Links](../../models/components/links.md)                                              | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |