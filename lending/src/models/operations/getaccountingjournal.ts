/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetAccountingJournalRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a journal.
     */
    journalId: string;
};

export type GetAccountingJournalResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Success
     */
    accountingJournal?: components.AccountingJournal | null | undefined;
};

/** @internal */
export namespace GetAccountingJournalRequest$ {
    export type Inbound = {
        companyId: string;
        journalId: string;
    };

    export const inboundSchema: z.ZodType<GetAccountingJournalRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            journalId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                journalId: v.journalId,
            };
        });

    export type Outbound = {
        companyId: string;
        journalId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAccountingJournalRequest> = z
        .object({
            companyId: z.string(),
            journalId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                journalId: v.journalId,
            };
        });
}

/** @internal */
export namespace GetAccountingJournalResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        AccountingJournal?: components.AccountingJournal$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<GetAccountingJournalResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            AccountingJournal: z.nullable(components.AccountingJournal$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.AccountingJournal === undefined
                    ? null
                    : { accountingJournal: v.AccountingJournal }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        AccountingJournal?: components.AccountingJournal$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAccountingJournalResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            accountingJournal: z.nullable(components.AccountingJournal$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.accountingJournal === undefined
                    ? null
                    : { AccountingJournal: v.accountingJournal }),
            };
        });
}