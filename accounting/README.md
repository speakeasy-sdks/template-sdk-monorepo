# @speakeasy-sdks/accounting

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/template-sdk-monorepo.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/template-sdk-monorepo/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @speakeasy-sdks/accounting
```

### Yarn

```bash
yarn add @speakeasy-sdks/accounting
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

async function run() {
    const sdk = new Accounting({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const accountTransactionId = "<value>";
    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

    const result = await sdk.accountTransactions.get(accountTransactionId, companyId, connectionId);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [accountTransactions](docs/sdks/accounttransactions/README.md)

* [get](docs/sdks/accounttransactions/README.md#get) - Get account transaction
* [list](docs/sdks/accounttransactions/README.md#list) - List account transactions

### [bankAccounts](docs/sdks/bankaccounts/README.md)

* [create](docs/sdks/bankaccounts/README.md#create) - Create bank account
* [get](docs/sdks/bankaccounts/README.md#get) - Get bank account
* [getCreateUpdateModel](docs/sdks/bankaccounts/README.md#getcreateupdatemodel) - Get create/update bank account model
* [list](docs/sdks/bankaccounts/README.md#list) - List bank accounts
* [update](docs/sdks/bankaccounts/README.md#update) - Update bank account

### [bankAccountTransactions](docs/sdks/bankaccounttransactions/README.md)

* [create](docs/sdks/bankaccounttransactions/README.md#create) - Create bank account transactions
* [getCreateModel](docs/sdks/bankaccounttransactions/README.md#getcreatemodel) - Get create bank account transactions model
* [list](docs/sdks/bankaccounttransactions/README.md#list) - List bank account transactions

### [bills](docs/sdks/bills/README.md)

* [create](docs/sdks/bills/README.md#create) - Create bill
* [delete](docs/sdks/bills/README.md#delete) - Delete bill
* [downloadAttachment](docs/sdks/bills/README.md#downloadattachment) - Download bill attachment
* [get](docs/sdks/bills/README.md#get) - Get bill
* [getAttachment](docs/sdks/bills/README.md#getattachment) - Get bill attachment
* [getCreateUpdateModel](docs/sdks/bills/README.md#getcreateupdatemodel) - Get create/update bill model
* [list](docs/sdks/bills/README.md#list) - List bills
* [listAttachments](docs/sdks/bills/README.md#listattachments) - List bill attachments
* [update](docs/sdks/bills/README.md#update) - Update bill
* [uploadAttachment](docs/sdks/bills/README.md#uploadattachment) - Upload bill attachment

### [customers](docs/sdks/customers/README.md)

* [create](docs/sdks/customers/README.md#create) - Create customer
* [downloadAttachment](docs/sdks/customers/README.md#downloadattachment) - Download customer attachment
* [get](docs/sdks/customers/README.md#get) - Get customer
* [getAttachment](docs/sdks/customers/README.md#getattachment) - Get customer attachment
* [getCreateUpdateModel](docs/sdks/customers/README.md#getcreateupdatemodel) - Get create/update customer model
* [list](docs/sdks/customers/README.md#list) - List customers
* [listAttachments](docs/sdks/customers/README.md#listattachments) - List customer attachments
* [update](docs/sdks/customers/README.md#update) - Update customer

### [directCosts](docs/sdks/directcosts/README.md)

* [create](docs/sdks/directcosts/README.md#create) - Create direct cost
* [delete](docs/sdks/directcosts/README.md#delete) - Delete direct cost
* [downloadAttachment](docs/sdks/directcosts/README.md#downloadattachment) - Download direct cost attachment
* [get](docs/sdks/directcosts/README.md#get) - Get direct cost
* [getAttachment](docs/sdks/directcosts/README.md#getattachment) - Get direct cost attachment
* [getCreateModel](docs/sdks/directcosts/README.md#getcreatemodel) - Get create direct cost model
* [list](docs/sdks/directcosts/README.md#list) - List direct costs
* [listAttachments](docs/sdks/directcosts/README.md#listattachments) - List direct cost attachments
* [uploadAttachment](docs/sdks/directcosts/README.md#uploadattachment) - Upload direct cost attachment

### [directIncomes](docs/sdks/directincomes/README.md)

* [create](docs/sdks/directincomes/README.md#create) - Create direct income
* [downloadAttachment](docs/sdks/directincomes/README.md#downloadattachment) - Download direct income attachment
* [get](docs/sdks/directincomes/README.md#get) - Get direct income
* [getAttachment](docs/sdks/directincomes/README.md#getattachment) - Get direct income attachment
* [getCreateModel](docs/sdks/directincomes/README.md#getcreatemodel) - Get create direct income model
* [list](docs/sdks/directincomes/README.md#list) - List direct incomes
* [listAttachments](docs/sdks/directincomes/README.md#listattachments) - List direct income attachments
* [uploadAttachment](docs/sdks/directincomes/README.md#uploadattachment) - Create direct income attachment

### [invoices](docs/sdks/invoices/README.md)

* [create](docs/sdks/invoices/README.md#create) - Create invoice
* [delete](docs/sdks/invoices/README.md#delete) - Delete invoice
* [downloadAttachment](docs/sdks/invoices/README.md#downloadattachment) - Download invoice attachment
* [downloadPdf](docs/sdks/invoices/README.md#downloadpdf) - Get invoice as PDF
* [get](docs/sdks/invoices/README.md#get) - Get invoice
* [getAttachment](docs/sdks/invoices/README.md#getattachment) - Get invoice attachment
* [getCreateUpdateModel](docs/sdks/invoices/README.md#getcreateupdatemodel) - Get create/update invoice model
* [list](docs/sdks/invoices/README.md#list) - List invoices
* [listAttachments](docs/sdks/invoices/README.md#listattachments) - List invoice attachments
* [update](docs/sdks/invoices/README.md#update) - Update invoice
* [uploadAttachment](docs/sdks/invoices/README.md#uploadattachment) - Upload invoice attachment

### [itemReceipts](docs/sdks/itemreceipts/README.md)

* [get](docs/sdks/itemreceipts/README.md#get) - Get item receipt
* [list](docs/sdks/itemreceipts/README.md#list) - List item receipts

### [purchaseOrders](docs/sdks/purchaseorders/README.md)

* [create](docs/sdks/purchaseorders/README.md#create) - Create purchase order
* [downloadAttachment](docs/sdks/purchaseorders/README.md#downloadattachment) - Download purchase order attachment
* [downloadPurchaseOrderPdf](docs/sdks/purchaseorders/README.md#downloadpurchaseorderpdf) - Download purchase order as PDF
* [get](docs/sdks/purchaseorders/README.md#get) - Get purchase order
* [getAttachment](docs/sdks/purchaseorders/README.md#getattachment) - Get purchase order attachment
* [getCreateUpdateModel](docs/sdks/purchaseorders/README.md#getcreateupdatemodel) - Get create/update purchase order model
* [list](docs/sdks/purchaseorders/README.md#list) - List purchase orders
* [listAttachments](docs/sdks/purchaseorders/README.md#listattachments) - List purchase order attachments
* [update](docs/sdks/purchaseorders/README.md#update) - Update purchase order

### [suppliers](docs/sdks/suppliers/README.md)

* [create](docs/sdks/suppliers/README.md#create) - Create supplier
* [downloadAttachment](docs/sdks/suppliers/README.md#downloadattachment) - Download supplier attachment
* [get](docs/sdks/suppliers/README.md#get) - Get supplier
* [getAttachment](docs/sdks/suppliers/README.md#getattachment) - Get supplier attachment
* [getCreateUpdateModel](docs/sdks/suppliers/README.md#getcreateupdatemodel) - Get create/update supplier model
* [list](docs/sdks/suppliers/README.md#list) - List suppliers
* [listAttachments](docs/sdks/suppliers/README.md#listattachments) - List supplier attachments
* [update](docs/sdks/suppliers/README.md#update) - Update supplier

### [transfers](docs/sdks/transfers/README.md)

* [create](docs/sdks/transfers/README.md#create) - Create transfer
* [get](docs/sdks/transfers/README.md#get) - Get transfer
* [getCreateModel](docs/sdks/transfers/README.md#getcreatemodel) - Get create transfer model
* [list](docs/sdks/transfers/README.md#list) - List transfers
* [uploadAttachment](docs/sdks/transfers/README.md#uploadattachment) - Upload transfer attachment

### [billCreditNotes](docs/sdks/billcreditnotes/README.md)

* [create](docs/sdks/billcreditnotes/README.md#create) - Create bill credit note
* [get](docs/sdks/billcreditnotes/README.md#get) - Get bill credit note
* [getCreateUpdateModel](docs/sdks/billcreditnotes/README.md#getcreateupdatemodel) - Get create/update bill credit note model
* [list](docs/sdks/billcreditnotes/README.md#list) - List bill credit notes
* [update](docs/sdks/billcreditnotes/README.md#update) - Update bill credit note
* [uploadAttachment](docs/sdks/billcreditnotes/README.md#uploadattachment) - Upload bill credit note attachment

### [billPayments](docs/sdks/billpayments/README.md)

* [create](docs/sdks/billpayments/README.md#create) - Create bill payments
* [delete](docs/sdks/billpayments/README.md#delete) - Delete bill payment
* [get](docs/sdks/billpayments/README.md#get) - Get bill payment
* [getCreateModel](docs/sdks/billpayments/README.md#getcreatemodel) - Get create bill payment model
* [list](docs/sdks/billpayments/README.md#list) - List bill payments

### [accounts](docs/sdks/accounts/README.md)

* [create](docs/sdks/accounts/README.md#create) - Create account
* [get](docs/sdks/accounts/README.md#get) - Get account
* [getCreateModel](docs/sdks/accounts/README.md#getcreatemodel) - Get create account model
* [list](docs/sdks/accounts/README.md#list) - List accounts

### [creditNotes](docs/sdks/creditnotes/README.md)

* [create](docs/sdks/creditnotes/README.md#create) - Create credit note
* [get](docs/sdks/creditnotes/README.md#get) - Get credit note
* [getCreateUpdateModel](docs/sdks/creditnotes/README.md#getcreateupdatemodel) - Get create/update credit note model
* [list](docs/sdks/creditnotes/README.md#list) - List credit notes
* [update](docs/sdks/creditnotes/README.md#update) - Update credit note

### [items](docs/sdks/items/README.md)

* [create](docs/sdks/items/README.md#create) - Create item
* [get](docs/sdks/items/README.md#get) - Get item
* [getCreateModel](docs/sdks/items/README.md#getcreatemodel) - Get create item model
* [list](docs/sdks/items/README.md#list) - List items

### [journalEntries](docs/sdks/journalentries/README.md)

* [create](docs/sdks/journalentries/README.md#create) - Create journal entry
* [delete](docs/sdks/journalentries/README.md#delete) - Delete journal entry
* [get](docs/sdks/journalentries/README.md#get) - Get journal entry
* [getCreateModel](docs/sdks/journalentries/README.md#getcreatemodel) - Get create journal entry model
* [list](docs/sdks/journalentries/README.md#list) - List journal entries

### [journals](docs/sdks/journals/README.md)

* [create](docs/sdks/journals/README.md#create) - Create journal
* [get](docs/sdks/journals/README.md#get) - Get journal
* [getCreateModel](docs/sdks/journals/README.md#getcreatemodel) - Get create journal model
* [list](docs/sdks/journals/README.md#list) - List journals

### [payments](docs/sdks/payments/README.md)

* [create](docs/sdks/payments/README.md#create) - Create payment
* [get](docs/sdks/payments/README.md#get) - Get payment
* [getCreateModel](docs/sdks/payments/README.md#getcreatemodel) - Get create payment model
* [list](docs/sdks/payments/README.md#list) - List payments

### [reports](docs/sdks/reports/README.md)

* [getAgedCreditorsReport](docs/sdks/reports/README.md#getagedcreditorsreport) - Aged creditors report
* [getAgedDebtorsReport](docs/sdks/reports/README.md#getageddebtorsreport) - Aged debtors report
* [getBalanceSheet](docs/sdks/reports/README.md#getbalancesheet) - Get balance sheet
* [getCashFlowStatement](docs/sdks/reports/README.md#getcashflowstatement) - Get cash flow statement
* [getProfitAndLoss](docs/sdks/reports/README.md#getprofitandloss) - Get profit and loss
* [isAgedCreditorsReportAvailable](docs/sdks/reports/README.md#isagedcreditorsreportavailable) - Aged creditors report available
* [isAgedDebtorReportAvailable](docs/sdks/reports/README.md#isageddebtorreportavailable) - Aged debtors report available

### [companyInfo](docs/sdks/companyinfo/README.md)

* [get](docs/sdks/companyinfo/README.md#get) - Get company info
* [refresh](docs/sdks/companyinfo/README.md#refresh) - Refresh company info

### [paymentMethods](docs/sdks/paymentmethods/README.md)

* [get](docs/sdks/paymentmethods/README.md#get) - Get payment method
* [list](docs/sdks/paymentmethods/README.md#list) - List payment methods

### [salesOrders](docs/sdks/salesorders/README.md)

* [get](docs/sdks/salesorders/README.md#get) - Get sales order
* [list](docs/sdks/salesorders/README.md#list) - List sales orders

### [taxRates](docs/sdks/taxrates/README.md)

* [get](docs/sdks/taxrates/README.md#get) - Get tax rate
* [list](docs/sdks/taxrates/README.md#list) - List all tax rates

### [trackingCategories](docs/sdks/trackingcategories/README.md)

* [get](docs/sdks/trackingcategories/README.md#get) - Get tracking categories
* [list](docs/sdks/trackingcategories/README.md#list) - List tracking categories
<!-- End Available Resources and Operations [operations] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

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
import { Accounting } from "@speakeasy-sdks/accounting";
import { openAsBlob } from "node:fs";

async function run() {
    const sdk = new Accounting({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const billId = "EILBDVJVNUAGVKRQ";
    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";
    const attachmentUpload = {
        file: await openAsBlob("./sample-file"),
    };

    const result = await sdk.bills.uploadAttachment(
        billId,
        companyId,
        connectionId,
        attachmentUpload
    );

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
import { Accounting } from "@speakeasy-sdks/accounting";

async function run() {
    const sdk = new Accounting({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const accountTransactionId = "<value>";
    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

    const result = await sdk.accountTransactions.get(
        accountTransactionId,
        companyId,
        connectionId,
        {
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
        }
    );

    // Handle the result
    console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

async function run() {
    const sdk = new Accounting({
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

    const accountTransactionId = "<value>";
    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

    const result = await sdk.accountTransactions.get(accountTransactionId, companyId, connectionId);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Accounting } from "@speakeasy-sdks/accounting";
import * as errors from "@speakeasy-sdks/accounting/sdk/models/errors";

async function run() {
    const sdk = new Accounting({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const accountTransactionId = "<value>";
    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

    let result;
    try {
        result = await sdk.accountTransactions.get(accountTransactionId, companyId, connectionId);
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
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
import { Accounting } from "@speakeasy-sdks/accounting";

async function run() {
    const sdk = new Accounting({
        serverIdx: 0,
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const accountTransactionId = "<value>";
    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

    const result = await sdk.accountTransactions.get(accountTransactionId, companyId, connectionId);

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

async function run() {
    const sdk = new Accounting({
        serverURL: "https://api.codat.io",
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const accountTransactionId = "<value>";
    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

    const result = await sdk.accountTransactions.get(accountTransactionId, companyId, connectionId);

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
import { Accounting } from "@speakeasy-sdks/accounting";
import { HTTPClient } from "@speakeasy-sdks/accounting/lib/http";

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

const sdk = new Accounting({ httpClient });
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
import { Accounting } from "@speakeasy-sdks/accounting";

async function run() {
    const sdk = new Accounting({
        authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    });

    const accountTransactionId = "<value>";
    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

    const result = await sdk.accountTransactions.get(accountTransactionId, companyId, connectionId);

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
