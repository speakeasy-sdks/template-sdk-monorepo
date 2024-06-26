/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CommerceRecordRef, CommerceRecordRef$ } from "./commercerecordref";
import * as z from "zod";

/**
 * Product categories are used to classify a group of products together, either by type (e.g. "Furniture"), or sometimes by tax profile.
 *
 * @remarks
 *
 * Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-productCategories) for this data type.
 */
export type CommerceProductCategory = {
    modifiedDate?: string | undefined;
    sourceModifiedDate?: string | undefined;
    /**
     * The unique identifier of the product category
     */
    id?: string | undefined;
    /**
     * The name of the product category
     */
    name?: string | undefined;
    /**
     * A collection of parent product categories implicitly ordered with the immediate parent last in the list.
     */
    ancestorRefs?: Array<CommerceRecordRef> | undefined;
    /**
     * A boolean indicating whether there are other product categories beneath this one in the hierarchy.
     */
    hasChildren?: boolean | undefined;
};

/** @internal */
export namespace CommerceProductCategory$ {
    export type Inbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        ancestorRefs?: Array<CommerceRecordRef$.Inbound> | undefined;
        hasChildren?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<CommerceProductCategory, z.ZodTypeDef, Inbound> = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            id: z.string().optional(),
            name: z.string().optional(),
            ancestorRefs: z.array(CommerceRecordRef$.inboundSchema).optional(),
            hasChildren: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.ancestorRefs === undefined ? null : { ancestorRefs: v.ancestorRefs }),
                ...(v.hasChildren === undefined ? null : { hasChildren: v.hasChildren }),
            };
        });

    export type Outbound = {
        modifiedDate?: string | undefined;
        sourceModifiedDate?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        ancestorRefs?: Array<CommerceRecordRef$.Outbound> | undefined;
        hasChildren?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CommerceProductCategory> = z
        .object({
            modifiedDate: z.string().optional(),
            sourceModifiedDate: z.string().optional(),
            id: z.string().optional(),
            name: z.string().optional(),
            ancestorRefs: z.array(CommerceRecordRef$.outboundSchema).optional(),
            hasChildren: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.modifiedDate === undefined ? null : { modifiedDate: v.modifiedDate }),
                ...(v.sourceModifiedDate === undefined
                    ? null
                    : { sourceModifiedDate: v.sourceModifiedDate }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.ancestorRefs === undefined ? null : { ancestorRefs: v.ancestorRefs }),
                ...(v.hasChildren === undefined ? null : { hasChildren: v.hasChildren }),
            };
        });
}
