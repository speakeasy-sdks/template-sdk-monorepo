/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type StartBankStatementUploadSessionRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    startUploadSessionRequest?: components.StartUploadSessionRequest | undefined;
};

export type StartBankStatementUploadSessionResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Success
     */
    pullOperation?: components.PullOperation | undefined;
};

/** @internal */
export namespace StartBankStatementUploadSessionRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        StartUploadSessionRequest?: components.StartUploadSessionRequest$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        StartBankStatementUploadSessionRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            StartUploadSessionRequest:
                components.StartUploadSessionRequest$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                ...(v.StartUploadSessionRequest === undefined
                    ? null
                    : { startUploadSessionRequest: v.StartUploadSessionRequest }),
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        StartUploadSessionRequest?: components.StartUploadSessionRequest$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        StartBankStatementUploadSessionRequest
    > = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            startUploadSessionRequest:
                components.StartUploadSessionRequest$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                ...(v.startUploadSessionRequest === undefined
                    ? null
                    : { StartUploadSessionRequest: v.startUploadSessionRequest }),
            };
        });
}

/** @internal */
export namespace StartBankStatementUploadSessionResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        PullOperation?: components.PullOperation$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        StartBankStatementUploadSessionResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            PullOperation: components.PullOperation$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.PullOperation === undefined ? null : { pullOperation: v.PullOperation }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        PullOperation?: components.PullOperation$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        StartBankStatementUploadSessionResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            pullOperation: components.PullOperation$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.pullOperation === undefined ? null : { PullOperation: v.pullOperation }),
            };
        });
}
