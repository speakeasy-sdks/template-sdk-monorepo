/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Reference to the customer that placed the order.
 */
export type CommerceCustomerRef = {
    /**
     * The unique identitifer of the customer being referenced
     */
    id: string;
    /**
     * Name of the customer being referenced.
     */
    name?: string | undefined;
};

/** @internal */
export namespace CommerceCustomerRef$ {
    export type Inbound = {
        id: string;
        name?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CommerceCustomerRef, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        id: string;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CommerceCustomerRef> = z
        .object({
            id: z.string(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}
