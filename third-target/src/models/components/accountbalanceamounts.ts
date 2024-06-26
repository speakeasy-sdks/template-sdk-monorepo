/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import * as z from "zod";

/**
 * Depending on the data provided by the underlying bank, not all balances are always available.
 */
export type AccountBalanceAmounts = {
    /**
     * The balance available in the account, including any pending transactions. This doesn't include additional funds available from any overdrafts.
     */
    available?: Decimal$ | number | null | undefined;
    /**
     * The balance of the account only including cleared transactions.
     */
    current?: Decimal$ | number | undefined;
    /**
     * The minimum allowed balance for the account. For example, a $100.00 overdraft would show as a limit of `-100.00`.
     */
    limit?: Decimal$ | number | null | undefined;
};

/** @internal */
export namespace AccountBalanceAmounts$ {
    export type Inbound = {
        available?: number | null | undefined;
        current?: number | undefined;
        limit?: number | null | undefined;
    };

    export const inboundSchema: z.ZodType<AccountBalanceAmounts, z.ZodTypeDef, Inbound> = z
        .object({
            available: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            current: z
                .number()
                .transform((v) => new Decimal$(v))
                .optional(),
            limit: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
        })
        .transform((v) => {
            return {
                ...(v.available === undefined ? null : { available: v.available }),
                ...(v.current === undefined ? null : { current: v.current }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
            };
        });

    export type Outbound = {
        available?: number | null | undefined;
        current?: number | undefined;
        limit?: number | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountBalanceAmounts> = z
        .object({
            available: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            current: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                .optional(),
            limit: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.available === undefined ? null : { available: v.available }),
                ...(v.current === undefined ? null : { current: v.current }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
            };
        });
}
