/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetBankingTransactionCategoryRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * The unique identifier for a banking transaction category
     */
    transactionCategoryId: string;
};

export type GetBankingTransactionCategoryResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Success
     */
    bankingTransactionCategory?: components.BankingTransactionCategory | null | undefined;
};

/** @internal */
export namespace GetBankingTransactionCategoryRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        transactionCategoryId: string;
    };

    export const inboundSchema: z.ZodType<
        GetBankingTransactionCategoryRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            transactionCategoryId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                transactionCategoryId: v.transactionCategoryId,
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        transactionCategoryId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetBankingTransactionCategoryRequest
    > = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            transactionCategoryId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                transactionCategoryId: v.transactionCategoryId,
            };
        });
}

/** @internal */
export namespace GetBankingTransactionCategoryResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        BankingTransactionCategory?:
            | components.BankingTransactionCategory$.Inbound
            | null
            | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetBankingTransactionCategoryResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            BankingTransactionCategory: z
                .nullable(components.BankingTransactionCategory$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.BankingTransactionCategory === undefined
                    ? null
                    : { bankingTransactionCategory: v.BankingTransactionCategory }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        BankingTransactionCategory?:
            | components.BankingTransactionCategory$.Outbound
            | null
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetBankingTransactionCategoryResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            bankingTransactionCategory: z
                .nullable(components.BankingTransactionCategory$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.bankingTransactionCategory === undefined
                    ? null
                    : { BankingTransactionCategory: v.bankingTransactionCategory }),
            };
        });
}