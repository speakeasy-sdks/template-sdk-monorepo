/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetAccountingDirectIncomeRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * Unique identifier for a direct income.
     */
    directIncomeId: string;
};

export type GetAccountingDirectIncomeResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Success
     */
    accountingDirectIncome?: components.AccountingDirectIncome | null | undefined;
};

/** @internal */
export namespace GetAccountingDirectIncomeRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        directIncomeId: string;
    };

    export const inboundSchema: z.ZodType<GetAccountingDirectIncomeRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                companyId: z.string(),
                connectionId: z.string(),
                directIncomeId: z.string(),
            })
            .transform((v) => {
                return {
                    companyId: v.companyId,
                    connectionId: v.connectionId,
                    directIncomeId: v.directIncomeId,
                };
            });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        directIncomeId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAccountingDirectIncomeRequest
    > = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            directIncomeId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                directIncomeId: v.directIncomeId,
            };
        });
}

/** @internal */
export namespace GetAccountingDirectIncomeResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        AccountingDirectIncome?: components.AccountingDirectIncome$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetAccountingDirectIncomeResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            AccountingDirectIncome: z
                .nullable(components.AccountingDirectIncome$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.AccountingDirectIncome === undefined
                    ? null
                    : { accountingDirectIncome: v.AccountingDirectIncome }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        AccountingDirectIncome?: components.AccountingDirectIncome$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAccountingDirectIncomeResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            accountingDirectIncome: z
                .nullable(components.AccountingDirectIncome$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.accountingDirectIncome === undefined
                    ? null
                    : { AccountingDirectIncome: v.accountingDirectIncome }),
            };
        });
}
