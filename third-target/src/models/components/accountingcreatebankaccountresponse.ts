/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Decimal as Decimal$ } from "../../types";
import { AccountingBankAccountType, AccountingBankAccountType$ } from "./accountingbankaccounttype";
import { Metadata, Metadata$ } from "./metadata";
import { PropertieDataType, PropertieDataType$ } from "./propertiedatatype";
import { PushOperationChange, PushOperationChange$ } from "./pushoperationchange";
import { PushOperationStatus, PushOperationStatus$ } from "./pushoperationstatus";
import { SupplementalData, SupplementalData$ } from "./supplementaldata";
import { Validation, Validation$ } from "./validation";
import * as z from "zod";

/**
 * > **Accessing Bank Accounts through Banking API**
 *
 * @remarks
 * >
 * > This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators.
 * >
 * > To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/lending-api#/schemas/Account)
 *
 * > View the coverage for bank accounts in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * A list of bank accounts associated with a company and a specific data connection.
 *
 * Bank accounts data includes:
 * * The name and ID of the account in the accounting platform.
 * * The currency and balance of the account.
 * * The sort code and account number.
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type AccountingCreateBankAccountResponseAccountingBankAccount = {
    modifiedDate?: string | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * Identifier for the account, unique for the company in the accounting platform.
     */
    id?: string | undefined;
    /**
     * Name of the bank account in the accounting platform.
     */
    accountName?: string | null | undefined;
    /**
     * The type of transactions and balances on the account.
     *
     * @remarks
     * For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.
     * For Debit accounts, positive balances are assets, and positive transactions **increase** assets.
     */
    accountType?: AccountingBankAccountType | undefined;
    /**
     * Code used to identify each nominal account for a business.
     */
    nominalCode?: string | null | undefined;
    /**
     * Sort code for the bank account.
     *
     * @remarks
     *
     * Xero integrations
     * The sort code is only displayed when the currency = GBP and the sort code and account number sum to 14 digits. For non-GBP accounts, this field is not populated.
     */
    sortCode?: string | null | undefined;
    /**
     * Account number for the bank account.
     *
     * @remarks
     *
     * Xero integrations
     * Only a UK account number shows for bank accounts with GBP currency and a combined total of sort code and account number that equals 14 digits, For non-GBP accounts, the full bank account number is populated.
     *
     * FreeAgent integrations
     * For Credit accounts, only the last four digits are required. For other types, the field is optional.
     */
    accountNumber?: string | null | undefined;
    /**
     * International bank account number of the account. Often used when making or receiving international payments.
     */
    iBan?: string | null | undefined;
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
     * Balance of the bank account.
     */
    balance?: Decimal$ | number | null | undefined;
    /**
     * The institution of the bank account.
     */
    institution?: string | null | undefined;
    /**
     * Total available balance of the bank account as reported by the underlying data source. This may take into account overdrafts or pending transactions for example.
     */
    availableBalance?: Decimal$ | number | null | undefined;
    /**
     * Pre-arranged overdraft limit of the account.
     *
     * @remarks
     *
     * The value is always positive. For example, an overdraftLimit of `1000` means that the balance of the account can go down to `-1000`.
     */
    overdraftLimit?: Decimal$ | number | null | undefined;
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

export type AccountingCreateBankAccountResponse = {
    data?: AccountingCreateBankAccountResponseAccountingBankAccount | null | undefined;
    /**
     * Contains a single entry that communicates which record has changed and the manner in which it changed.
     */
    changes?: Array<PushOperationChange> | null | undefined;
    /**
     * Available data types
     */
    dataType?: PropertieDataType | undefined;
    /**
     * Unique identifier for your SMB in Codat.
     */
    companyId: string;
    /**
     * A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.
     */
    pushOperationKey: string;
    /**
     * Unique identifier for a company's data connection.
     */
    dataConnectionKey: string;
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
    requestedOnUtc: string;
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
    completedOnUtc?: string | undefined;
    /**
     * Number of minutes the push operation must complete within before it times out.
     */
    timeoutInMinutes?: number | null | undefined;
    /**
     * Number of seconds the push operation must complete within before it times out.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    timeoutInSeconds?: number | null | undefined;
    /**
     * The current status of the push operation.
     */
    status: PushOperationStatus;
    /**
     * A message about the error.
     */
    errorMessage?: string | null | undefined;
    /**
     * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
     */
    validation?: Validation | undefined;
    /**
     * Push status code.
     */
    statusCode: number;
};

/** @internal */
export namespace AccountingCreateBankAccountResponseAccountingBankAccount$ {
    export type Inbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        id?: string | undefined;
        accountName?: string | null | undefined;
        accountType?: AccountingBankAccountType | undefined;
        nominalCode?: string | null | undefined;
        sortCode?: string | null | undefined;
        accountNumber?: string | null | undefined;
        iBan?: string | null | undefined;
        currency?: string | undefined;
        balance?: number | null | undefined;
        institution?: string | null | undefined;
        availableBalance?: number | null | undefined;
        overdraftLimit?: number | null | undefined;
        metadata?: Metadata$.Inbound | undefined;
        supplementalData?: SupplementalData$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        AccountingCreateBankAccountResponseAccountingBankAccount,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            id: z.string().optional(),
            accountName: z.nullable(z.string()).optional(),
            accountType: AccountingBankAccountType$.optional(),
            nominalCode: z.nullable(z.string()).optional(),
            sortCode: z.nullable(z.string()).optional(),
            accountNumber: z.nullable(z.string()).optional(),
            iBan: z.nullable(z.string()).optional(),
            currency: z.string().optional(),
            balance: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            institution: z.nullable(z.string()).optional(),
            availableBalance: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
            overdraftLimit: z.nullable(z.number().transform((v) => new Decimal$(v))).optional(),
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
                ...(v.accountName === undefined ? null : { accountName: v.accountName }),
                ...(v.accountType === undefined ? null : { accountType: v.accountType }),
                ...(v.nominalCode === undefined ? null : { nominalCode: v.nominalCode }),
                ...(v.sortCode === undefined ? null : { sortCode: v.sortCode }),
                ...(v.accountNumber === undefined ? null : { accountNumber: v.accountNumber }),
                ...(v.iBan === undefined ? null : { iBan: v.iBan }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.balance === undefined ? null : { balance: v.balance }),
                ...(v.institution === undefined ? null : { institution: v.institution }),
                ...(v.availableBalance === undefined
                    ? null
                    : { availableBalance: v.availableBalance }),
                ...(v.overdraftLimit === undefined ? null : { overdraftLimit: v.overdraftLimit }),
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
        accountName?: string | null | undefined;
        accountType?: AccountingBankAccountType | undefined;
        nominalCode?: string | null | undefined;
        sortCode?: string | null | undefined;
        accountNumber?: string | null | undefined;
        iBan?: string | null | undefined;
        currency?: string | undefined;
        balance?: number | null | undefined;
        institution?: string | null | undefined;
        availableBalance?: number | null | undefined;
        overdraftLimit?: number | null | undefined;
        metadata?: Metadata$.Outbound | undefined;
        supplementalData?: SupplementalData$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AccountingCreateBankAccountResponseAccountingBankAccount
    > = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            id: z.string().optional(),
            accountName: z.nullable(z.string()).optional(),
            accountType: AccountingBankAccountType$.optional(),
            nominalCode: z.nullable(z.string()).optional(),
            sortCode: z.nullable(z.string()).optional(),
            accountNumber: z.nullable(z.string()).optional(),
            iBan: z.nullable(z.string()).optional(),
            currency: z.string().optional(),
            balance: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            institution: z.nullable(z.string()).optional(),
            availableBalance: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
            overdraftLimit: z
                .nullable(
                    z
                        .union([z.instanceof(Decimal$), z.number()])
                        .transform((v) => (typeof v === "number" ? v : v.toNumber()))
                )
                .optional(),
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
                ...(v.accountName === undefined ? null : { accountName: v.accountName }),
                ...(v.accountType === undefined ? null : { accountType: v.accountType }),
                ...(v.nominalCode === undefined ? null : { nominalCode: v.nominalCode }),
                ...(v.sortCode === undefined ? null : { sortCode: v.sortCode }),
                ...(v.accountNumber === undefined ? null : { accountNumber: v.accountNumber }),
                ...(v.iBan === undefined ? null : { iBan: v.iBan }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.balance === undefined ? null : { balance: v.balance }),
                ...(v.institution === undefined ? null : { institution: v.institution }),
                ...(v.availableBalance === undefined
                    ? null
                    : { availableBalance: v.availableBalance }),
                ...(v.overdraftLimit === undefined ? null : { overdraftLimit: v.overdraftLimit }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.supplementalData === undefined
                    ? null
                    : { supplementalData: v.supplementalData }),
            };
        });
}

/** @internal */
export namespace AccountingCreateBankAccountResponse$ {
    export type Inbound = {
        data?: AccountingCreateBankAccountResponseAccountingBankAccount$.Inbound | null | undefined;
        changes?: Array<PushOperationChange$.Inbound> | null | undefined;
        dataType?: PropertieDataType | undefined;
        companyId: string;
        pushOperationKey: string;
        dataConnectionKey: string;
        requestedOnUtc: string;
        completedOnUtc?: string | undefined;
        timeoutInMinutes?: number | null | undefined;
        timeoutInSeconds?: number | null | undefined;
        status: PushOperationStatus;
        errorMessage?: string | null | undefined;
        validation?: Validation$.Inbound | undefined;
        statusCode: number;
    };

    export const inboundSchema: z.ZodType<
        AccountingCreateBankAccountResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            data: z
                .nullable(
                    z.lazy(
                        () =>
                            AccountingCreateBankAccountResponseAccountingBankAccount$.inboundSchema
                    )
                )
                .optional(),
            changes: z.nullable(z.array(PushOperationChange$.inboundSchema)).optional(),
            dataType: PropertieDataType$.optional(),
            companyId: z.string(),
            pushOperationKey: z.string(),
            dataConnectionKey: z.string(),
            requestedOnUtc: z.string(),
            completedOnUtc: z.string().optional(),
            timeoutInMinutes: z.nullable(z.number().int()).optional(),
            timeoutInSeconds: z.nullable(z.number().int()).optional(),
            status: PushOperationStatus$,
            errorMessage: z.nullable(z.string()).optional(),
            validation: Validation$.inboundSchema.optional(),
            statusCode: z.number().int(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.changes === undefined ? null : { changes: v.changes }),
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
                companyId: v.companyId,
                pushOperationKey: v.pushOperationKey,
                dataConnectionKey: v.dataConnectionKey,
                requestedOnUtc: v.requestedOnUtc,
                ...(v.completedOnUtc === undefined ? null : { completedOnUtc: v.completedOnUtc }),
                ...(v.timeoutInMinutes === undefined
                    ? null
                    : { timeoutInMinutes: v.timeoutInMinutes }),
                ...(v.timeoutInSeconds === undefined
                    ? null
                    : { timeoutInSeconds: v.timeoutInSeconds }),
                status: v.status,
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                ...(v.validation === undefined ? null : { validation: v.validation }),
                statusCode: v.statusCode,
            };
        });

    export type Outbound = {
        data?:
            | AccountingCreateBankAccountResponseAccountingBankAccount$.Outbound
            | null
            | undefined;
        changes?: Array<PushOperationChange$.Outbound> | null | undefined;
        dataType?: PropertieDataType | undefined;
        companyId: string;
        pushOperationKey: string;
        dataConnectionKey: string;
        requestedOnUtc: string;
        completedOnUtc?: string | undefined;
        timeoutInMinutes?: number | null | undefined;
        timeoutInSeconds?: number | null | undefined;
        status: PushOperationStatus;
        errorMessage?: string | null | undefined;
        validation?: Validation$.Outbound | undefined;
        statusCode: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AccountingCreateBankAccountResponse
    > = z
        .object({
            data: z
                .nullable(
                    z.lazy(
                        () =>
                            AccountingCreateBankAccountResponseAccountingBankAccount$.outboundSchema
                    )
                )
                .optional(),
            changes: z.nullable(z.array(PushOperationChange$.outboundSchema)).optional(),
            dataType: PropertieDataType$.optional(),
            companyId: z.string(),
            pushOperationKey: z.string(),
            dataConnectionKey: z.string(),
            requestedOnUtc: z.string(),
            completedOnUtc: z.string().optional(),
            timeoutInMinutes: z.nullable(z.number().int()).optional(),
            timeoutInSeconds: z.nullable(z.number().int()).optional(),
            status: PushOperationStatus$,
            errorMessage: z.nullable(z.string()).optional(),
            validation: Validation$.outboundSchema.optional(),
            statusCode: z.number().int(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.changes === undefined ? null : { changes: v.changes }),
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
                companyId: v.companyId,
                pushOperationKey: v.pushOperationKey,
                dataConnectionKey: v.dataConnectionKey,
                requestedOnUtc: v.requestedOnUtc,
                ...(v.completedOnUtc === undefined ? null : { completedOnUtc: v.completedOnUtc }),
                ...(v.timeoutInMinutes === undefined
                    ? null
                    : { timeoutInMinutes: v.timeoutInMinutes }),
                ...(v.timeoutInSeconds === undefined
                    ? null
                    : { timeoutInSeconds: v.timeoutInSeconds }),
                status: v.status,
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                ...(v.validation === undefined ? null : { validation: v.validation }),
                statusCode: v.statusCode,
            };
        });
}
