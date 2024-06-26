/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AccountBalanceAmounts, AccountBalanceAmounts$ } from "./accountbalanceamounts";
import { AccountIdentifiers, AccountIdentifiers$ } from "./accountidentifiers";
import { AccountingBankAccountType, AccountingBankAccountType$ } from "./accountingbankaccounttype";
import { AccountInstitution, AccountInstitution$ } from "./accountinstitution";
import * as z from "zod";

/**
 * This data type provides a list of all the SMB's bank accounts, with rich data like balances, account numbers, and institutions holding the accounts.
 *
 * @remarks
 *
 * Explore our [data coverage](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-accounts).
 *
 * Responses are paged, so you should provide `page` and `pageSize` query parameters in your request.
 */
export type BankingAccount = {
    modifiedDate?: string | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * The ID of the account from the provider.
     */
    id: string;
    /**
     * The name of the account according to the provider.
     */
    name: string;
    /**
     * The friendly name of the account, chosen by the holder. This may not have been set by the account holder and therefore is not always available.
     */
    informalName?: string | null | undefined;
    /**
     * The name of the person or company who holds the account.
     */
    holder?: string | null | undefined;
    /**
     * The type of transactions and balances on the account.
     *
     * @remarks
     * For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.
     * For Debit accounts, positive balances are assets, and positive transactions **increase** assets.
     */
    type: AccountingBankAccountType;
    /**
     * Depending on the data provided by the underlying bank, not all balances are always available.
     */
    balance: AccountBalanceAmounts;
    /**
     * An object containing bank account identification information.
     */
    identifiers: AccountIdentifiers;
    /**
     * The currency code for the account.
     */
    currency: string;
    /**
     * The bank or other financial institution providing the account.
     */
    institution: AccountInstitution;
};

/** @internal */
export namespace BankingAccount$ {
    export type Inbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        id: string;
        name: string;
        informalName?: string | null | undefined;
        holder?: string | null | undefined;
        type: AccountingBankAccountType;
        balance: AccountBalanceAmounts$.Inbound;
        identifiers: AccountIdentifiers$.Inbound;
        currency: string;
        institution: AccountInstitution$.Inbound;
    };

    export const inboundSchema: z.ZodType<BankingAccount, z.ZodTypeDef, Inbound> = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            id: z.string(),
            name: z.string(),
            informalName: z.nullable(z.string()).optional(),
            holder: z.nullable(z.string()).optional(),
            type: AccountingBankAccountType$,
            balance: AccountBalanceAmounts$.inboundSchema,
            identifiers: AccountIdentifiers$.inboundSchema,
            currency: z.string(),
            institution: AccountInstitution$.inboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                id: v.id,
                name: v.name,
                ...(v.informalName === undefined ? null : { informalName: v.informalName }),
                ...(v.holder === undefined ? null : { holder: v.holder }),
                type: v.type,
                balance: v.balance,
                identifiers: v.identifiers,
                currency: v.currency,
                institution: v.institution,
            };
        });

    export type Outbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        id: string;
        name: string;
        informalName?: string | null | undefined;
        holder?: string | null | undefined;
        type: AccountingBankAccountType;
        balance: AccountBalanceAmounts$.Outbound;
        identifiers: AccountIdentifiers$.Outbound;
        currency: string;
        institution: AccountInstitution$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BankingAccount> = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            id: z.string(),
            name: z.string(),
            informalName: z.nullable(z.string()).optional(),
            holder: z.nullable(z.string()).optional(),
            type: AccountingBankAccountType$,
            balance: AccountBalanceAmounts$.outboundSchema,
            identifiers: AccountIdentifiers$.outboundSchema,
            currency: z.string(),
            institution: AccountInstitution$.outboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                id: v.id,
                name: v.name,
                ...(v.informalName === undefined ? null : { informalName: v.informalName }),
                ...(v.holder === undefined ? null : { holder: v.holder }),
                type: v.type,
                balance: v.balance,
                identifiers: v.identifiers,
                currency: v.currency,
                institution: v.institution,
            };
        });
}
