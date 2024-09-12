/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AccountingCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Get account
 *
 * @remarks
 * The *Get account* endpoint returns a single account for a given accountId.
 *
 * [Accounts](https://docs.codat.io/accounting-api#/schemas/Account) are the categories a business uses to record accounting transactions.
 *
 * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts) for integrations that support getting a specific account.
 *
 * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
 */
export async function accountsGet(
  client$: AccountingCore,
  accountId: string,
  companyId: string,
  options?: RequestOptions,
): Promise<
  Result<
    operations.GetAccountResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$: operations.GetAccountRequest = {
    accountId: accountId,
    companyId: companyId,
  };

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) => operations.GetAccountRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const pathParams$ = {
    accountId: encodeSimple$("accountId", payload$.accountId, {
      explode: false,
      charEncoding: "percent",
    }),
    companyId: encodeSimple$("companyId", payload$.companyId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc("/companies/{companyId}/data/accounts/{accountId}")(
    pathParams$,
  );

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const authHeader$ = await extractSecurity(client$.options$.authHeader);
  const security$ = authHeader$ == null ? {} : { authHeader: authHeader$ };
  const context = {
    operationID: "get-account",
    oAuth2Scopes: [],
    securitySource: client$.options$.authHeader,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "GET",
    path: path$,
    headers: headers$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: [],
    retryConfig: options?.retries
      || client$.options$.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 60000,
          exponent: 1.5,
          maxElapsedTime: 3600000,
        },
        retryConnectionErrors: true,
      },
    retryCodes: options?.retryCodes || ["408", "429", "5XX"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields$ = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result$] = await m$.match<
    operations.GetAccountResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, operations.GetAccountResponse$inboundSchema, {
      key: "Account",
    }),
    m$.json(
      [401, 402, 403, 404, 409, 429, 500, 503],
      operations.GetAccountResponse$inboundSchema,
      { key: "ErrorMessage" },
    ),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
