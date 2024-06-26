/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type ListBankingTransactionsRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
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

export type ListBankingTransactionsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Success
     */
    bankingTransactions?: components.BankingTransactions | undefined;
};

/** @internal */
export namespace ListBankingTransactionsRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        page?: number | undefined;
        pageSize?: number | undefined;
        query?: string | undefined;
        orderBy?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListBankingTransactionsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            page: z.number().int().default(1),
            pageSize: z.number().int().default(100),
            query: z.string().optional(),
            orderBy: z.string().optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                page: v.page,
                pageSize: v.pageSize,
                ...(v.query === undefined ? null : { query: v.query }),
                ...(v.orderBy === undefined ? null : { orderBy: v.orderBy }),
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        page: number;
        pageSize: number;
        query?: string | undefined;
        orderBy?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListBankingTransactionsRequest> =
        z
            .object({
                companyId: z.string(),
                connectionId: z.string(),
                page: z.number().int().default(1),
                pageSize: z.number().int().default(100),
                query: z.string().optional(),
                orderBy: z.string().optional(),
            })
            .transform((v) => {
                return {
                    companyId: v.companyId,
                    connectionId: v.connectionId,
                    page: v.page,
                    pageSize: v.pageSize,
                    ...(v.query === undefined ? null : { query: v.query }),
                    ...(v.orderBy === undefined ? null : { orderBy: v.orderBy }),
                };
            });
}

/** @internal */
export namespace ListBankingTransactionsResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        BankingTransactions?: components.BankingTransactions$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListBankingTransactionsResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                BankingTransactions: components.BankingTransactions$.inboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    httpMeta: v.HttpMeta,
                    ...(v.BankingTransactions === undefined
                        ? null
                        : { bankingTransactions: v.BankingTransactions }),
                };
            });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        BankingTransactions?: components.BankingTransactions$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListBankingTransactionsResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            bankingTransactions: components.BankingTransactions$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.bankingTransactions === undefined
                    ? null
                    : { BankingTransactions: v.bankingTransactions }),
            };
        });
}
