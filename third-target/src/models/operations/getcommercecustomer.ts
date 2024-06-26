/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetCommerceCustomerRequest = {
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
};

export type GetCommerceCustomerResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    commerceCustomer?: components.CommerceCustomer | null | undefined;
};

/** @internal */
export namespace GetCommerceCustomerRequest$ {
    export type Inbound = {
        companyId: string;
        connectionId: string;
        customerId: string;
    };

    export const inboundSchema: z.ZodType<GetCommerceCustomerRequest, z.ZodTypeDef, Inbound> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            customerId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                customerId: v.customerId,
            };
        });

    export type Outbound = {
        companyId: string;
        connectionId: string;
        customerId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCommerceCustomerRequest> = z
        .object({
            companyId: z.string(),
            connectionId: z.string(),
            customerId: z.string(),
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                connectionId: v.connectionId,
                customerId: v.customerId,
            };
        });
}

/** @internal */
export namespace GetCommerceCustomerResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        CommerceCustomer?: components.CommerceCustomer$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<GetCommerceCustomerResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            CommerceCustomer: z.nullable(components.CommerceCustomer$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.CommerceCustomer === undefined
                    ? null
                    : { commerceCustomer: v.CommerceCustomer }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        CommerceCustomer?: components.CommerceCustomer$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCommerceCustomerResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            commerceCustomer: z.nullable(components.CommerceCustomer$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.commerceCustomer === undefined
                    ? null
                    : { CommerceCustomer: v.commerceCustomer }),
            };
        });
}
