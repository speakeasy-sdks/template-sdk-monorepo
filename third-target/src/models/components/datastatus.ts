/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Available data types
 */
export enum DataTypes {
    AccountTransactions = "accountTransactions",
    BalanceSheet = "balanceSheet",
    BankAccounts = "bankAccounts",
    BankTransactions = "bankTransactions",
    BillCreditNotes = "billCreditNotes",
    BillPayments = "billPayments",
    Bills = "bills",
    CashFlowStatement = "cashFlowStatement",
    ChartOfAccounts = "chartOfAccounts",
    Company = "company",
    CreditNotes = "creditNotes",
    Customers = "customers",
    DirectCosts = "directCosts",
    DirectIncomes = "directIncomes",
    Invoices = "invoices",
    ItemReceipts = "itemReceipts",
    Items = "items",
    JournalEntries = "journalEntries",
    Journals = "journals",
    PaymentMethods = "paymentMethods",
    Payments = "payments",
    ProfitAndLoss = "profitAndLoss",
    PurchaseOrders = "purchaseOrders",
    SalesOrders = "salesOrders",
    Suppliers = "suppliers",
    TaxRates = "taxRates",
    TrackingCategories = "trackingCategories",
    Transfers = "transfers",
    BankingAccountBalances = "banking-accountBalances",
    BankingAccounts = "banking-accounts",
    BankingTransactionCategories = "banking-transactionCategories",
    BankingTransactions = "banking-transactions",
    CommerceCompanyInfo = "commerce-companyInfo",
    CommerceCustomers = "commerce-customers",
    CommerceDisputes = "commerce-disputes",
    CommerceLocations = "commerce-locations",
    CommerceOrders = "commerce-orders",
    CommercePaymentMethods = "commerce-paymentMethods",
    CommercePayments = "commerce-payments",
    CommerceProductCategories = "commerce-productCategories",
    CommerceProducts = "commerce-products",
    CommerceTaxComponents = "commerce-taxComponents",
    CommerceTransactions = "commerce-transactions",
}

/**
 * Describes the state of data in the Codat cache for a company and data type
 */
export type DataStatus = {
    /**
     * Available data types
     */
    dataType: DataTypes;
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
    lastSuccessfulSync: string;
    /**
     * The current status of the dataset in Codat's cache.
     */
    currentStatus: string;
    /**
     * Unique identifier for most recent sync of data type.
     */
    latestSyncId?: string | undefined;
    /**
     * Unique identifier for the most recent successful sync of data type.
     */
    latestSuccessfulSyncId?: string | undefined;
};

/** @internal */
export const DataTypes$ = z.nativeEnum(DataTypes);

/** @internal */
export namespace DataStatus$ {
    export type Inbound = {
        dataType: DataTypes;
        lastSuccessfulSync: string;
        currentStatus: string;
        latestSyncId?: string | undefined;
        latestSuccessfulSyncId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<DataStatus, z.ZodTypeDef, Inbound> = z
        .object({
            dataType: DataTypes$,
            lastSuccessfulSync: z.string(),
            currentStatus: z.string(),
            latestSyncId: z.string().optional(),
            latestSuccessfulSyncId: z.string().optional(),
        })
        .transform((v) => {
            return {
                dataType: v.dataType,
                lastSuccessfulSync: v.lastSuccessfulSync,
                currentStatus: v.currentStatus,
                ...(v.latestSyncId === undefined ? null : { latestSyncId: v.latestSyncId }),
                ...(v.latestSuccessfulSyncId === undefined
                    ? null
                    : { latestSuccessfulSyncId: v.latestSuccessfulSyncId }),
            };
        });

    export type Outbound = {
        dataType: DataTypes;
        lastSuccessfulSync: string;
        currentStatus: string;
        latestSyncId?: string | undefined;
        latestSuccessfulSyncId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DataStatus> = z
        .object({
            dataType: DataTypes$,
            lastSuccessfulSync: z.string(),
            currentStatus: z.string(),
            latestSyncId: z.string().optional(),
            latestSuccessfulSyncId: z.string().optional(),
        })
        .transform((v) => {
            return {
                dataType: v.dataType,
                lastSuccessfulSync: v.lastSuccessfulSync,
                currentStatus: v.currentStatus,
                ...(v.latestSyncId === undefined ? null : { latestSyncId: v.latestSyncId }),
                ...(v.latestSuccessfulSyncId === undefined
                    ? null
                    : { latestSuccessfulSyncId: v.latestSuccessfulSyncId }),
            };
        });
}
