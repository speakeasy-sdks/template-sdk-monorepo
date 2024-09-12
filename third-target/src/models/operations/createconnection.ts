/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type CreateConnectionRequestBody = {
    /**
     * A unique 4-letter key to represent a platform in each integration. View [accounting](https://docs.codat.io/integrations/accounting/overview#platform-keys), [banking](https://docs.codat.io/integrations/banking/overview#platform-keys), and [commerce](https://docs.codat.io/integrations/commerce/overview#platform-keys) platform keys.
     */
    platformKey?: string | undefined;
};

export type CreateConnectionRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    requestBody?: CreateConnectionRequestBody | undefined;
};

export type CreateConnectionResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    connection?: components.Connection | undefined;
};

/** @internal */
export namespace CreateConnectionRequestBody$ {
    export type Inbound = {
        platformKey?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreateConnectionRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            platformKey: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.platformKey === undefined ? null : { platformKey: v.platformKey }),
            };
        });

    export type Outbound = {
        platformKey?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateConnectionRequestBody> = z
        .object({
            platformKey: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.platformKey === undefined ? null : { platformKey: v.platformKey }),
            };
        });
}

/** @internal */
export namespace CreateConnectionRequest$ {
    export type Inbound = {
        companyId: string;
        RequestBody?: CreateConnectionRequestBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateConnectionRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            RequestBody: z.lazy(() => CreateConnectionRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        companyId: string;
        RequestBody?: CreateConnectionRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateConnectionRequest> = z
        .object({
            companyId: z.string(),
            requestBody: z.lazy(() => CreateConnectionRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace CreateConnectionResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        Connection?: components.Connection$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateConnectionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Connection: components.Connection$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Connection === undefined ? null : { connection: v.Connection }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Connection?: components.Connection$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateConnectionResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            connection: components.Connection$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.connection === undefined ? null : { Connection: v.connection }),
            };
        });
}