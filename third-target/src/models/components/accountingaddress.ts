/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AccountingAddressType, AccountingAddressType$ } from "./accountingaddresstype";
import * as z from "zod";

export type AccountingAddress = {
    /**
     * The type of the address
     */
    type: AccountingAddressType;
    /**
     * Line 1 of the customer address.
     */
    line1?: string | null | undefined;
    /**
     * Line 2 of the customer address.
     */
    line2?: string | null | undefined;
    /**
     * City of the customer address.
     */
    city?: string | null | undefined;
    /**
     * Region of the customer address.
     */
    region?: string | null | undefined;
    /**
     * Country of the customer address.
     */
    country?: string | null | undefined;
    /**
     * Postal code or zip code.
     */
    postalCode?: string | null | undefined;
};

/** @internal */
export namespace AccountingAddress$ {
    export type Inbound = {
        type: AccountingAddressType;
        line1?: string | null | undefined;
        line2?: string | null | undefined;
        city?: string | null | undefined;
        region?: string | null | undefined;
        country?: string | null | undefined;
        postalCode?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<AccountingAddress, z.ZodTypeDef, Inbound> = z
        .object({
            type: AccountingAddressType$,
            line1: z.nullable(z.string()).optional(),
            line2: z.nullable(z.string()).optional(),
            city: z.nullable(z.string()).optional(),
            region: z.nullable(z.string()).optional(),
            country: z.nullable(z.string()).optional(),
            postalCode: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                type: v.type,
                ...(v.line1 === undefined ? null : { line1: v.line1 }),
                ...(v.line2 === undefined ? null : { line2: v.line2 }),
                ...(v.city === undefined ? null : { city: v.city }),
                ...(v.region === undefined ? null : { region: v.region }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.postalCode === undefined ? null : { postalCode: v.postalCode }),
            };
        });

    export type Outbound = {
        type: AccountingAddressType;
        line1?: string | null | undefined;
        line2?: string | null | undefined;
        city?: string | null | undefined;
        region?: string | null | undefined;
        country?: string | null | undefined;
        postalCode?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountingAddress> = z
        .object({
            type: AccountingAddressType$,
            line1: z.nullable(z.string()).optional(),
            line2: z.nullable(z.string()).optional(),
            city: z.nullable(z.string()).optional(),
            region: z.nullable(z.string()).optional(),
            country: z.nullable(z.string()).optional(),
            postalCode: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                type: v.type,
                ...(v.line1 === undefined ? null : { line1: v.line1 }),
                ...(v.line2 === undefined ? null : { line2: v.line2 }),
                ...(v.city === undefined ? null : { city: v.city }),
                ...(v.region === undefined ? null : { region: v.region }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.postalCode === undefined ? null : { postalCode: v.postalCode }),
            };
        });
}
