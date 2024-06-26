/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetAccountingCustomerAttachmentRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * Unique identifier for a customer.
     */
    customerId: string;
    /**
     * Unique identifier for an attachment.
     */
    attachmentId: string;
};

export type GetAccountingCustomerAttachmentResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Success
     */
    accountingAttachment?: components.AccountingAttachment | null | undefined;
};

/** @internal */
export namespace GetAccountingCustomerAttachmentRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        customerId: string;
        attachmentId: string;
    };

    export const inboundSchema: z.ZodType<
        GetAccountingCustomerAttachmentRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            customerId: z.string(),
            attachmentId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                customerId: v.customerId,
                attachmentId: v.attachmentId,
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        customerId: string;
        attachmentId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAccountingCustomerAttachmentRequest
    > = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            customerId: z.string(),
            attachmentId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                customerId: v.customerId,
                attachmentId: v.attachmentId,
            };
        });
}

/** @internal */
export namespace GetAccountingCustomerAttachmentResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        AccountingAttachment?: components.AccountingAttachment$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetAccountingCustomerAttachmentResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            AccountingAttachment: z
                .nullable(components.AccountingAttachment$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.AccountingAttachment === undefined
                    ? null
                    : { accountingAttachment: v.AccountingAttachment }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        AccountingAttachment?: components.AccountingAttachment$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAccountingCustomerAttachmentResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            accountingAttachment: z
                .nullable(components.AccountingAttachment$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.accountingAttachment === undefined
                    ? null
                    : { AccountingAttachment: v.accountingAttachment }),
            };
        });
}
