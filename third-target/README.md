# openapi

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { SDK } from "openapi";

async function run() {
    const sdk = new SDK({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const page = 1;
    const pageSize = 100;
    const query = "<value>";
    const orderBy = "-modifiedDate";

    const result = await sdk.companies.list(page, pageSize, query, orderBy);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [companies](docs/sdks/companies/README.md)

* [list](docs/sdks/companies/README.md#list) - List companies
* [create](docs/sdks/companies/README.md#create) - Create company
* [update](docs/sdks/companies/README.md#update) - Update company
* [delete](docs/sdks/companies/README.md#delete) - Delete a company
* [get](docs/sdks/companies/README.md#get) - Get company

### [connections](docs/sdks/connections/README.md)

* [list](docs/sdks/connections/README.md#list) - List connections
* [create](docs/sdks/connections/README.md#create) - Create connection
* [get](docs/sdks/connections/README.md#get) - Get connection
* [delete](docs/sdks/connections/README.md#delete) - Delete connection
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection

### [manageData](docs/sdks/managedata/README.md)

* [getStatus](docs/sdks/managedata/README.md#getstatus) - Get data status

### [manageData.refresh](docs/sdks/refresh/README.md)

* [allDataTypes](docs/sdks/refresh/README.md#alldatatypes) - Refresh all data
* [dataType](docs/sdks/refresh/README.md#datatype) - Refresh data type

### [manageData.pullOperations](docs/sdks/pulloperations/README.md)

* [list](docs/sdks/pulloperations/README.md#list) - List pull operations
* [get](docs/sdks/pulloperations/README.md#get) - Get pull operation

### [dataIntegrity](docs/sdks/dataintegrity/README.md)

* [status](docs/sdks/dataintegrity/README.md#status) - Get data integrity status
* [summaries](docs/sdks/dataintegrity/README.md#summaries) - Get data integrity summaries
* [details](docs/sdks/dataintegrity/README.md#details) - List data integrity details


### [financialStatements.profitAndLoss](docs/sdks/profitandloss/README.md)

* [getCategorizedAccounts](docs/sdks/profitandloss/README.md#getcategorizedaccounts) - Get categorized profit and loss statement
* [get](docs/sdks/profitandloss/README.md#get) - Get profit and loss

### [financialStatements.balanceSheet](docs/sdks/balancesheet/README.md)

* [getCategorizedAccounts](docs/sdks/balancesheet/README.md#getcategorizedaccounts) - Get categorized balance sheet statement
* [get](docs/sdks/balancesheet/README.md#get) - Get balance sheet

### [financialStatements.accounts](docs/sdks/accounts/README.md)

* [list](docs/sdks/accounts/README.md#list) - List accounts
* [get](docs/sdks/accounts/README.md#get) - Get account

### [financialStatements.cashFlow](docs/sdks/cashflow/README.md)

* [get](docs/sdks/cashflow/README.md#get) - Get cash flow statement


### [banking.categorizedStatement](docs/sdks/categorizedstatement/README.md)

* [get](docs/sdks/categorizedstatement/README.md#get) - Get categorized bank statement

### [banking.accountBalances](docs/sdks/accountbalances/README.md)

* [list](docs/sdks/accountbalances/README.md#list) - List account balances

### [banking.accounts](docs/sdks/sdkbankingaccounts/README.md)

* [list](docs/sdks/sdkbankingaccounts/README.md#list) - List accounts
* [get](docs/sdks/sdkbankingaccounts/README.md#get) - Get account

### [banking.transactions](docs/sdks/sdktransactions/README.md)

* [list](docs/sdks/sdktransactions/README.md#list) - List transactions
* [get](docs/sdks/sdktransactions/README.md#get) - Get bank transaction

### [banking.transactionCategories](docs/sdks/transactioncategories/README.md)

* [list](docs/sdks/transactioncategories/README.md#list) - List transaction categories
* [get](docs/sdks/transactioncategories/README.md#get) - Get transaction category


### [accountsReceivable.invoices](docs/sdks/invoices/README.md)

* [listReconciled](docs/sdks/invoices/README.md#listreconciled) - List reconciled invoices
* [list](docs/sdks/invoices/README.md#list) - List invoices
* [get](docs/sdks/invoices/README.md#get) - Get invoice
* [downloadPdf](docs/sdks/invoices/README.md#downloadpdf) - Get invoice as PDF
* [listAttachments](docs/sdks/invoices/README.md#listattachments) - List invoice attachments
* [getAttachment](docs/sdks/invoices/README.md#getattachment) - Get invoice attachment
* [downloadAttachment](docs/sdks/invoices/README.md#downloadattachment) - Download invoice attachment

### [accountsReceivable.creditNotes](docs/sdks/creditnotes/README.md)

* [list](docs/sdks/creditnotes/README.md#list) - List credit notes
* [get](docs/sdks/creditnotes/README.md#get) - Get credit note

### [accountsReceivable.customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - List customers
* [get](docs/sdks/customers/README.md#get) - Get customer
* [listAttachments](docs/sdks/customers/README.md#listattachments) - List customer attachments
* [getAttachment](docs/sdks/customers/README.md#getattachment) - Get customer attachment
* [downloadAttachment](docs/sdks/customers/README.md#downloadattachment) - Download customer attachment

### [accountsReceivable.directIncomes](docs/sdks/directincomes/README.md)

* [list](docs/sdks/directincomes/README.md#list) - List direct incomes
* [get](docs/sdks/directincomes/README.md#get) - Get direct income
* [getAttachment](docs/sdks/directincomes/README.md#getattachment) - Get direct income attachment
* [downloadAttachment](docs/sdks/directincomes/README.md#downloadattachment) - Download direct income attachment
* [listAttachments](docs/sdks/directincomes/README.md#listattachments) - List direct income attachments

### [accountsReceivable.payments](docs/sdks/payments/README.md)

* [list](docs/sdks/payments/README.md#list) - List payments
* [get](docs/sdks/payments/README.md#get) - Get payment

### [accountsReceivable.reports](docs/sdks/sdkreports/README.md)

* [isAgedDebtorsAvailable](docs/sdks/sdkreports/README.md#isageddebtorsavailable) - Aged debtors report available
* [getAgedDebtors](docs/sdks/sdkreports/README.md#getageddebtors) - Aged debtors report
* [isAgedCreditorsAvailable](docs/sdks/sdkreports/README.md#isagedcreditorsavailable) - Aged creditors report available
* [getAgedCreditors](docs/sdks/sdkreports/README.md#getagedcreditors) - Aged creditors report

### [liabilities](docs/sdks/liabilities/README.md)

* [generateLoanTransactions](docs/sdks/liabilities/README.md#generateloantransactions) - Generate loan transactions report
* [listLoanTransactions](docs/sdks/liabilities/README.md#listloantransactions) - List loan transactions
* [generateLoanSummary](docs/sdks/liabilities/README.md#generateloansummary) - Generate loan summaries report
* [getLoanSummary](docs/sdks/liabilities/README.md#getloansummary) - Get loan summaries


### [sales.metrics](docs/sdks/metrics/README.md)

* [getRevenue](docs/sdks/metrics/README.md#getrevenue) - Get commerce revenue metrics
* [getCustomerRetention](docs/sdks/metrics/README.md#getcustomerretention) - Get customer retention metrics
* [getLifetimeValue](docs/sdks/metrics/README.md#getlifetimevalue) - Get lifetime value metrics

### [sales.reports](docs/sdks/reports/README.md)

* [getOrders](docs/sdks/reports/README.md#getorders) - Get orders report
* [getRefunds](docs/sdks/reports/README.md#getrefunds) - Get refunds report

### [sales.customers](docs/sdks/sdkcustomers/README.md)

* [list](docs/sdks/sdkcustomers/README.md#list) - List customers
* [get](docs/sdks/sdkcustomers/README.md#get) - Get customer

### [sales.disputes](docs/sdks/disputes/README.md)

* [list](docs/sdks/disputes/README.md#list) - List disputes
* [get](docs/sdks/disputes/README.md#get) - Get dispute

### [sales.locations](docs/sdks/locations/README.md)

* [list](docs/sdks/locations/README.md#list) - List locations
* [get](docs/sdks/locations/README.md#get) - Get location

### [sales.orders](docs/sdks/orders/README.md)

* [list](docs/sdks/orders/README.md#list) - List orders
* [get](docs/sdks/orders/README.md#get) - Get order

### [sales.paymentMethods](docs/sdks/paymentmethods/README.md)

* [list](docs/sdks/paymentmethods/README.md#list) - List payment methods
* [get](docs/sdks/paymentmethods/README.md#get) - Get payment method

### [sales.payments](docs/sdks/sdkpayments/README.md)

* [list](docs/sdks/sdkpayments/README.md#list) - List payments
* [get](docs/sdks/sdkpayments/README.md#get) - Get payment

### [sales.productCategories](docs/sdks/productcategories/README.md)

* [list](docs/sdks/productcategories/README.md#list) - List product categories
* [get](docs/sdks/productcategories/README.md#get) - Get product category

### [sales.products](docs/sdks/products/README.md)

* [list](docs/sdks/products/README.md#list) - List products
* [get](docs/sdks/products/README.md#get) - Get product

### [sales.transactions](docs/sdks/sdksalestransactions/README.md)

* [list](docs/sdks/sdksalestransactions/README.md#list) - List transactions
* [get](docs/sdks/sdksalestransactions/README.md#get) - Get transaction

### [excelReports](docs/sdks/excelreports/README.md)

* [generate](docs/sdks/excelreports/README.md#generate) - Generate Excel report
* [getStatus](docs/sdks/excelreports/README.md#getstatus) - Get Excel report status
* [download](docs/sdks/excelreports/README.md#download) - Download Excel report


### [transactions.accountTransactions](docs/sdks/accounttransactions/README.md)

* [list](docs/sdks/accounttransactions/README.md#list) - List account transactions
* [get](docs/sdks/accounttransactions/README.md#get) - Get account transaction

### [transactions.directCosts](docs/sdks/directcosts/README.md)

* [list](docs/sdks/directcosts/README.md#list) - List direct costs
* [get](docs/sdks/directcosts/README.md#get) - Get direct cost
* [getAttachment](docs/sdks/directcosts/README.md#getattachment) - Get direct cost attachment
* [downloadAttachment](docs/sdks/directcosts/README.md#downloadattachment) - Download direct cost attachment
* [listAttachments](docs/sdks/directcosts/README.md#listattachments) - List direct cost attachments

### [transactions.journalEntries](docs/sdks/journalentries/README.md)

* [list](docs/sdks/journalentries/README.md#list) - List journal entries
* [get](docs/sdks/journalentries/README.md#get) - Get journal entry

### [transactions.journals](docs/sdks/journals/README.md)

* [list](docs/sdks/journals/README.md#list) - List journals
* [get](docs/sdks/journals/README.md#get) - Get journal

### [transactions.transfers](docs/sdks/transfers/README.md)

* [list](docs/sdks/transfers/README.md#list) - List transfers
* [get](docs/sdks/transfers/README.md#get) - Get transfer


### [accountsPayable.billCreditNotes](docs/sdks/billcreditnotes/README.md)

* [list](docs/sdks/billcreditnotes/README.md#list) - List bill credit notes
* [get](docs/sdks/billcreditnotes/README.md#get) - Get bill credit note

### [accountsPayable.billPayments](docs/sdks/billpayments/README.md)

* [list](docs/sdks/billpayments/README.md#list) - List bill payments
* [get](docs/sdks/billpayments/README.md#get) - Get bill payment

### [accountsPayable.bills](docs/sdks/bills/README.md)

* [list](docs/sdks/bills/README.md#list) - List bills
* [get](docs/sdks/bills/README.md#get) - Get bill
* [listAttachments](docs/sdks/bills/README.md#listattachments) - List bill attachments
* [getAttachment](docs/sdks/bills/README.md#getattachment) - Get bill attachment
* [downloadAttachment](docs/sdks/bills/README.md#downloadattachment) - Download bill attachment

### [accountsPayable.suppliers](docs/sdks/suppliers/README.md)

* [list](docs/sdks/suppliers/README.md#list) - List suppliers
* [get](docs/sdks/suppliers/README.md#get) - Get supplier
* [listAttachments](docs/sdks/suppliers/README.md#listattachments) - List supplier attachments
* [getAttachment](docs/sdks/suppliers/README.md#getattachment) - Get supplier attachment
* [downloadAttachment](docs/sdks/suppliers/README.md#downloadattachment) - Download supplier attachment

### [companyInfo](docs/sdks/companyinfo/README.md)

* [getAccountingProfile](docs/sdks/companyinfo/README.md#getaccountingprofile) - Get company accounting profile
* [getCommerceProfile](docs/sdks/companyinfo/README.md#getcommerceprofile) - Get company commerce profile

### [accountingBankData](docs/sdks/accountingbankdata/README.md)

* [listTransactions](docs/sdks/accountingbankdata/README.md#listtransactions) - List bank account transactions

### [accountingBankData.accounts](docs/sdks/sdkaccounts/README.md)

* [list](docs/sdks/sdkaccounts/README.md#list) - List bank accounts
* [get](docs/sdks/sdkaccounts/README.md#get) - Get bank account

### [fileUpload](docs/sdks/fileupload/README.md)

* [listUploaded](docs/sdks/fileupload/README.md#listuploaded) - List all files uploaded by a company
* [download](docs/sdks/fileupload/README.md#download) - Download all files for a company
* [upload](docs/sdks/fileupload/README.md#upload) - Upload files for a company


### [loanWriteback.bankAccounts](docs/sdks/bankaccounts/README.md)

* [getCreateUpdateModel](docs/sdks/bankaccounts/README.md#getcreateupdatemodel) - Get create/update bank account model
* [create](docs/sdks/bankaccounts/README.md#create) - Create bank account

### [loanWriteback.accounts](docs/sdks/sdkloanwritebackaccounts/README.md)

* [getCreateModel](docs/sdks/sdkloanwritebackaccounts/README.md#getcreatemodel) - Get create account model
* [create](docs/sdks/sdkloanwritebackaccounts/README.md#create) - Create account

### [loanWriteback.suppliers](docs/sdks/sdksuppliers/README.md)

* [getCreateUpdateModel](docs/sdks/sdksuppliers/README.md#getcreateupdatemodel) - Get create/update supplier model
* [create](docs/sdks/sdksuppliers/README.md#create) - Create supplier

### [loanWriteback.transfers](docs/sdks/sdktransfers/README.md)

* [getCreateModel](docs/sdks/sdktransfers/README.md#getcreatemodel) - Get create transfer model
* [create](docs/sdks/sdktransfers/README.md#create) - Create transfer

### [loanWriteback.bankTransactions](docs/sdks/banktransactions/README.md)

* [getCreateModel](docs/sdks/banktransactions/README.md#getcreatemodel) - Get create bank account transactions model
* [create](docs/sdks/banktransactions/README.md#create) - Create bank account transactions

### [loanWriteback.directCosts](docs/sdks/sdkdirectcosts/README.md)

* [getCreateModel](docs/sdks/sdkdirectcosts/README.md#getcreatemodel) - Get create direct cost model
* [create](docs/sdks/sdkdirectcosts/README.md#create) - Create direct cost

### [loanWriteback.payments](docs/sdks/sdkloanwritebackpayments/README.md)

* [getCreateModel](docs/sdks/sdkloanwritebackpayments/README.md#getcreatemodel) - Get create payment model
* [create](docs/sdks/sdkloanwritebackpayments/README.md#create) - Create payment

### [loanWriteback.createOperations](docs/sdks/createoperations/README.md)

* [get](docs/sdks/createoperations/README.md#get) - Get create operation
* [list](docs/sdks/createoperations/README.md#list) - List create operations

### [bankStatements](docs/sdks/bankstatements/README.md)

* [getUploadConfiguration](docs/sdks/bankstatements/README.md#getuploadconfiguration) - Get upload configuration
* [setUploadConfiguration](docs/sdks/bankstatements/README.md#setuploadconfiguration) - Set upload configuration
* [startUploadSession](docs/sdks/bankstatements/README.md#startuploadsession) - Start upload session
* [endUploadSession](docs/sdks/bankstatements/README.md#enduploadsession) - End upload session
<!-- End Available Resources and Operations [operations] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { openAsBlob } from "node:fs";
import { SDK } from "openapi";

async function run() {
    const sdk = new SDK({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
    const fileUpload = {
        file: await openAsBlob("./sample-file"),
    };

    const result = await sdk.fileUpload.upload(companyId, connectionId, fileUpload);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SDK } from "openapi";

async function run() {
    const sdk = new SDK({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const page = 1;
    const pageSize = 100;
    const query = "<value>";
    const orderBy = "-modifiedDate";

    const result = await sdk.companies.list(page, pageSize, query, orderBy, {
        retries: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
    });

    // Handle the result
    console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { SDK } from "openapi";

async function run() {
    const sdk = new SDK({
        retryConfig: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const page = 1;
    const pageSize = 100;
    const query = "<value>";
    const orderBy = "-modifiedDate";

    const result = await sdk.companies.list(page, pageSize, query, orderBy);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { SDK } from "openapi";
import * as errors from "openapi/models/errors";

async function run() {
    const sdk = new SDK({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const page = 1;
    const pageSize = 100;
    const query = "<value>";
    const orderBy = "-modifiedDate";

    let result;
    try {
        result = await sdk.companies.list(page, pageSize, query, orderBy);
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.ErrorMessage: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.codat.io` | None |

```typescript
import { SDK } from "openapi";

async function run() {
    const sdk = new SDK({
        serverIdx: 0,
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const page = 1;
    const pageSize = 100;
    const query = "<value>";
    const orderBy = "-modifiedDate";

    const result = await sdk.companies.list(page, pageSize, query, orderBy);

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { SDK } from "openapi";

async function run() {
    const sdk = new SDK({
        serverURL: "https://api.codat.io",
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const page = 1;
    const pageSize = 100;
    const query = "<value>";
    const orderBy = "-modifiedDate";

    const result = await sdk.companies.list(page, pageSize, query, orderBy);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { SDK } from "openapi";
import { HTTPClient } from "openapi/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `authHeader` | apiKey       | API key      |

To authenticate with the API the `authHeader` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { SDK } from "openapi";

async function run() {
    const sdk = new SDK({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const page = 1;
    const pageSize = 100;
    const query = "<value>";
    const orderBy = "-modifiedDate";

    const result = await sdk.companies.list(page, pageSize, query, orderBy);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
