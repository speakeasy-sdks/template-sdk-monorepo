/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import { PaymentStatus, PaymentStatus$ } from "./paymentstatus";
import { PaymentType, PaymentType$ } from "./paymenttype";
import * as z from "zod";

export type PaymentRef = {
    modifiedDate?: string | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * A unique, persistent identifier for this record
     */
    id: string;
    /**
     * Payment Amount (including gratuity).
     */
    amount?: Decimal$ | number | null | undefined;
    /**
     * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.
     *
     * @remarks
     *
     * ## Unknown currencies
     *
     * In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.
     *
     * There are only a very small number of edge cases where this currency code is returned by the Codat system.
     */
    currency?: string | undefined;
    /**
     * Type of payment.
     */
    type?: PaymentType | null | undefined;
    /**
     * Status of the payment.
     */
    status?: PaymentStatus | undefined;
    /**
     * Service provider of the payment, if applicable.
     */
    paymentProvider?: string | undefined;
    /**
     * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
     *
     * @remarks
     *
     * ```
     * 2020-10-08T22:40:50Z
     * 2021-01-01T00:00:00
     * ```
     *
     *
     *
     * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
     *
     * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
     * - Unqualified local time: `2021-11-15T01:00:00`
     * - UTC time offsets: `2021-11-15T01:00:00-05:00`
     *
     * > Time zones
     * >
     * > Not all dates from Codat will contain information about time zones.
     * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
     */
    dueDate?: string | undefined;
    /**
     * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
     *
     * @remarks
     *
     * ```
     * 2020-10-08T22:40:50Z
     * 2021-01-01T00:00:00
     * ```
     *
     *
     *
     * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
     *
     * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
     * - Unqualified local time: `2021-11-15T01:00:00`
     * - UTC time offsets: `2021-11-15T01:00:00-05:00`
     *
     * > Time zones
     * >
     * > Not all dates from Codat will contain information about time zones.
     * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
     */
    createdDate?: string | undefined;
};

/** @internal */
export namespace PaymentRef$ {
    export type Inbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        id: string;
        amount?: number | null | undefined;
        currency?: string | undefined;
        type?: PaymentType | null | undefined;
        status?: PaymentStatus | undefined;
        paymentProvider?: string | undefined;
        dueDate?: string | undefined;
        createdDate?: string | undefined;
    };

    export const inboundSchema: z.ZodType<PaymentRef, z.ZodTypeDef, Inbound> = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            id: z.string(),
            amount: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            currency: z.string().optional(),
            type: z.nullable(PaymentType$).optional(),
            status: PaymentStatus$.optional(),
            paymentProvider: z.string().optional(),
            dueDate: z.string().optional(),
            createdDate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                id: v.id,
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.paymentProvider === undefined
                    ? null
                    : { paymentProvider: v.paymentProvider }),
                ...(v.dueDate === undefined ? null : { dueDate: v.dueDate }),
                ...(v.createdDate === undefined ? null : { createdDate: v.createdDate }),
            };
        });

    export type Outbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        id: string;
        amount?: number | null | undefined;
        currency?: string | undefined;
        type?: PaymentType | null | undefined;
        status?: PaymentStatus | undefined;
        paymentProvider?: string | undefined;
        dueDate?: string | undefined;
        createdDate?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentRef> = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            id: z.string(),
            amount: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            currency: z.string().optional(),
            type: z.nullable(PaymentType$).optional(),
            status: PaymentStatus$.optional(),
            paymentProvider: z.string().optional(),
            dueDate: z.string().optional(),
            createdDate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                id: v.id,
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.paymentProvider === undefined
                    ? null
                    : { paymentProvider: v.paymentProvider }),
                ...(v.dueDate === undefined ? null : { dueDate: v.dueDate }),
                ...(v.createdDate === undefined ? null : { createdDate: v.createdDate }),
            };
        });
}
