/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * Data source type.
 */
export enum QueryParamSourceType {
    Banking = "banking",
    Commerce = "commerce",
    Accounting = "accounting",
}

export type ListLoanTransactionsRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Data source type.
     */
    sourceType: QueryParamSourceType;
};

export type ListLoanTransactionsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    loanTransactions?: components.LoanTransactions | undefined;
};

/** @internal */
export const QueryParamSourceType$ = z.nativeEnum(QueryParamSourceType);

/** @internal */
export namespace ListLoanTransactionsRequest$ {
    export type Inbound = {
        companyId: string;
        sourceType: QueryParamSourceType;
    };

    export const inboundSchema: z.ZodType<ListLoanTransactionsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            sourceType: QueryParamSourceType$,
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                sourceType: v.sourceType,
            };
        });

    export type Outbound = {
        companyId: string;
        sourceType: QueryParamSourceType;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListLoanTransactionsRequest> = z
        .object({
            companyId: z.string(),
            sourceType: QueryParamSourceType$,
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                sourceType: v.sourceType,
            };
        });
}

/** @internal */
export namespace ListLoanTransactionsResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        LoanTransactions?: components.LoanTransactions$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListLoanTransactionsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            LoanTransactions: components.LoanTransactions$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.LoanTransactions === undefined
                    ? null
                    : { loanTransactions: v.LoanTransactions }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        LoanTransactions?: components.LoanTransactions$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListLoanTransactionsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            loanTransactions: components.LoanTransactions$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.loanTransactions === undefined
                    ? null
                    : { LoanTransactions: v.loanTransactions }),
            };
        });
}
