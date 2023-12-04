# openapi

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/template-sdk-monorepo.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/template-sdk-monorepo/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add lending
```

### Yarn

```bash
yarn add lending
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Lending } from "lending";

async function run() {
    const sdk = new Lending({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const res = await sdk.companies.create({
        description: "Requested early access to the new financing scheme.",
        name: "Bank of Dave",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [companies](docs/sdks/companies/README.md)

* [create](docs/sdks/companies/README.md#create) - Create company
* [delete](docs/sdks/companies/README.md#delete) - Delete a company
* [get](docs/sdks/companies/README.md#get) - Get company
* [list](docs/sdks/companies/README.md#list) - List companies
* [update](docs/sdks/companies/README.md#update) - Update company

### [connections](docs/sdks/connections/README.md)

* [create](docs/sdks/connections/README.md#create) - Create connection
* [delete](docs/sdks/connections/README.md#delete) - Delete connection
* [get](docs/sdks/connections/README.md#get) - Get connection
* [list](docs/sdks/connections/README.md#list) - List connections
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection


### [transactions.accountTransactions](docs/sdks/accounttransactions/README.md)

* [get](docs/sdks/accounttransactions/README.md#get) - Get account transaction
* [list](docs/sdks/accounttransactions/README.md#list) - List account transactions

### [transactions.directCosts](docs/sdks/lendingdirectcosts/README.md)

* [downloadAttachment](docs/sdks/lendingdirectcosts/README.md#downloadattachment) - Download direct cost attachment
* [get](docs/sdks/lendingdirectcosts/README.md#get) - Get direct cost
* [getAttachment](docs/sdks/lendingdirectcosts/README.md#getattachment) - Get direct cost attachment
* [list](docs/sdks/lendingdirectcosts/README.md#list) - List direct costs
* [listAttachments](docs/sdks/lendingdirectcosts/README.md#listattachments) - List direct cost attachments

### [transactions.transfers](docs/sdks/lendingtransfers/README.md)

* [get](docs/sdks/lendingtransfers/README.md#get) - Get transfer
* [list](docs/sdks/lendingtransfers/README.md#list) - List transfers

### [transactions.journalEntries](docs/sdks/journalentries/README.md)

* [get](docs/sdks/journalentries/README.md#get) - Get journal entry
* [list](docs/sdks/journalentries/README.md#list) - List journal entries

### [transactions.journals](docs/sdks/journals/README.md)

* [get](docs/sdks/journals/README.md#get) - Get journal
* [list](docs/sdks/journals/README.md#list) - List journals

### [accountingBankData](docs/sdks/lendingaccountingbankdata/README.md)

* [listTransactions](docs/sdks/lendingaccountingbankdata/README.md#listtransactions) - List bank account transactions

### [accountingBankData.accounts](docs/sdks/accounts/README.md)

* [get](docs/sdks/accounts/README.md#get) - Get bank account
* [list](docs/sdks/accounts/README.md#list) - List bank accounts


### [banking.accountBalances](docs/sdks/accountbalances/README.md)

* [list](docs/sdks/accountbalances/README.md#list) - List account balances

### [banking.accounts](docs/sdks/lendingaccounts/README.md)

* [get](docs/sdks/lendingaccounts/README.md#get) - Get account
* [list](docs/sdks/lendingaccounts/README.md#list) - List accounts

### [banking.transactionCategories](docs/sdks/transactioncategories/README.md)

* [get](docs/sdks/transactioncategories/README.md#get) - Get transaction category
* [list](docs/sdks/transactioncategories/README.md#list) - List transaction categories

### [banking.transactions](docs/sdks/lendingbankingtransactions/README.md)

* [get](docs/sdks/lendingbankingtransactions/README.md#get) - Get bank transaction
* [list](docs/sdks/lendingbankingtransactions/README.md#list) - List transactions

### [banking.categorizedStatement](docs/sdks/categorizedstatement/README.md)

* [get](docs/sdks/categorizedstatement/README.md#get) - Get categorized bank statement


### [accountsPayable.bills](docs/sdks/bills/README.md)

* [downloadAttachment](docs/sdks/bills/README.md#downloadattachment) - Download bill attachment
* [get](docs/sdks/bills/README.md#get) - Get bill
* [getAttachment](docs/sdks/bills/README.md#getattachment) - Get bill attachment
* [list](docs/sdks/bills/README.md#list) - List bills
* [listAttachments](docs/sdks/bills/README.md#listattachments) - List bill attachments

### [accountsPayable.suppliers](docs/sdks/suppliers/README.md)

* [downloadAttachment](docs/sdks/suppliers/README.md#downloadattachment) - Download supplier attachment
* [get](docs/sdks/suppliers/README.md#get) - Get supplier
* [getAttachment](docs/sdks/suppliers/README.md#getattachment) - Get supplier attachment
* [list](docs/sdks/suppliers/README.md#list) - List suppliers
* [listAttachments](docs/sdks/suppliers/README.md#listattachments) - List supplier attachments

### [accountsPayable.billCreditNotes](docs/sdks/billcreditnotes/README.md)

* [get](docs/sdks/billcreditnotes/README.md#get) - Get bill credit note
* [list](docs/sdks/billcreditnotes/README.md#list) - List bill credit notes

### [accountsPayable.billPayments](docs/sdks/billpayments/README.md)

* [get](docs/sdks/billpayments/README.md#get) - Get bill payment
* [list](docs/sdks/billpayments/README.md#list) - List bill payments


### [sales.customers](docs/sdks/lendingcustomers/README.md)

* [get](docs/sdks/lendingcustomers/README.md#get) - Get customer
* [list](docs/sdks/lendingcustomers/README.md#list) - List customers

### [sales.disputes](docs/sdks/disputes/README.md)

* [get](docs/sdks/disputes/README.md#get) - Get dispute
* [list](docs/sdks/disputes/README.md#list) - List disputes

### [sales.locations](docs/sdks/locations/README.md)

* [get](docs/sdks/locations/README.md#get) - Get location
* [list](docs/sdks/locations/README.md#list) - List locations

### [sales.orders](docs/sdks/orders/README.md)

* [get](docs/sdks/orders/README.md#get) - Get order
* [list](docs/sdks/orders/README.md#list) - List orders

### [sales.paymentMethods](docs/sdks/paymentmethods/README.md)

* [get](docs/sdks/paymentmethods/README.md#get) - Get payment method
* [list](docs/sdks/paymentmethods/README.md#list) - List payment methods

### [sales.payments](docs/sdks/lendingsalespayments/README.md)

* [get](docs/sdks/lendingsalespayments/README.md#get) - Get payment
* [list](docs/sdks/lendingsalespayments/README.md#list) - List payments

### [sales.productCategories](docs/sdks/productcategories/README.md)

* [get](docs/sdks/productcategories/README.md#get) - Get product category
* [list](docs/sdks/productcategories/README.md#list) - List product categories

### [sales.products](docs/sdks/products/README.md)

* [get](docs/sdks/products/README.md#get) - Get product
* [list](docs/sdks/products/README.md#list) - List products

### [sales.transactions](docs/sdks/lendingtransactions/README.md)

* [get](docs/sdks/lendingtransactions/README.md#get) - Get transaction
* [list](docs/sdks/lendingtransactions/README.md#list) - List transactions

### [sales.metrics](docs/sdks/metrics/README.md)

* [getCustomerRetention](docs/sdks/metrics/README.md#getcustomerretention) - Get customer retention metrics
* [getLifetimeValue](docs/sdks/metrics/README.md#getlifetimevalue) - Get lifetime value metrics
* [getRevenue](docs/sdks/metrics/README.md#getrevenue) - Get commerce revenue metrics

### [sales.reports](docs/sdks/lendingreports/README.md)

* [getOrders](docs/sdks/lendingreports/README.md#getorders) - Get orders report
* [getRefunds](docs/sdks/lendingreports/README.md#getrefunds) - Get refunds report

### [companyInfo](docs/sdks/companyinfo/README.md)

* [getAccountingProfile](docs/sdks/companyinfo/README.md#getaccountingprofile) - Get company accounting profile
* [getCommerceProfile](docs/sdks/companyinfo/README.md#getcommerceprofile) - Get company commerce profile


### [accountsReceivable.customers](docs/sdks/customers/README.md)

* [downloadAttachment](docs/sdks/customers/README.md#downloadattachment) - Download customer attachment
* [get](docs/sdks/customers/README.md#get) - Get customer
* [getAttachment](docs/sdks/customers/README.md#getattachment) - Get customer attachment
* [list](docs/sdks/customers/README.md#list) - List customers
* [listAttachments](docs/sdks/customers/README.md#listattachments) - List customer attachments

### [accountsReceivable.directIncomes](docs/sdks/directincomes/README.md)

* [downloadAttachment](docs/sdks/directincomes/README.md#downloadattachment) - Download direct income attachment
* [get](docs/sdks/directincomes/README.md#get) - Get direct income
* [getAttachment](docs/sdks/directincomes/README.md#getattachment) - Get direct income attachment
* [list](docs/sdks/directincomes/README.md#list) - List direct incomes
* [listAttachments](docs/sdks/directincomes/README.md#listattachments) - List direct income attachments

### [accountsReceivable.invoices](docs/sdks/invoices/README.md)

* [downloadAttachment](docs/sdks/invoices/README.md#downloadattachment) - Download invoice attachment
* [downloadPdf](docs/sdks/invoices/README.md#downloadpdf) - Get invoice as PDF
* [get](docs/sdks/invoices/README.md#get) - Get invoice
* [getAttachment](docs/sdks/invoices/README.md#getattachment) - Get invoice attachment
* [list](docs/sdks/invoices/README.md#list) - List invoices
* [listAttachments](docs/sdks/invoices/README.md#listattachments) - List invoice attachments
* [listReconciled](docs/sdks/invoices/README.md#listreconciled) - List reconciled invoices

### [accountsReceivable.creditNotes](docs/sdks/creditnotes/README.md)

* [get](docs/sdks/creditnotes/README.md#get) - Get credit note
* [list](docs/sdks/creditnotes/README.md#list) - List credit notes

### [accountsReceivable.payments](docs/sdks/payments/README.md)

* [get](docs/sdks/payments/README.md#get) - Get payment
* [list](docs/sdks/payments/README.md#list) - List payments

### [accountsReceivable.reports](docs/sdks/reports/README.md)

* [getAgedCreditors](docs/sdks/reports/README.md#getagedcreditors) - Aged creditors report
* [getAgedDebtors](docs/sdks/reports/README.md#getageddebtors) - Aged debtors report
* [isAgedCreditorsAvailable](docs/sdks/reports/README.md#isagedcreditorsavailable) - Aged creditors report available
* [isAgedDebtorsAvailable](docs/sdks/reports/README.md#isageddebtorsavailable) - Aged debtors report available

### [fileUpload](docs/sdks/fileupload/README.md)

* [download](docs/sdks/fileupload/README.md#download) - Download all files for a company
* [listUploaded](docs/sdks/fileupload/README.md#listuploaded) - List all files uploaded by a company
* [upload](docs/sdks/fileupload/README.md#upload) - Upload files for a company


### [loanWriteback.bankAccounts](docs/sdks/bankaccounts/README.md)

* [create](docs/sdks/bankaccounts/README.md#create) - Create bank account
* [getCreateUpdateModel](docs/sdks/bankaccounts/README.md#getcreateupdatemodel) - Get create/update bank account model

### [loanWriteback.bankTransactions](docs/sdks/banktransactions/README.md)

* [create](docs/sdks/banktransactions/README.md#create) - Create bank account transactions
* [getCreateModel](docs/sdks/banktransactions/README.md#getcreatemodel) - Get create bank account transactions model

### [loanWriteback.accounts](docs/sdks/lendingloanwritebackaccounts/README.md)

* [create](docs/sdks/lendingloanwritebackaccounts/README.md#create) - Create account
* [getCreateModel](docs/sdks/lendingloanwritebackaccounts/README.md#getcreatemodel) - Get create account model

### [loanWriteback.directCosts](docs/sdks/directcosts/README.md)

* [create](docs/sdks/directcosts/README.md#create) - Create direct cost
* [getCreateModel](docs/sdks/directcosts/README.md#getcreatemodel) - Get create direct cost model

### [loanWriteback.payments](docs/sdks/lendingpayments/README.md)

* [create](docs/sdks/lendingpayments/README.md#create) - Create payment
* [getCreateModel](docs/sdks/lendingpayments/README.md#getcreatemodel) - Get create payment model

### [loanWriteback.suppliers](docs/sdks/lendingsuppliers/README.md)

* [create](docs/sdks/lendingsuppliers/README.md#create) - Create supplier
* [getCreateUpdateModel](docs/sdks/lendingsuppliers/README.md#getcreateupdatemodel) - Get create/update supplier model

### [loanWriteback.transfers](docs/sdks/transfers/README.md)

* [create](docs/sdks/transfers/README.md#create) - Create transfer
* [getCreateModel](docs/sdks/transfers/README.md#getcreatemodel) - Get create transfer model

### [loanWriteback.createOperations](docs/sdks/createoperations/README.md)

* [get](docs/sdks/createoperations/README.md#get) - Get create operation
* [list](docs/sdks/createoperations/README.md#list) - List create operations


### [financialStatements.accounts](docs/sdks/lendingfinancialstatementsaccounts/README.md)

* [get](docs/sdks/lendingfinancialstatementsaccounts/README.md#get) - Get account
* [list](docs/sdks/lendingfinancialstatementsaccounts/README.md#list) - List accounts

### [financialStatements.balanceSheet](docs/sdks/balancesheet/README.md)

* [get](docs/sdks/balancesheet/README.md#get) - Get balance sheet
* [getCategorizedAccounts](docs/sdks/balancesheet/README.md#getcategorizedaccounts) - Get categorized balance sheet statement

### [financialStatements.cashFlow](docs/sdks/cashflow/README.md)

* [get](docs/sdks/cashflow/README.md#get) - Get cash flow statement

### [financialStatements.profitAndLoss](docs/sdks/profitandloss/README.md)

* [get](docs/sdks/profitandloss/README.md#get) - Get profit and loss
* [getCategorizedAccounts](docs/sdks/profitandloss/README.md#getcategorizedaccounts) - Get categorized profit and loss statement

### [manageData](docs/sdks/managedata/README.md)

* [getStatus](docs/sdks/managedata/README.md#getstatus) - Get data status

### [manageData.refresh](docs/sdks/refresh/README.md)

* [allDataTypes](docs/sdks/refresh/README.md#alldatatypes) - Refresh all data
* [dataType](docs/sdks/refresh/README.md#datatype) - Refresh data type

### [manageData.pullOperations](docs/sdks/pulloperations/README.md)

* [get](docs/sdks/pulloperations/README.md#get) - Get pull operation
* [list](docs/sdks/pulloperations/README.md#list) - List pull operations

### [liabilities](docs/sdks/liabilities/README.md)

* [generateLoanSummary](docs/sdks/liabilities/README.md#generateloansummary) - Generate loan summaries report
* [generateLoanTransactions](docs/sdks/liabilities/README.md#generateloantransactions) - Generate loan transactions report
* [getLoanSummary](docs/sdks/liabilities/README.md#getloansummary) - Get loan summaries
* [listLoanTransactions](docs/sdks/liabilities/README.md#listloantransactions) - List loan transactions

### [dataIntegrity](docs/sdks/dataintegrity/README.md)

* [details](docs/sdks/dataintegrity/README.md#details) - List data integrity details
* [status](docs/sdks/dataintegrity/README.md#status) - Get data integrity status
* [summaries](docs/sdks/dataintegrity/README.md#summaries) - Get data integrity summaries

### [excelReports](docs/sdks/excelreports/README.md)

* [download](docs/sdks/excelreports/README.md#download) - Download Excel report
* [generate](docs/sdks/excelreports/README.md#generate) - Generate Excel report
* [getStatus](docs/sdks/excelreports/README.md#getstatus) - Get Excel report status
<!-- End Available Resources and Operations [operations] -->



<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

Example

```typescript
import { Lending } from "lending";

async function run() {
    const sdk = new Lending({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    let res;
    try {
        res = await sdk.companies.create({
            description: "Requested early access to the new financing scheme.",
            name: "Bank of Dave",
        });
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.codat.io` | None |

#### Example

```typescript
import { Lending } from "lending";

async function run() {
    const sdk = new Lending({
        serverIdx: 0,
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const res = await sdk.companies.create({
        description: "Requested early access to the new financing scheme.",
        name: "Bank of Dave",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Lending } from "lending";

async function run() {
    const sdk = new Lending({
        serverURL: "https://api.codat.io",
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const res = await sdk.companies.create({
        description: "Requested early access to the new financing scheme.",
        name: "Bank of Dave",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { lending } from "Lending";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Lending({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Lending } from "lending";

async function run() {
    const sdk = new Lending({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const res = await sdk.companies.create(
        {
            description: "Requested early access to the new financing scheme.",
            name: "Bank of Dave",
        },
        {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        }
    );

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Lending } from "lending";

async function run() {
    const sdk = new Lending({
        retry_config: {
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

    const res = await sdk.companies.create({
        description: "Requested early access to the new financing scheme.",
        name: "Bank of Dave",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Retries [retries] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `authHeader` | apiKey       | API key      |

To authenticate with the API the `authHeader` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Lending } from "lending";

async function run() {
    const sdk = new Lending({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const res = await sdk.companies.create({
        description: "Requested early access to the new financing scheme.",
        name: "Bank of Dave",
    });

    if (res.statusCode == 200) {
        // handle response
    }
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
