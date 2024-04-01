/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetAccountingInvoiceAttachmentRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * Unique identifier for a connection.
     */
    connectionId: string;
    /**
     * Unique identifier for an invoice.
     */
    invoiceId: string;
    /**
     * Unique identifier for an attachment.
     */
    attachmentId: string;
};

export type GetAccountingInvoiceAttachmentResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Success
     */
    accountingAttachment?: components.AccountingAttachment | null | undefined;
};

/** @internal */
export namespace GetAccountingInvoiceAttachmentRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        invoiceId: string;
        attachmentId: string;
    };

    export const inboundSchema: z.ZodType<
        GetAccountingInvoiceAttachmentRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            invoiceId: z.string(),
            attachmentId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                invoiceId: v.invoiceId,
                attachmentId: v.attachmentId,
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        invoiceId: string;
        attachmentId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAccountingInvoiceAttachmentRequest
    > = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            invoiceId: z.string(),
            attachmentId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                invoiceId: v.invoiceId,
                attachmentId: v.attachmentId,
            };
        });
}

/** @internal */
export namespace GetAccountingInvoiceAttachmentResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        AccountingAttachment?: components.AccountingAttachment$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetAccountingInvoiceAttachmentResponse,
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
        GetAccountingInvoiceAttachmentResponse
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
