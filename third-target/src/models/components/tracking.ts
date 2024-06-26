/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RecordRef, RecordRef$ } from "./recordref";
import { TrackingRecordRef, TrackingRecordRef$ } from "./trackingrecordref";
import * as z from "zod";

export type Tracking = {
    recordRefs: Array<TrackingRecordRef>;
    /**
     * Links the current record to the underlying record or data type that created it.
     *
     * @remarks
     *
     * For example, if a journal entry is generated based on an invoice, this property allows you to connect the journal entry to the underlying invoice in our data model.
     */
    invoiceTo?: RecordRef | undefined;
};

/** @internal */
export namespace Tracking$ {
    export type Inbound = {
        recordRefs: Array<TrackingRecordRef$.Inbound>;
        invoiceTo?: RecordRef$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<Tracking, z.ZodTypeDef, Inbound> = z
        .object({
            recordRefs: z.array(TrackingRecordRef$.inboundSchema),
            invoiceTo: RecordRef$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                recordRefs: v.recordRefs,
                ...(v.invoiceTo === undefined ? null : { invoiceTo: v.invoiceTo }),
            };
        });

    export type Outbound = {
        recordRefs: Array<TrackingRecordRef$.Outbound>;
        invoiceTo?: RecordRef$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Tracking> = z
        .object({
            recordRefs: z.array(TrackingRecordRef$.outboundSchema),
            invoiceTo: RecordRef$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                recordRefs: v.recordRefs,
                ...(v.invoiceTo === undefined ? null : { invoiceTo: v.invoiceTo }),
            };
        });
}
