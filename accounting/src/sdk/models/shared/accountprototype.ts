/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import { AccountStatus, AccountStatus$ } from "./accountstatus";
import { AccountType, AccountType$ } from "./accounttype";
import { SupplementalData, SupplementalData$ } from "./supplementaldata";
import { ValidDataTypeLinks, ValidDataTypeLinks$ } from "./validdatatypelinks";
import * as z from "zod";

export type AccountPrototype = {
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
     * Current balance in the account.
     */
    currentBalance?: Decimal$ | number | null | undefined;
    /**
     * Description for the account.
     */
    description?: string | null | undefined;
    /**
     * Full category of the account.
     *
     * @remarks
     *
     * For example, `Liability.Current` or `Income.Revenue`. To determine a list of possible categories for each integration, see our examples, follow our [Create, update, delete data](https://docs.codat.io/using-the-api/push) guide, or refer to the integration's own documentation.
     */
    fullyQualifiedCategory?: string | null | undefined;
    /**
     * Full name of the account, for example:
     *
     * @remarks
     * - `Cash On Hand`
     * - `Rents Held In Trust`
     * - `Fixed Asset`
     */
    fullyQualifiedName?: string | null | undefined;
    /**
     * Confirms whether the account is a bank account or not.
     */
    isBankAccount?: boolean | undefined;
    /**
     * Name of the account.
     */
    name?: string | null | undefined;
    /**
     * Reference given to each nominal account for a business. It ensures money is allocated to the correct account. This code isn't a unique identifier in the Codat system.
     */
    nominalCode?: string | null | undefined;
    /**
     * Status of the account
     */
    status?: AccountStatus | undefined;
    /**
     * Supplemental data is additional data you can include in our standard data types.
     *
     * @remarks
     *
     * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
     */
    supplementalData?: SupplementalData | undefined;
    /**
     * Type of account
     */
    type?: AccountType | undefined;
    /**
     * The validDatatypeLinks can be used to determine whether an account can be correctly mapped to another object; for example, accounts with a `type` of `income` might only support being used on an Invoice and Direct Income. For more information, see [Valid Data Type Links](/accounting-api#/schemas/ValidDataTypeLinks).
     */
    validDatatypeLinks?: Array<ValidDataTypeLinks> | null | undefined;
};

/** @internal */
export namespace AccountPrototype$ {
    export const inboundSchema: z.ZodType<AccountPrototype, z.ZodTypeDef, unknown> = z
        .object({
            currency: z.string().optional(),
            currentBalance: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            description: z.nullable(z.string()).optional(),
            fullyQualifiedCategory: z.nullable(z.string()).optional(),
            fullyQualifiedName: z.nullable(z.string()).optional(),
            isBankAccount: z.boolean().optional(),
            name: z.nullable(z.string()).optional(),
            nominalCode: z.nullable(z.string()).optional(),
            status: AccountStatus$.inboundSchema.optional(),
            supplementalData: SupplementalData$.inboundSchema.optional(),
            type: AccountType$.inboundSchema.optional(),
            validDatatypeLinks: z.nullable(z.array(ValidDataTypeLinks$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.currentBalance === undefined ? null : { currentBalance: v.currentBalance }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.fullyQualifiedCategory === undefined
                    ? null
                    : { fullyQualifiedCategory: v.fullyQualifiedCategory }),
                ...(v.fullyQualifiedName === undefined
                    ? null
                    : { fullyQualifiedName: v.fullyQualifiedName }),
                ...(v.isBankAccount === undefined ? null : { isBankAccount: v.isBankAccount }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.nominalCode === undefined ? null : { nominalCode: v.nominalCode }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.supplementalData === undefined
                    ? null
                    : { supplementalData: v.supplementalData }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.validDatatypeLinks === undefined
                    ? null
                    : { validDatatypeLinks: v.validDatatypeLinks }),
            };
        });

    export type Outbound = {
        currency?: string | undefined;
        currentBalance?: number | null | undefined;
        description?: string | null | undefined;
        fullyQualifiedCategory?: string | null | undefined;
        fullyQualifiedName?: string | null | undefined;
        isBankAccount?: boolean | undefined;
        name?: string | null | undefined;
        nominalCode?: string | null | undefined;
        status?: string | undefined;
        supplementalData?: SupplementalData$.Outbound | undefined;
        type?: string | undefined;
        validDatatypeLinks?: Array<ValidDataTypeLinks$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountPrototype> = z
        .object({
            currency: z.string().optional(),
            currentBalance: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            description: z.nullable(z.string()).optional(),
            fullyQualifiedCategory: z.nullable(z.string()).optional(),
            fullyQualifiedName: z.nullable(z.string()).optional(),
            isBankAccount: z.boolean().optional(),
            name: z.nullable(z.string()).optional(),
            nominalCode: z.nullable(z.string()).optional(),
            status: AccountStatus$.outboundSchema.optional(),
            supplementalData: SupplementalData$.outboundSchema.optional(),
            type: AccountType$.outboundSchema.optional(),
            validDatatypeLinks: z.nullable(z.array(ValidDataTypeLinks$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.currentBalance === undefined ? null : { currentBalance: v.currentBalance }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.fullyQualifiedCategory === undefined
                    ? null
                    : { fullyQualifiedCategory: v.fullyQualifiedCategory }),
                ...(v.fullyQualifiedName === undefined
                    ? null
                    : { fullyQualifiedName: v.fullyQualifiedName }),
                ...(v.isBankAccount === undefined ? null : { isBankAccount: v.isBankAccount }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.nominalCode === undefined ? null : { nominalCode: v.nominalCode }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.supplementalData === undefined
                    ? null
                    : { supplementalData: v.supplementalData }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.validDatatypeLinks === undefined
                    ? null
                    : { validDatatypeLinks: v.validDatatypeLinks }),
            };
        });
}
