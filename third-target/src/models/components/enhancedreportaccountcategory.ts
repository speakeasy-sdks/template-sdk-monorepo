/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AccountCategoryLevel, AccountCategoryLevel$ } from "./accountcategorylevel";
import * as z from "zod";

export type EnhancedReportAccountCategory = {
    /**
     * Returns a status of "Suggested" or "Confirmed". If an account has a confirmed category, it will replace any suggested category returned.
     */
    status?: string | undefined;
    levels?: Array<AccountCategoryLevel> | undefined;
};

/** @internal */
export namespace EnhancedReportAccountCategory$ {
    export type Inbound = {
        status?: string | undefined;
        levels?: Array<AccountCategoryLevel$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<EnhancedReportAccountCategory, z.ZodTypeDef, Inbound> = z
        .object({
            status: z.string().optional(),
            levels: z.array(AccountCategoryLevel$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.levels === undefined ? null : { levels: v.levels }),
            };
        });

    export type Outbound = {
        status?: string | undefined;
        levels?: Array<AccountCategoryLevel$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EnhancedReportAccountCategory> =
        z
            .object({
                status: z.string().optional(),
                levels: z.array(AccountCategoryLevel$.outboundSchema).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.status === undefined ? null : { status: v.status }),
                    ...(v.levels === undefined ? null : { levels: v.levels }),
                };
            });
}
