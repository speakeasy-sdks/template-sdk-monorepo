/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import {
    AccountingPaymentAllocation,
    AccountingPaymentAllocation$,
} from "./accountingpaymentallocation";
import { ContactRef, ContactRef$ } from "./contactref";
import { DirectIncomeLineItem, DirectIncomeLineItem$ } from "./directincomelineitem";
import { Metadata, Metadata$ } from "./metadata";
import { SupplementalData, SupplementalData$ } from "./supplementaldata";
import * as z from "zod";

/**
 * > **Language tip:**  Direct incomes may also be referred to as **Receive transactions**, **Receive money transactions**, **Sales receipts**, or **Cash sales** in various accounting platforms.
 *
 * @remarks
 *
 * > View the coverage for direct incomes in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * Direct incomes are incomes received directly from the business' operations. For example, cash sales of items to a customer, referral commissions, and service fee refunds are considered direct incomes.
 *
 * Direct incomes include:
 *
 * - Selling an item directly to a contact, and receiving payment at the point of the sale.
 * - Refunding an item in cash to a contact.
 * - Depositing money into a bank account.
 *
 * Direct incomes is a child data type of [account transactions](https://docs.codat.io/lending-api#/schemas/AccountTransaction).
 *
 */
export type AccountingDirectIncome = {
    modifiedDate?: string | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * Identifier of the direct income, unique for the company.
     */
    id?: string | undefined;
    /**
     * User-friendly reference for the direct income.
     */
    reference?: string | null | undefined;
    /**
     * An optional note on the direct income that can be used to assign the direct income with a reference ID in your application.
     */
    note?: string | null | undefined;
    /**
     * A customer or supplier associated with the direct cost.
     */
    contactRef?: ContactRef | undefined;
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
    issueDate: string;
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
    currency: string;
    /**
     * Rate to convert the total amount of the payment into the base currency for the company at the time of the payment.
     *
     * @remarks
     *
     * Currency rates in Codat are implemented as the multiple of foreign currency units to each base currency unit.
     *
     * It is not possible to perform the currency conversion with two or more non-base currencies participating in the transaction. For example, if a company's base currency is USD, and it has a bill issued in EUR, then the bill payment must happen in USD or EUR.
     *
     * Where the currency rate is provided by the underlying accounting platform, it will be available from Codat with the same precision (up to a maximum of 9 decimal places).
     *
     * For accounting platforms which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.
     *
     * ## Examples with base currency of GBP
     *
     * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (GBP) |
     * | :--------------- | :------------- | :------------ | :------------------------- |
     * | **USD**          | $20            | 0.781         | £15.62                     |
     * | **EUR**          | €20            | 0.885         | £17.70                     |
     * | **RUB**          | ₽20            | 0.011         | £0.22                      |
     *
     * ## Examples with base currency of USD
     *
     * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (USD) |
     * | :--------------- | :------------- | :------------ | :------------------------- |
     * | **GBP**          | £20            | 1.277         | $25.54                     |
     * | **EUR**          | €20            | 1.134         | $22.68                     |
     * | **RUB**          | ₽20            | 0.015         | $0.30                      |
     *
     *
     * ### Integration-specific details
     *
     * | Integration       | Scenario                                        | System behavior                                                                                                                                                      |
     * |-------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
     * | QuickBooks Online | Transaction currency differs from base currency | If currency rate value is left `null`, a rate of 1 will be used by QBO by default. To override this, include the required currency rate in the expense transaction.  |
     */
    currencyRate?: Decimal$ | number | null | undefined;
    /**
     * An array of line items.
     */
    lineItems: Array<DirectIncomeLineItem>;
    paymentAllocations: Array<AccountingPaymentAllocation>;
    /**
     * The total amount of the direct incomes, excluding any taxes.
     */
    subTotal: Decimal$ | number;
    /**
     * The total amount of tax on the direct incomes.
     */
    taxAmount: Decimal$ | number;
    /**
     * The amount of the direct incomes, inclusive of tax.
     */
    totalAmount: Decimal$ | number;
    metadata?: Metadata | undefined;
    /**
     * Supplemental data is additional data you can include in our standard data types.
     *
     * @remarks
     *
     * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
     */
    supplementalData?: SupplementalData | undefined;
};

/** @internal */
export namespace AccountingDirectIncome$ {
    export type Inbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        id?: string | undefined;
        reference?: string | null | undefined;
        note?: string | null | undefined;
        contactRef?: ContactRef$.Inbound | undefined;
        issueDate: string;
        currency: string;
        currencyRate?: number | null | undefined;
        lineItems: Array<DirectIncomeLineItem$.Inbound>;
        paymentAllocations: Array<AccountingPaymentAllocation$.Inbound>;
        subTotal: number;
        taxAmount: number;
        totalAmount: number;
        metadata?: Metadata$.Inbound | undefined;
        supplementalData?: SupplementalData$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<AccountingDirectIncome, z.ZodTypeDef, Inbound> = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            id: z.string().optional(),
            reference: z.nullable(z.string()).optional(),
            note: z.nullable(z.string()).optional(),
            contactRef: ContactRef$.inboundSchema.optional(),
            issueDate: z.string(),
            currency: z.string(),
            currencyRate: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            lineItems: z.array(DirectIncomeLineItem$.inboundSchema),
            paymentAllocations: z.array(AccountingPaymentAllocation$.inboundSchema),
            subTotal: z.number().transform((v) => new Decimal$(v)),
            taxAmount: z.number().transform((v) => new Decimal$(v)),
            totalAmount: z.number().transform((v) => new Decimal$(v)),
            metadata: Metadata$.inboundSchema.optional(),
            supplementalData: SupplementalData$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.reference === undefined ? null : { reference: v.reference }),
                ...(v.note === undefined ? null : { note: v.note }),
                ...(v.contactRef === undefined ? null : { contactRef: v.contactRef }),
                issueDate: v.issueDate,
                currency: v.currency,
                ...(v.currencyRate === undefined ? null : { currencyRate: v.currencyRate }),
                lineItems: v.lineItems,
                paymentAllocations: v.paymentAllocations,
                subTotal: v.subTotal,
                taxAmount: v.taxAmount,
                totalAmount: v.totalAmount,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.supplementalData === undefined
                    ? null
                    : { supplementalData: v.supplementalData }),
            };
        });

    export type Outbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        id?: string | undefined;
        reference?: string | null | undefined;
        note?: string | null | undefined;
        contactRef?: ContactRef$.Outbound | undefined;
        issueDate: string;
        currency: string;
        currencyRate?: number | null | undefined;
        lineItems: Array<DirectIncomeLineItem$.Outbound>;
        paymentAllocations: Array<AccountingPaymentAllocation$.Outbound>;
        subTotal: number;
        taxAmount: number;
        totalAmount: number;
        metadata?: Metadata$.Outbound | undefined;
        supplementalData?: SupplementalData$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountingDirectIncome> = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            id: z.string().optional(),
            reference: z.nullable(z.string()).optional(),
            note: z.nullable(z.string()).optional(),
            contactRef: ContactRef$.outboundSchema.optional(),
            issueDate: z.string(),
            currency: z.string(),
            currencyRate: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            lineItems: z.array(DirectIncomeLineItem$.outboundSchema),
            paymentAllocations: z.array(AccountingPaymentAllocation$.outboundSchema),
            subTotal: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber())),
            taxAmount: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber())),
            totalAmount: z
                .union([z.instanceof(Decimal$), z.number()])
                .transform((v) => (typeof v === "number" ? v : v.toNumber())),
            metadata: Metadata$.outboundSchema.optional(),
            supplementalData: SupplementalData$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.reference === undefined ? null : { reference: v.reference }),
                ...(v.note === undefined ? null : { note: v.note }),
                ...(v.contactRef === undefined ? null : { contactRef: v.contactRef }),
                issueDate: v.issueDate,
                currency: v.currency,
                ...(v.currencyRate === undefined ? null : { currencyRate: v.currencyRate }),
                lineItems: v.lineItems,
                paymentAllocations: v.paymentAllocations,
                subTotal: v.subTotal,
                taxAmount: v.taxAmount,
                totalAmount: v.totalAmount,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.supplementalData === undefined
                    ? null
                    : { supplementalData: v.supplementalData }),
            };
        });
}
