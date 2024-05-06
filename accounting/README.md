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

const accounting = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const accountTransactionId = "<value>";
    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

    const result = await accounting.accountTransactions.get(
        accountTransactionId,
        companyId,
        connectionId
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
    const accountTransactionId = "<value>";
    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

    const result = await accounting.accountTransactions.get(
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
    const accountTransactionId = "<value>";
    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

    const result = await accounting.accountTransactions.get(
        accountTransactionId,
        companyId,
        connectionId
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
import * as errors from "@speakeasy-sdks/accounting/sdk/models/errors";

const accounting = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const accountTransactionId = "<value>";
    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

    let result;
    try {
        result = await accounting.accountTransactions.get(
            accountTransactionId,
            companyId,
            connectionId
        );
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

const accounting = new Accounting({
    serverIdx: 0,
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const accountTransactionId = "<value>";
    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

    const result = await accounting.accountTransactions.get(
        accountTransactionId,
        companyId,
        connectionId
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
    const accountTransactionId = "<value>";
    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

    const result = await accounting.accountTransactions.get(
        accountTransactionId,
        companyId,
        connectionId
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

const accounting = new Accounting({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const accountTransactionId = "<value>";
    const companyId = "8a210b68-6988-11ed-a1eb-0242ac120002";
    const connectionId = "2e9d2c44-f675-40ba-8049-353bfcb5e171";

    const result = await accounting.accountTransactions.get(
        accountTransactionId,
        companyId,
        connectionId
    );

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
