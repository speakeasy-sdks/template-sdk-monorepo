/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Links to the Account transactions data type.
 */
export type BankAccountRef = {
    /**
     * Bank account 'id' for the account transaction.
     */
    id?: string | undefined;
    /**
     * bank account 'name' for the account transaction.
     */
    name?: string | undefined;
};

/** @internal */
export namespace BankAccountRef$ {
    export const inboundSchema: z.ZodType<BankAccountRef, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BankAccountRef> = z
        .object({
            id: z.string().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}
