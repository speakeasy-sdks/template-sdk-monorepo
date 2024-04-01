/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetCategorizedBalanceSheetStatementRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.
     */
    reportDate: string;
    /**
     * The number of periods to return. If not provided, 12 periods will be used as the default value.
     */
    numberOfPeriods?: number | undefined;
};

export type GetCategorizedBalanceSheetStatementResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    enhancedFinancialReport?: components.EnhancedFinancialReport | undefined;
};

/** @internal */
export namespace GetCategorizedBalanceSheetStatementRequest$ {
    export type Inbound = {
        companyId: string;
        reportDate: string;
        numberOfPeriods?: number | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetCategorizedBalanceSheetStatementRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            companyId: z.string(),
            reportDate: z.string(),
            numberOfPeriods: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                reportDate: v.reportDate,
                ...(v.numberOfPeriods === undefined
                    ? null
                    : { numberOfPeriods: v.numberOfPeriods }),
            };
        });

    export type Outbound = {
        companyId: string;
        reportDate: string;
        numberOfPeriods?: number | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetCategorizedBalanceSheetStatementRequest
    > = z
        .object({
            companyId: z.string(),
            reportDate: z.string(),
            numberOfPeriods: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                reportDate: v.reportDate,
                ...(v.numberOfPeriods === undefined
                    ? null
                    : { numberOfPeriods: v.numberOfPeriods }),
            };
        });
}

/** @internal */
export namespace GetCategorizedBalanceSheetStatementResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        EnhancedFinancialReport?: components.EnhancedFinancialReport$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetCategorizedBalanceSheetStatementResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            EnhancedFinancialReport: components.EnhancedFinancialReport$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.EnhancedFinancialReport === undefined
                    ? null
                    : { enhancedFinancialReport: v.EnhancedFinancialReport }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        EnhancedFinancialReport?: components.EnhancedFinancialReport$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetCategorizedBalanceSheetStatementResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            enhancedFinancialReport: components.EnhancedFinancialReport$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.enhancedFinancialReport === undefined
                    ? null
                    : { EnhancedFinancialReport: v.enhancedFinancialReport }),
            };
        });
}
