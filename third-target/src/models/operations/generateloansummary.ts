/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * Data source type.
 */
export enum GenerateLoanSummaryQueryParamSourceType {
    Banking = "banking",
    Commerce = "commerce",
    Accounting = "accounting",
}

export type GenerateLoanSummaryRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Data source type.
     */
    sourceType: GenerateLoanSummaryQueryParamSourceType;
};

export type GenerateLoanSummaryResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export const GenerateLoanSummaryQueryParamSourceType$ = z.nativeEnum(
    GenerateLoanSummaryQueryParamSourceType
);

/** @internal */
export namespace GenerateLoanSummaryRequest$ {
    export type Inbound = {
        companyId: string;
        sourceType: GenerateLoanSummaryQueryParamSourceType;
    };

    export const inboundSchema: z.ZodType<GenerateLoanSummaryRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            sourceType: GenerateLoanSummaryQueryParamSourceType$,
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                sourceType: v.sourceType,
            };
        });

    export type Outbound = {
        companyId: string;
        sourceType: GenerateLoanSummaryQueryParamSourceType;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GenerateLoanSummaryRequest> = z
        .object({
            companyId: z.string(),
            sourceType: GenerateLoanSummaryQueryParamSourceType$,
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                sourceType: v.sourceType,
            };
        });
}

/** @internal */
export namespace GenerateLoanSummaryResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
    };

    export const inboundSchema: z.ZodType<GenerateLoanSummaryResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GenerateLoanSummaryResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
            };
        });
}
