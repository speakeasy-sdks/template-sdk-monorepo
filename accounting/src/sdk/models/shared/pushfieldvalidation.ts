/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type PushFieldValidation = {
    /**
     * Details on the validation issue.
     */
    details: string;
    /**
     * Field name that resulted in the validation issue.
     */
    field?: string | undefined;
    /**
     * Unique reference identifier for the validation issue.
     */
    ref?: string | null | undefined;
};

/** @internal */
export namespace PushFieldValidation$ {
    export const inboundSchema: z.ZodType<PushFieldValidation, z.ZodTypeDef, unknown> = z
        .object({
            details: z.string(),
            field: z.string().optional(),
            ref: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                details: v.details,
                ...(v.field === undefined ? null : { field: v.field }),
                ...(v.ref === undefined ? null : { ref: v.ref }),
            };
        });

    export type Outbound = {
        details: string;
        field?: string | undefined;
        ref?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PushFieldValidation> = z
        .object({
            details: z.string(),
            field: z.string().optional(),
            ref: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                details: v.details,
                ...(v.field === undefined ? null : { field: v.field }),
                ...(v.ref === undefined ? null : { ref: v.ref }),
            };
        });
}
