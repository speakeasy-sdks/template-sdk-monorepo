/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AccountBalance, AccountBalance$ } from "./accountbalance";
import { CommerceAddress, CommerceAddress$ } from "./commerceaddress";
import { PhoneNumber, PhoneNumber$ } from "./phonenumber";
import { WebLink, WebLink$ } from "./weblink";
import * as z from "zod";

/**
 * In the Codat system, company profile includes standard commercial details about
 *
 * @remarks
 * a linked company, such as their address, phone number, and company registration.
 *
 * Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=companyInfo) for this data type.
 *
 */
export type CommerceCompanyInfo = {
    modifiedDate?: string | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * The name of the company
     */
    companyName?: string | undefined;
    /**
     * Identifier or reference for the company in the commerce platform
     */
    commercePlatformRef?: string | undefined;
    /**
     * The full legal name of the company
     */
    companyLegalName?: string | undefined;
    /**
     * Addresses associated with the company
     */
    addresses?: Array<CommerceAddress> | undefined;
    /**
     * Phone numbers associated with the company
     */
    phoneNumbers?: Array<PhoneNumber> | undefined;
    /**
     * Weblinks associated with the company
     */
    webLinks?: Array<WebLink> | undefined;
    /**
     * The registration number of the company
     */
    registrationNumber?: string | undefined;
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
    baseCurrency?: string | undefined;
    /**
     * The available and current cash balances for the company's accounts
     */
    accountBalances?: Array<AccountBalance> | undefined;
    /**
     * URL addresses for the originating system. For example, potential use cases include 'deeplinking' to the originating system
     */
    sourceUrls?: Record<string, string> | undefined;
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
export namespace CommerceCompanyInfo$ {
    export type Inbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        companyName?: string | undefined;
        commercePlatformRef?: string | undefined;
        companyLegalName?: string | undefined;
        addresses?: Array<CommerceAddress$.Inbound> | undefined;
        phoneNumbers?: Array<PhoneNumber$.Inbound> | undefined;
        webLinks?: Array<WebLink$.Inbound> | undefined;
        registrationNumber?: string | undefined;
        baseCurrency?: string | undefined;
        accountBalances?: Array<AccountBalance$.Inbound> | undefined;
        sourceUrls?: Record<string, string> | undefined;
        createdDate?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CommerceCompanyInfo, z.ZodTypeDef, Inbound> = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            companyName: z.string().optional(),
            commercePlatformRef: z.string().optional(),
            companyLegalName: z.string().optional(),
            addresses: z.array(CommerceAddress$.inboundSchema).optional(),
            phoneNumbers: z.array(PhoneNumber$.inboundSchema).optional(),
            webLinks: z.array(WebLink$.inboundSchema).optional(),
            registrationNumber: z.string().optional(),
            baseCurrency: z.string().optional(),
            accountBalances: z.array(AccountBalance$.inboundSchema).optional(),
            sourceUrls: z.record(z.string()).optional(),
            createdDate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.commercePlatformRef === undefined
                    ? null
                    : { commercePlatformRef: v.commercePlatformRef }),
                ...(v.companyLegalName === undefined
                    ? null
                    : { companyLegalName: v.companyLegalName }),
                ...(v.addresses === undefined ? null : { addresses: v.addresses }),
                ...(v.phoneNumbers === undefined ? null : { phoneNumbers: v.phoneNumbers }),
                ...(v.webLinks === undefined ? null : { webLinks: v.webLinks }),
                ...(v.registrationNumber === undefined
                    ? null
                    : { registrationNumber: v.registrationNumber }),
                ...(v.baseCurrency === undefined ? null : { baseCurrency: v.baseCurrency }),
                ...(v.accountBalances === undefined
                    ? null
                    : { accountBalances: v.accountBalances }),
                ...(v.sourceUrls === undefined ? null : { sourceUrls: v.sourceUrls }),
                ...(v.createdDate === undefined ? null : { createdDate: v.createdDate }),
            };
        });

    export type Outbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        companyName?: string | undefined;
        commercePlatformRef?: string | undefined;
        companyLegalName?: string | undefined;
        addresses?: Array<CommerceAddress$.Outbound> | undefined;
        phoneNumbers?: Array<PhoneNumber$.Outbound> | undefined;
        webLinks?: Array<WebLink$.Outbound> | undefined;
        registrationNumber?: string | undefined;
        baseCurrency?: string | undefined;
        accountBalances?: Array<AccountBalance$.Outbound> | undefined;
        sourceUrls?: Record<string, string> | undefined;
        createdDate?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CommerceCompanyInfo> = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            companyName: z.string().optional(),
            commercePlatformRef: z.string().optional(),
            companyLegalName: z.string().optional(),
            addresses: z.array(CommerceAddress$.outboundSchema).optional(),
            phoneNumbers: z.array(PhoneNumber$.outboundSchema).optional(),
            webLinks: z.array(WebLink$.outboundSchema).optional(),
            registrationNumber: z.string().optional(),
            baseCurrency: z.string().optional(),
            accountBalances: z.array(AccountBalance$.outboundSchema).optional(),
            sourceUrls: z.record(z.string()).optional(),
            createdDate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.commercePlatformRef === undefined
                    ? null
                    : { commercePlatformRef: v.commercePlatformRef }),
                ...(v.companyLegalName === undefined
                    ? null
                    : { companyLegalName: v.companyLegalName }),
                ...(v.addresses === undefined ? null : { addresses: v.addresses }),
                ...(v.phoneNumbers === undefined ? null : { phoneNumbers: v.phoneNumbers }),
                ...(v.webLinks === undefined ? null : { webLinks: v.webLinks }),
                ...(v.registrationNumber === undefined
                    ? null
                    : { registrationNumber: v.registrationNumber }),
                ...(v.baseCurrency === undefined ? null : { baseCurrency: v.baseCurrency }),
                ...(v.accountBalances === undefined
                    ? null
                    : { accountBalances: v.accountBalances }),
                ...(v.sourceUrls === undefined ? null : { sourceUrls: v.sourceUrls }),
                ...(v.createdDate === undefined ? null : { createdDate: v.createdDate }),
            };
        });
}