/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type RefreshAllDataTypesRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
};

export type RefreshAllDataTypesResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace RefreshAllDataTypesRequest$ {
    export type Inbound = {
        companyId: string;
    };

    export const inboundSchema: z.ZodType<RefreshAllDataTypesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
            };
        });

    export type Outbound = {
        companyId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RefreshAllDataTypesRequest> = z
        .object({
            companyId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
            };
        });
}

/** @internal */
export namespace RefreshAllDataTypesResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
    };

    export const inboundSchema: z.ZodType<RefreshAllDataTypesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RefreshAllDataTypesResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
            };
        });
}
