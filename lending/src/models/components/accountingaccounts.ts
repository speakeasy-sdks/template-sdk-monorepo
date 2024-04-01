/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AccountingAccount, AccountingAccount$ } from "./accountingaccount";
import { Links, Links$ } from "./links";
import * as z from "zod";

export type AccountingAccounts = {
    results?: Array<AccountingAccount> | undefined;
    /**
     * Current page number.
     */
    pageNumber: number;
    /**
     * Number of items to return in results array.
     */
    pageSize: number;
    /**
     * Total number of items.
     */
    totalResults: number;
    links: Links;
};

/** @internal */
export namespace AccountingAccounts$ {
    export type Inbound = {
        results?: Array<AccountingAccount$.Inbound> | undefined;
        pageNumber: number;
        pageSize: number;
        totalResults: number;
        _links: Links$.Inbound;
    };

    export const inboundSchema: z.ZodType<AccountingAccounts, z.ZodTypeDef, Inbound> = z
        .object({
            results: z.array(AccountingAccount$.inboundSchema).optional(),
            pageNumber: z.number().int(),
            pageSize: z.number().int(),
            totalResults: z.number().int(),
            _links: Links$.inboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.results === undefined ? null : { results: v.results }),
                pageNumber: v.pageNumber,
                pageSize: v.pageSize,
                totalResults: v.totalResults,
                links: v._links,
            };
        });

    export type Outbound = {
        results?: Array<AccountingAccount$.Outbound> | undefined;
        pageNumber: number;
        pageSize: number;
        totalResults: number;
        _links: Links$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountingAccounts> = z
        .object({
            results: z.array(AccountingAccount$.outboundSchema).optional(),
            pageNumber: z.number().int(),
            pageSize: z.number().int(),
            totalResults: z.number().int(),
            links: Links$.outboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.results === undefined ? null : { results: v.results }),
                pageNumber: v.pageNumber,
                pageSize: v.pageSize,
                totalResults: v.totalResults,
                _links: v.links,
            };
        });
}
