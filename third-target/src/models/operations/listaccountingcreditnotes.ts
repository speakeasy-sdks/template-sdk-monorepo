/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type ListAccountingCreditNotesRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
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

export type ListAccountingCreditNotesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Success
     */
    accountingCreditNotes?: components.AccountingCreditNotes | undefined;
};

/** @internal */
export namespace ListAccountingCreditNotesRequest$ {
    export type Inbound = {
        companyId: string;
        page?: number | undefined;
        pageSize?: number | undefined;
        query?: string | undefined;
        orderBy?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListAccountingCreditNotesRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                companyId: z.string(),
                page: z.number().int().default(1),
                pageSize: z.number().int().default(100),
                query: z.string().optional(),
                orderBy: z.string().optional(),
            })
            .transform((v) => {
                return {
                    companyId: v.companyId,
                    page: v.page,
                    pageSize: v.pageSize,
                    ...(v.query === undefined ? null : { query: v.query }),
                    ...(v.orderBy === undefined ? null : { orderBy: v.orderBy }),
                };
            });

    export type Outbound = {
        companyId: string;
        page: number;
        pageSize: number;
        query?: string | undefined;
        orderBy?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListAccountingCreditNotesRequest
    > = z
        .object({
            companyId: z.string(),
            page: z.number().int().default(1),
            pageSize: z.number().int().default(100),
            query: z.string().optional(),
            orderBy: z.string().optional(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                page: v.page,
                pageSize: v.pageSize,
                ...(v.query === undefined ? null : { query: v.query }),
                ...(v.orderBy === undefined ? null : { orderBy: v.orderBy }),
            };
        });
}

/** @internal */
export namespace ListAccountingCreditNotesResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        AccountingCreditNotes?: components.AccountingCreditNotes$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        ListAccountingCreditNotesResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            AccountingCreditNotes: components.AccountingCreditNotes$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.AccountingCreditNotes === undefined
                    ? null
                    : { accountingCreditNotes: v.AccountingCreditNotes }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        AccountingCreditNotes?: components.AccountingCreditNotes$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListAccountingCreditNotesResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            accountingCreditNotes: components.AccountingCreditNotes$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.accountingCreditNotes === undefined
                    ? null
                    : { AccountingCreditNotes: v.accountingCreditNotes }),
            };
        });
}
