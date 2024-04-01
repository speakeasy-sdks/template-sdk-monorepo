/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Name of underlying data type.
 */
export enum TrackingRecordRefDataType {
    Customers = "customers",
    Suppliers = "suppliers",
    TrackingCategories = "trackingCategories",
}

/**
 * Links to the customer or tracking category.
 */
export type TrackingRecordRef = {
    /**
     * Name of underlying data type.
     */
    dataType?: TrackingRecordRefDataType | undefined;
    /**
     * 'id' of the underlying record or data type.
     */
    id?: string | undefined;
};

/** @internal */
export const TrackingRecordRefDataType$ = z.nativeEnum(TrackingRecordRefDataType);

/** @internal */
export namespace TrackingRecordRef$ {
    export type Inbound = {
        dataType?: TrackingRecordRefDataType | undefined;
        id?: string | undefined;
    };

    export const inboundSchema: z.ZodType<TrackingRecordRef, z.ZodTypeDef, Inbound> = z
        .object({
            dataType: TrackingRecordRefDataType$.optional(),
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        dataType?: TrackingRecordRefDataType | undefined;
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TrackingRecordRef> = z
        .object({
            dataType: TrackingRecordRefDataType$.optional(),
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}