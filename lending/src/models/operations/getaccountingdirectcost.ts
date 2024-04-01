/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetAccountingDirectCostRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * Unique identifier for a direct cost.
     */
    directCostId: string;
};

export type GetAccountingDirectCostResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Success
     */
    accountingDirectCost?: components.AccountingDirectCost | null | undefined;
};

/** @internal */
export namespace GetAccountingDirectCostRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        directCostId: string;
    };

    export const inboundSchema: z.ZodType<GetAccountingDirectCostRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            directCostId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                directCostId: v.directCostId,
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        directCostId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAccountingDirectCostRequest> =
        z
            .object({
                companyId: z.string(),
                connectionId: z.string(),
                directCostId: z.string(),
            })
            .transform((v) => {
                return {
                    companyId: v.companyId,
                    connectionId: v.connectionId,
                    directCostId: v.directCostId,
                };
            });
}

/** @internal */
export namespace GetAccountingDirectCostResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        AccountingDirectCost?: components.AccountingDirectCost$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<GetAccountingDirectCostResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                AccountingDirectCost: z
                    .nullable(components.AccountingDirectCost$.inboundSchema)
                    .optional(),
            })
            .transform((v) => {
                return {
                    httpMeta: v.HttpMeta,
                    ...(v.AccountingDirectCost === undefined
                        ? null
                        : { accountingDirectCost: v.AccountingDirectCost }),
                };
            });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        AccountingDirectCost?: components.AccountingDirectCost$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAccountingDirectCostResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            accountingDirectCost: z
                .nullable(components.AccountingDirectCost$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.accountingDirectCost === undefined
                    ? null
                    : { AccountingDirectCost: v.accountingDirectCost }),
            };
        });
}