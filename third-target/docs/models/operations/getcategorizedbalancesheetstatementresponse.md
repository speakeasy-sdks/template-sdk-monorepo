# GetCategorizedBalanceSheetStatementResponse


## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `enhancedFinancialReport`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | [components.EnhancedFinancialReport](../../models/components/enhancedfinancialreport.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | OK                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | {<br/>"reportInfo": {<br/>"reportName": "EnhancedProfitAndLossAccounts",<br/>"companyName": "ABC LTD",<br/>"generatedDate": "2022-01-01"<br/>},<br/>"reportItems": [<br/>{<br/>"date": "2022-01-01",<br/>"balance": 70,<br/>"accountName": "Sales UK",<br/>"accountId": "13931cbf-ea06-4d6e-9538-a8457fa66011",<br/>"accountCategory": {<br/>"status": "Suggested",<br/>"levels": [<br/>{<br/>"levelName": "Income",<br/>"confidence": 0.95<br/>},<br/>{<br/>"levelName": "Revenue",<br/>"confidence": 0.9<br/>}<br/>]<br/>}<br/>},<br/>{<br/>"date": "2022-01-01",<br/>"balance": 30,<br/>"accountName": "Sales US",<br/>"accountId": "13931cbf-ea06-4d6e-9538-a8457fa66011",<br/>"accountCategory": {<br/>"lastUpdated": "2022-01-02",<br/>"status": "Suggested",<br/>"levels": [<br/>{<br/>"levelName": "Income",<br/>"confidence": 0.95<br/>},<br/>{<br/>"levelName": "Revenue",<br/>"confidence": 0.9<br/>}<br/>]<br/>}<br/>},<br/>{<br/>"date": "2022-01-01",<br/>"balance": 70,<br/>"accountName": "Amazon",<br/>"accountId": "13931cbf-ea06-4d6e-9538-a8457fa66011",<br/>"accountCategory": {<br/>"lastUpdated": "2022-01-02",<br/>"status": "Suggested",<br/>"levels": [<br/>{<br/>"levelName": "Income",<br/>"confidence": 0.95<br/>},<br/>{<br/>"levelName": "Revenue",<br/>"confidence": 0.95<br/>},<br/>{<br/>"levelName": "Online",<br/>"confidence": 0.8<br/>}<br/>]<br/>}<br/>}<br/>]<br/>} |