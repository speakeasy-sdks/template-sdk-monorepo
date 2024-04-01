/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CommerceReportMeasure = {
    /**
     * The measure's display name.
     */
    displayName?: string | undefined;
    /**
     * The measure's units e.g. percentage (%).
     */
    units?: string | undefined;
    /**
     * The measure's index.
     */
    index?: number | undefined;
    /**
     * The measure's type.
     */
    type?: string | undefined;
};

/** @internal */
export namespace CommerceReportMeasure$ {
    export type Inbound = {
        displayName?: string | undefined;
        units?: string | undefined;
        index?: number | undefined;
        type?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CommerceReportMeasure, z.ZodTypeDef, Inbound> = z
        .object({
            displayName: z.string().optional(),
            units: z.string().optional(),
            index: z.number().int().optional(),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.displayName === undefined ? null : { displayName: v.displayName }),
                ...(v.units === undefined ? null : { units: v.units }),
                ...(v.index === undefined ? null : { index: v.index }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        displayName?: string | undefined;
        units?: string | undefined;
        index?: number | undefined;
        type?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CommerceReportMeasure> = z
        .object({
            displayName: z.string().optional(),
            units: z.string().optional(),
            index: z.number().int().optional(),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.displayName === undefined ? null : { displayName: v.displayName }),
                ...(v.units === undefined ? null : { units: v.units }),
                ...(v.index === undefined ? null : { index: v.index }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}
