# GetAccountingAgedCreditorsReportResponse


## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountingAgedCreditorReport`                                                                                                                                                                                                                                                                                                                                                                                        | [shared.AccountingAgedCreditorReport](../../../sdk/models/shared/accountingagedcreditorreport.md)                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                    | OK                                                                                                                                                                                                                                                                                                                                                                                                                    | {<br/>"generated": "2022-10-23T00:00:00Z",<br/>"reportDate": "2022-10-23T00:00:00Z",<br/>"data": [<br/>{<br/>"customerId": "f594cefb-7750-4c3a-bab2-b5322026dee9",<br/>"customerName": "John Doe",<br/>"agedCurrencyOutstanding": [<br/>{<br/>"currency": "GBP",<br/>"agedOutstandingAmounts": [<br/>{<br/>"fromDate": "2022-10-01T00:00:00Z",<br/>"toDate": "2022-10-31T00:00:00Z",<br/>"amount": 1547.5,<br/>"details": [<br/>{<br/>"name": "Bills",<br/>"amount": 1547.5<br/>}<br/>]<br/>}<br/>]<br/>}<br/>]<br/>}<br/>]<br/>} |
| `contentType`                                                                                                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                    | HTTP response content type for this operation                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `errorMessage`                                                                                                                                                                                                                                                                                                                                                                                                        | [shared.ErrorMessage](../../../sdk/models/shared/errormessage.md)                                                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                    | Your API request was not properly authorized.                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `statusCode`                                                                                                                                                                                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                    | HTTP response status code for this operation                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `rawResponse`                                                                                                                                                                                                                                                                                                                                                                                                         | [AxiosResponse](https://axios-http.com/docs/res_schema)                                                                                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                       |