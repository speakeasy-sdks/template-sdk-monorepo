/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PushChangeType, PushChangeType$ } from "./pushchangetype";
import { PushOperationRef, PushOperationRef$ } from "./pushoperationref";
import * as z from "zod";

export type PushOperationChange = {
    /**
     * Type of change being applied to record in third party platform.
     */
    type?: PushChangeType | undefined;
    recordRef?: PushOperationRef | undefined;
    /**
     * Unique identifier for the attachment created otherwise null.
     */
    attachmentId?: string | null | undefined;
};

/** @internal */
export namespace PushOperationChange$ {
    export type Inbound = {
        type?: PushChangeType | undefined;
        recordRef?: PushOperationRef$.Inbound | undefined;
        attachmentId?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<PushOperationChange, z.ZodTypeDef, Inbound> = z
        .object({
            type: PushChangeType$.optional(),
            recordRef: PushOperationRef$.inboundSchema.optional(),
            attachmentId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.recordRef === undefined ? null : { recordRef: v.recordRef }),
                ...(v.attachmentId === undefined ? null : { attachmentId: v.attachmentId }),
            };
        });

    export type Outbound = {
        type?: PushChangeType | undefined;
        recordRef?: PushOperationRef$.Outbound | undefined;
        attachmentId?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PushOperationChange> = z
        .object({
            type: PushChangeType$.optional(),
            recordRef: PushOperationRef$.outboundSchema.optional(),
            attachmentId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.recordRef === undefined ? null : { recordRef: v.recordRef }),
                ...(v.attachmentId === undefined ? null : { attachmentId: v.attachmentId }),
            };
        });
}
