/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import * as z from "zod";

/**
 * An object containing an ordered list of account category levels.
 */
export type AccountCategoryLevel = {
    /**
     * Account category name.
     */
    levelName?: string | undefined;
    /**
     * Confidence level of the category. This will only be populated where `status` is `Suggested`.
     */
    confidence?: Decimal$ | number | undefined;
};

/** @internal */
export namespace AccountCategoryLevel$ {
    export type Inbound = {
        levelName?: string | undefined;
        confidence?: number | undefined;
    };

    export const inboundSchema: z.ZodType<AccountCategoryLevel, z.ZodTypeDef, Inbound> = z
        .object({
            levelName: z.string().optional(),
            confidence: z
                .number()
                .transform((v) => new Decimal$(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.levelName === undefined ? null : { levelName: v.levelName }),
                ...(v.confidence === undefined ? null : { confidence: v.confidence }),
            };
        });

    export type Outbound = {
        levelName?: string | undefined;
        confidence?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountCategoryLevel> = z
        .object({
            levelName: z.string().optional(),
            confidence: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.levelName === undefined ? null : { levelName: v.levelName }),
                ...(v.confidence === undefined ? null : { confidence: v.confidence }),
            };
        });
}
