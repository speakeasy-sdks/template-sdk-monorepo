/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type ListAccountingBankAccountTransactionsRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * Unique identifier for an account.
     */
    accountId: string;
    /**
     * Page number. [Read more](https://docs.codat.io/using-the-api/paging).
     */
    page?: number | undefined;
    /**
     * Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).
     */
    pageSize?: number | undefined;
    /**
     * Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).
     */
    query?: string | undefined;
    /**
     * Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).
     */
    orderBy?: string | undefined;
};

export type ListAccountingBankAccountTransactionsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Success
     */
    accountingBankTransactions?: components.AccountingBankTransactions | undefined;
};

/** @internal */
export namespace ListAccountingBankAccountTransactionsRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        accountId: string;
        page?: number | undefined;
        pageSize?: number | undefined;
        query?: string | undefined;
        orderBy?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        ListAccountingBankAccountTransactionsRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            accountId: z.string(),
            page: z.number().int().default(1),
            pageSize: z.number().int().default(100),
            query: z.string().optional(),
            orderBy: z.string().optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                accountId: v.accountId,
                page: v.page,
                pageSize: v.pageSize,
                ...(v.query === undefined ? null : { query: v.query }),
                ...(v.orderBy === undefined ? null : { orderBy: v.orderBy }),
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        accountId: string;
        page: number;
        pageSize: number;
        query?: string | undefined;
        orderBy?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListAccountingBankAccountTransactionsRequest
    > = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            accountId: z.string(),
            page: z.number().int().default(1),
            pageSize: z.number().int().default(100),
            query: z.string().optional(),
            orderBy: z.string().optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                accountId: v.accountId,
                page: v.page,
                pageSize: v.pageSize,
                ...(v.query === undefined ? null : { query: v.query }),
                ...(v.orderBy === undefined ? null : { orderBy: v.orderBy }),
            };
        });
}

/** @internal */
export namespace ListAccountingBankAccountTransactionsResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        AccountingBankTransactions?: components.AccountingBankTransactions$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        ListAccountingBankAccountTransactionsResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            AccountingBankTransactions:
                components.AccountingBankTransactions$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.AccountingBankTransactions === undefined
                    ? null
                    : { accountingBankTransactions: v.AccountingBankTransactions }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        AccountingBankTransactions?: components.AccountingBankTransactions$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListAccountingBankAccountTransactionsResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            accountingBankTransactions:
                components.AccountingBankTransactions$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.accountingBankTransactions === undefined
                    ? null
                    : { AccountingBankTransactions: v.accountingBankTransactions }),
            };
        });
}