# @speakeasy-sdks/accounting

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/template-sdk-monorepo.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/template-sdk-monorepo/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start Summary [summary] -->
## Summary

Accounting API: > ### New to Codat?
>
> Our Accounting API reference is relevant only to our existing clients.
> Please reach out to your Codat contact so that we can find the right product for you.

A flexible API for pulling accounting data, normalized and aggregated from 20 accounting integrations.

Standardize how you connect to your customers’ accounting software. View, create, update, and delete data in the same way for all the leading accounting platforms.

<!-- Start Codat Tags Table -->
## Endpoints

| Endpoints | Description |
| :- |:- |
| Accounts | Access standardized Accounts from linked accounting platforms. |
| Account transactions | Access standardized Account transactions from linked accounting platforms. |
| Bank accounts | Access standardized Bank accounts from linked accounting platforms. |
| Bank account transactions | Access standardized Bank transactions for bank accounts from linked accounting platforms. |
| Bills | Access standardized Bills from linked accounting platforms. |
| Bill credit notes | Access standardized Bill credit notes from linked accounting platforms. |
| Bill payments | Access standardized Bill payments from linked accounting platforms. |
| Credit notes | Access standardized Credit notes from linked accounting platforms. |
| Customers | Access standardized Customers from linked accounting platforms. |
| Direct costs | Access standardized Direct costs from linked accounting platforms. |
| Direct incomes | Access standardized Direct incomes from linked accounting platforms. |
| Company info | Access standardized Company info from linked accounting platforms. |
| Invoices | Access standardized Invoices from linked accounting platforms. |
| Item receipts | Access standardized Item receipts from linked accounting platforms. |
| Items | Access standardized Items from linked accounting platforms. |
| Journals | Access standardized Journals from linked accounting platforms. |
| Journal entries | Access standardized Journal entries from linked accounting platforms. |
| Payments | Access standardized Payments from linked accounting platforms. |
| Payment methods | Access standardized Payment methods from linked accounting platforms. |
| Purchase orders | Access standardized Purchase orders from linked accounting platforms. |
| Sales orders | Access standardized Sales orders from linked accounting platforms. |
| Suppliers | Access standardized Suppliers from linked accounting platforms. |
| Tax rates | Access standardized Tax rates from linked accounting platforms. |
| Tracking categories | Access standardized Tracking categories from linked accounting platforms. |
| Transfers | Access standardized Transfers from linked accounting platforms. |
| Reports | Access standardized Reports from linked accounting platforms. |
<!-- End Codat Tags Table -->

[Read more...](https://docs.codat.io/accounting-api/overview)

[See our OpenAPI spec](https://github.com/codatio/oas)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @speakeasy-sdks/accounting
```

### PNPM

```bash
pnpm add @speakeasy-sdks/accounting
```

### Bun

```bash
bun add @speakeasy-sdks/accounting
```

### Yarn

```bash
yarn add @speakeasy-sdks/accounting zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

const accounting = new Accounting({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await accounting.accountTransactions.get(
    "<value>",
    "8a210b68-6988-11ed-a1eb-0242ac120002",
    "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  );

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

### [accounts](docs/sdks/accounts/README.md)

* [create](docs/sdks/accounts/README.md#create) - Create account
* [get](docs/sdks/accounts/README.md#get) - Get account
* [getCreateModel](docs/sdks/accounts/README.md#getcreatemodel) - Get create account model
* [list](docs/sdks/accounts/README.md#list) - List accounts
<!-- End Available Resources and Operations [operations] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [accountTransactionsGet](docs/sdks/accounttransactions/README.md#get)
- [accountTransactionsList](docs/sdks/accounttransactions/README.md#list)
- [accountsCreate](docs/sdks/accounts/README.md#create)
- [accountsGetCreateModel](docs/sdks/accounts/README.md#getcreatemodel)
- [accountsGet](docs/sdks/accounts/README.md#get)
- [accountsList](docs/sdks/accounts/README.md#list)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

const accounting = new Accounting({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await accounting.accountTransactions.get(
    "<value>",
    "8a210b68-6988-11ed-a1eb-0242ac120002",
    "2e9d2c44-f675-40ba-8049-353bfcb5e171",
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
    },
  );

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

const accounting = new Accounting({
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

async function run() {
  const result = await accounting.accountTransactions.get(
    "<value>",
    "8a210b68-6988-11ed-a1eb-0242ac120002",
    "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  );

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
import { SDKValidationError } from "@speakeasy-sdks/accounting/sdk/models/errors";

const accounting = new Accounting({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  let result;
  try {
    result = await accounting.accountTransactions.get(
      "<value>",
      "8a210b68-6988-11ed-a1eb-0242ac120002",
      "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    );

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
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

const accounting = new Accounting({
  serverIdx: 0,
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await accounting.accountTransactions.get(
    "<value>",
    "8a210b68-6988-11ed-a1eb-0242ac120002",
    "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  );

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

const accounting = new Accounting({
  serverURL: "https://api.codat.io",
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await accounting.accountTransactions.get(
    "<value>",
    "8a210b68-6988-11ed-a1eb-0242ac120002",
    "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  );

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
    signal: request.signal || AbortSignal.timeout(5000)
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

const accounting = new Accounting({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await accounting.accountTransactions.get(
    "<value>",
    "8a210b68-6988-11ed-a1eb-0242ac120002",
    "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  );

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Accounting } from "@speakeasy-sdks/accounting";

const sdk = new Accounting({ debugLogger: console });
```
<!-- End Debugging [debug] -->

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
