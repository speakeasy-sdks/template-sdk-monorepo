/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * Data source type.
 */
export enum SourceType {
    Banking = "banking",
    Commerce = "commerce",
    Accounting = "accounting",
}

export type GenerateLoanTransactionsRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Data source type.
     */
    sourceType: SourceType;
};

export type GenerateLoanTransactionsResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export const SourceType$ = z.nativeEnum(SourceType);

/** @internal */
export namespace GenerateLoanTransactionsRequest$ {
    export type Inbound = {
        companyId: string;
        sourceType: SourceType;
    };

    export const inboundSchema: z.ZodType<GenerateLoanTransactionsRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                companyId: z.string(),
                sourceType: SourceType$,
            })
            .transform((v) => {
                return {
                    companyId: v.companyId,
                    sourceType: v.sourceType,
                };
            });

    export type Outbound = {
        companyId: string;
        sourceType: SourceType;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GenerateLoanTransactionsRequest
    > = z
        .object({
            companyId: z.string(),
            sourceType: SourceType$,
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                sourceType: v.sourceType,
            };
        });
}

/** @internal */
export namespace GenerateLoanTransactionsResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
    };

    export const inboundSchema: z.ZodType<GenerateLoanTransactionsResponse, z.ZodTypeDef, Inbound> =
        z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GenerateLoanTransactionsResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
            };
        });
}
