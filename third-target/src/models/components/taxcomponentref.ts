/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Taxes rates reference object depending on the rates being available on source commerce package.
 */
export type TaxComponentRef = {
    /**
     * The unique identitifer of the tax component being referenced.
     */
    id: string;
    /**
     * Name of the tax component being referenced.
     */
    name: string;
};

/** @internal */
export namespace TaxComponentRef$ {
    export type Inbound = {
        id: string;
        name: string;
    };

    export const inboundSchema: z.ZodType<TaxComponentRef, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                name: v.name,
            };
        });

    export type Outbound = {
        id: string;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaxComponentRef> = z
        .object({
            id: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                name: v.name,
            };
        });
}
