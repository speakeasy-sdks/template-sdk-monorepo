/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as retries$ from "../lib/retries";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class LendingTsSuppliers extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Get create/update supplier model
     *
     * @remarks
     * The *Get create/update supplier model* endpoint returns the expected data for the request payload when creating and updating a [supplier](https://docs.codat.io/lending-api#/schemas/Supplier) for a given company and integration.
     *
     * [Suppliers](https://docs.codat.io/lending-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.
     *
     * **Integration-specific behaviour**
     *
     * See the *response examples* for integration-specific indicative models.
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support creating and updating a supplier.
     *
     */
    async getCreateUpdateModel(
        companyId: string,
        connectionId: string,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.GetCreateUpdateSuppliersModelResponse> {
        const input$: operations.GetCreateUpdateSuppliersModelRequest = {
            companyId: companyId,
            connectionId: connectionId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.GetCreateUpdateSuppliersModelRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            companyId: enc$.encodeSimple("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
            connectionId: enc$.encodeSimple("connectionId", payload$.connectionId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/companies/{companyId}/connections/{connectionId}/options/suppliers"
        )(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.authHeader === "function") {
            security$ = { authHeader: await this.options$.authHeader() };
        } else if (this.options$.authHeader) {
            security$ = { authHeader: this.options$.authHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "get-create-update-suppliers-model",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["401", "402", "403", "404", "429", "4XX", "500", "503", "5XX"],
        };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetCreateUpdateSuppliersModelResponse$.inboundSchema.parse({
                        ...responseFields$,
                        PushOption: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (
            this.matchResponse(response, [401, 402, 403, 404, 429, 500, 503], "application/json")
        ) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.ErrorMessage$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }

    /**
     * Create supplier
     *
     * @remarks
     * The *Create supplier* endpoint creates a new [supplier](https://docs.codat.io/lending-api#/schemas/Supplier) for a given company's connection.
     *
     * [Suppliers](https://docs.codat.io/lending-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.
     *
     * **Integration-specific behaviour**
     *
     * Required data may vary by integration. To see what data to post, first call [Get create/update supplier model](https://docs.codat.io/lending-api#/operations/get-create-update-suppliers-model).
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support creating an account.
     *
     */
    async create(
        input: operations.CreateSupplierRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.CreateSupplierResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.CreateSupplierRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.AccountingSupplier, { explode: true });

        const pathParams$ = {
            companyId: enc$.encodeSimple("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
            connectionId: enc$.encodeSimple("connectionId", payload$.connectionId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/companies/{companyId}/connections/{connectionId}/push/suppliers"
        )(pathParams$);

        const query$ = [
            enc$.encodeForm("allowSyncOnPushComplete", payload$.allowSyncOnPushComplete, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("timeoutInMinutes", payload$.timeoutInMinutes, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.authHeader === "function") {
            security$ = { authHeader: await this.options$.authHeader() };
        } else if (this.options$.authHeader) {
            security$ = { authHeader: this.options$.authHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "create-supplier",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "401", "402", "403", "404", "429", "4XX", "500", "503", "5XX"],
        };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request.clone();
                return this.do$(cloned, doOptions);
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.CreateSupplierResponse$.inboundSchema.parse({
                        ...responseFields$,
                        AccountingCreateSupplierResponse: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (
            this.matchResponse(
                response,
                [400, 401, 402, 403, 404, 429, 500, 503],
                "application/json"
            )
        ) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.ErrorMessage$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }
}
