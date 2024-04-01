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

export enum DownloadAttachmentAcceptEnum {
    applicationJson = "application/json",
    applicationOctetStream = "application/octet-stream",
}

export class DirectIncomes extends ClientSDK {
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
     * List direct incomes
     *
     * @remarks
     * The *List direct incomes* endpoint returns a list of [direct incomes](https://docs.codat.io/lending-api#/schemas/DirectIncome) for a given company's connection.
     *
     * [Direct incomes](https://docs.codat.io/lending-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.
     *
     * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
     *
     */
    async list(
        input: operations.ListAccountingDirectIncomesRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.ListAccountingDirectIncomesResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.ListAccountingDirectIncomesRequest$.outboundSchema.parse(value$),
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
            "/companies/{companyId}/connections/{connectionId}/data/directIncomes"
        )(pathParams$);

        const query$ = [
            enc$.encodeForm("orderBy", payload$.orderBy, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("page", payload$.page, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("pageSize", payload$.pageSize, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("query", payload$.query, { explode: true, charEncoding: "percent" }),
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
            operationID: "list-accounting-direct-incomes",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: [
                "400",
                "401",
                "402",
                "403",
                "404",
                "409",
                "429",
                "4XX",
                "500",
                "503",
                "5XX",
            ],
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
                    return operations.ListAccountingDirectIncomesResponse$.inboundSchema.parse({
                        ...responseFields$,
                        AccountingDirectIncomes: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (
            this.matchResponse(
                response,
                [400, 401, 402, 403, 404, 409, 429, 500, 503],
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

    /**
     * Get direct income
     *
     * @remarks
     * The *Get direct income* endpoint returns a single direct income for a given directIncomeId.
     *
     * [Direct incomes](https://docs.codat.io/lending-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support getting a specific direct income.
     *
     * Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
     *
     */
    async get(
        companyId: string,
        connectionId: string,
        directIncomeId: string,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.GetAccountingDirectIncomeResponse> {
        const input$: operations.GetAccountingDirectIncomeRequest = {
            companyId: companyId,
            connectionId: connectionId,
            directIncomeId: directIncomeId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetAccountingDirectIncomeRequest$.outboundSchema.parse(value$),
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
            directIncomeId: enc$.encodeSimple("directIncomeId", payload$.directIncomeId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/companies/{companyId}/connections/{connectionId}/data/directIncomes/{directIncomeId}"
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
            operationID: "get-accounting-direct-income",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["401", "402", "403", "404", "409", "429", "4XX", "500", "503", "5XX"],
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
                    return operations.GetAccountingDirectIncomeResponse$.inboundSchema.parse({
                        ...responseFields$,
                        AccountingDirectIncome: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (
            this.matchResponse(
                response,
                [401, 402, 403, 404, 409, 429, 500, 503],
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

    /**
     * Get direct income attachment
     *
     * @remarks
     * The *Get direct income attachment* endpoint returns a specific attachment for a given `directIncomeId` and `attachmentId`.
     *
     * [Direct incomes](https://docs.codat.io/lending-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support getting a direct income attachment.
     *
     */
    async getAttachment(
        input: operations.GetAccountingDirectIncomeAttachmentRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.GetAccountingDirectIncomeAttachmentResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) =>
                operations.GetAccountingDirectIncomeAttachmentRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            attachmentId: enc$.encodeSimple("attachmentId", payload$.attachmentId, {
                explode: false,
                charEncoding: "percent",
            }),
            companyId: enc$.encodeSimple("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
            connectionId: enc$.encodeSimple("connectionId", payload$.connectionId, {
                explode: false,
                charEncoding: "percent",
            }),
            directIncomeId: enc$.encodeSimple("directIncomeId", payload$.directIncomeId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/companies/{companyId}/connections/{connectionId}/data/directIncomes/{directIncomeId}/attachments/{attachmentId}"
        )(pathParams$);

        const query$ = [
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
            operationID: "get-accounting-direct-income-attachment",
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
                    return operations.GetAccountingDirectIncomeAttachmentResponse$.inboundSchema.parse(
                        {
                            ...responseFields$,
                            AccountingAttachment: val$,
                        }
                    );
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
     * Download direct income attachment
     *
     * @remarks
     * The *Download direct income attachment* endpoint downloads a specific attachment for a given `directIncomeId` and `attachmentId`.
     *
     * [Direct incomes](https://docs.codat.io/lending-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support downloading a direct income attachment.
     *
     */
    async downloadAttachment(
        companyId: string,
        connectionId: string,
        directIncomeId: string,
        attachmentId: string,
        options?: RequestOptions & {
            acceptHeaderOverride?: DownloadAttachmentAcceptEnum;
            retries?: retries$.RetryConfig;
        }
    ): Promise<operations.DownloadAccountingDirectIncomeAttachmentResponse> {
        const input$: operations.DownloadAccountingDirectIncomeAttachmentRequest = {
            companyId: companyId,
            connectionId: connectionId,
            directIncomeId: directIncomeId,
            attachmentId: attachmentId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);

        const accept =
            options?.acceptHeaderOverride || "application/json;q=1, application/octet-stream;q=0";
        headers$.set("Accept", accept);

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.DownloadAccountingDirectIncomeAttachmentRequest$.outboundSchema.parse(
                    value$
                ),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            attachmentId: enc$.encodeSimple("attachmentId", payload$.attachmentId, {
                explode: false,
                charEncoding: "percent",
            }),
            companyId: enc$.encodeSimple("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
            connectionId: enc$.encodeSimple("connectionId", payload$.connectionId, {
                explode: false,
                charEncoding: "percent",
            }),
            directIncomeId: enc$.encodeSimple("directIncomeId", payload$.directIncomeId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/companies/{companyId}/connections/{connectionId}/data/directIncomes/{directIncomeId}/attachments/{attachmentId}/download"
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
            operationID: "download-accounting-direct-income-attachment",
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

        if (this.matchResponse(response, 200, "application/octet-stream")) {
            const responseBody = response.body ?? undefined;
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.DownloadAccountingDirectIncomeAttachmentResponse$.inboundSchema.parse(
                        {
                            ...responseFields$,
                            Data: val$,
                        }
                    );
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
     * List direct income attachments
     *
     * @remarks
     * The *List direct income attachments* endpoint returns a list of attachments available to download for given `directIncomeId`.
     *
     * [Direct incomes](https://docs.codat.io/lending-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.
     *
     * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support listing direct income attachments.
     *
     */
    async listAttachments(
        companyId: string,
        connectionId: string,
        directIncomeId: string,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<operations.ListAccountingDirectIncomeAttachmentsResponse> {
        const input$: operations.ListAccountingDirectIncomeAttachmentsRequest = {
            companyId: companyId,
            connectionId: connectionId,
            directIncomeId: directIncomeId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.ListAccountingDirectIncomeAttachmentsRequest$.outboundSchema.parse(
                    value$
                ),
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
            directIncomeId: enc$.encodeSimple("directIncomeId", payload$.directIncomeId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/companies/{companyId}/connections/{connectionId}/data/directIncomes/{directIncomeId}/attachments"
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
            operationID: "list-accounting-direct-income-attachments",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["401", "402", "403", "404", "409", "429", "4XX", "500", "503", "5XX"],
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
                    return operations.ListAccountingDirectIncomeAttachmentsResponse$.inboundSchema.parse(
                        {
                            ...responseFields$,
                            Attachments: val$,
                        }
                    );
                },
                "Response validation failed"
            );
            return result;
        } else if (
            this.matchResponse(
                response,
                [401, 402, 403, 404, 409, 429, 500, 503],
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
