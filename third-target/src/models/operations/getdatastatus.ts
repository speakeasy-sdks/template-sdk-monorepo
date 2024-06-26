/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetDataStatusRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
};

export type GetDataStatusResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    dataStatuses?: Record<string, components.DataStatus> | undefined;
};

/** @internal */
export namespace GetDataStatusRequest$ {
    export type Inbound = {
        companyId: string;
    };

    export const inboundSchema: z.ZodType<GetDataStatusRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDataStatusRequest> = z
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
export namespace GetDataStatusResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        "Data statuses"?: Record<string, components.DataStatus$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetDataStatusResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            "Data statuses": z.record(components.DataStatus$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v["Data statuses"] === undefined ? null : { dataStatuses: v["Data statuses"] }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        "Data statuses"?: Record<string, components.DataStatus$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDataStatusResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            dataStatuses: z.record(components.DataStatus$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.dataStatuses === undefined ? null : { "Data statuses": v.dataStatuses }),
            };
        });
}
