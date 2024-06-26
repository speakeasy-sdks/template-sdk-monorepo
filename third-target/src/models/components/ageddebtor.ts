/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AgedCurrencyOutstanding, AgedCurrencyOutstanding$ } from "./agedcurrencyoutstanding";
import * as z from "zod";

export type AgedDebtor = {
    /**
     * Customer ID of the aged debtor.
     */
    customerId?: string | undefined;
    /**
     * Customer name of the aged debtor.
     */
    customerName?: string | undefined;
    /**
     * Array of aged debtors by currency.
     */
    agedCurrencyOutstanding?: Array<AgedCurrencyOutstanding> | undefined;
};

/** @internal */
export namespace AgedDebtor$ {
    export type Inbound = {
        customerId?: string | undefined;
        customerName?: string | undefined;
        agedCurrencyOutstanding?: Array<AgedCurrencyOutstanding$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<AgedDebtor, z.ZodTypeDef, Inbound> = z
        .object({
            customerId: z.string().optional(),
            customerName: z.string().optional(),
            agedCurrencyOutstanding: z.array(AgedCurrencyOutstanding$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.customerId === undefined ? null : { customerId: v.customerId }),
                ...(v.customerName === undefined ? null : { customerName: v.customerName }),
                ...(v.agedCurrencyOutstanding === undefined
                    ? null
                    : { agedCurrencyOutstanding: v.agedCurrencyOutstanding }),
            };
        });

    export type Outbound = {
        customerId?: string | undefined;
        customerName?: string | undefined;
        agedCurrencyOutstanding?: Array<AgedCurrencyOutstanding$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AgedDebtor> = z
        .object({
            customerId: z.string().optional(),
            customerName: z.string().optional(),
            agedCurrencyOutstanding: z.array(AgedCurrencyOutstanding$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.customerId === undefined ? null : { customerId: v.customerId }),
                ...(v.customerName === undefined ? null : { customerName: v.customerName }),
                ...(v.agedCurrencyOutstanding === undefined
                    ? null
                    : { agedCurrencyOutstanding: v.agedCurrencyOutstanding }),
            };
        });
}
