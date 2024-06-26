/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetBankingTransactionRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * The unique identifier for a transaction
     */
    transactionId: string;
};

export type GetBankingTransactionResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Success
     */
    bankingTransaction?: components.BankingTransaction | null | undefined;
};

/** @internal */
export namespace GetBankingTransactionRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        transactionId: string;
    };

    export const inboundSchema: z.ZodType<GetBankingTransactionRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            transactionId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                transactionId: v.transactionId,
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        transactionId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBankingTransactionRequest> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            transactionId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                transactionId: v.transactionId,
            };
        });
}

/** @internal */
export namespace GetBankingTransactionResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        BankingTransaction?: components.BankingTransaction$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<GetBankingTransactionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            BankingTransaction: z.nullable(components.BankingTransaction$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.BankingTransaction === undefined
                    ? null
                    : { bankingTransaction: v.BankingTransaction }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        BankingTransaction?: components.BankingTransaction$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBankingTransactionResponse> =
        z
            .object({
                httpMeta: components.HTTPMetadata$.outboundSchema,
                bankingTransaction: z
                    .nullable(components.BankingTransaction$.outboundSchema)
                    .optional(),
            })
            .transform((v) => {
                return {
                    HttpMeta: v.httpMeta,
                    ...(v.bankingTransaction === undefined
                        ? null
                        : { BankingTransaction: v.bankingTransaction }),
                };
            });
}
