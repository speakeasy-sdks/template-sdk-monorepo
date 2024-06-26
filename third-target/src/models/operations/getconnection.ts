/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetConnectionRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
};

export type GetConnectionResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    connection?: components.Connection | undefined;
};

/** @internal */
export namespace GetConnectionRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
    };

    export const inboundSchema: z.ZodType<GetConnectionRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetConnectionRequest> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
            };
        });
}

/** @internal */
export namespace GetConnectionResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        Connection?: components.Connection$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetConnectionResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetConnectionResponse> = z
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
