/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CommerceRecordRef = {
    /**
     * The unique identitifer of the record being referenced
     */
    id: string;
    /**
     * The type of record being referenced.
     */
    type: string;
};

/** @internal */
export namespace CommerceRecordRef$ {
    export type Inbound = {
        id: string;
        type: string;
    };

    export const inboundSchema: z.ZodType<CommerceRecordRef, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            type: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                type: v.type,
            };
        });

    export type Outbound = {
        id: string;
        type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CommerceRecordRef> = z
        .object({
            id: z.string(),
            type: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                type: v.type,
            };
        });
}
