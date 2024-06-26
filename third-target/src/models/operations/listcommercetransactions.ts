/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type ListCommerceTransactionsRequest = {
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

export type ListCommerceTransactionsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    commerceTransactions?: components.CommerceTransactions | undefined;
};

/** @internal */
export namespace ListCommerceTransactionsRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        page?: number | undefined;
        pageSize?: number | undefined;
        query?: string | undefined;
        orderBy?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListCommerceTransactionsRequest, z.ZodTypeDef, Inbound> =
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

    export type Outbound = {
        companyId: string;
        connectionId: string;
        page: number;
        pageSize: number;
        query?: string | undefined;
        orderBy?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListCommerceTransactionsRequest
    > = z
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
export namespace ListCommerceTransactionsResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        CommerceTransactions?: components.CommerceTransactions$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListCommerceTransactionsResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                CommerceTransactions: components.CommerceTransactions$.inboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    httpMeta: v.HttpMeta,
                    ...(v.CommerceTransactions === undefined
                        ? null
                        : { commerceTransactions: v.CommerceTransactions }),
                };
            });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        CommerceTransactions?: components.CommerceTransactions$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListCommerceTransactionsResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            commerceTransactions: components.CommerceTransactions$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.commerceTransactions === undefined
                    ? null
                    : { CommerceTransactions: v.commerceTransactions }),
            };
        });
}
