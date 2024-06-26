/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ErrorValidation, ErrorValidation$ } from "./errorvalidation";
import * as z from "zod";

export type ErrorMessage = {
    /**
     * `True` if the error occurred transiently and can be retried.
     */
    canBeRetried?: string | undefined;
    /**
     * Unique identifier used to propagate to all downstream services and determine the source of the error.
     */
    correlationId?: string | undefined;
    /**
     * Machine readable error code used to automate processes based on the code returned.
     */
    detailedErrorCode?: number | undefined;
    /**
     * A brief description of the error.
     */
    error?: string | undefined;
    /**
     * Codat's service the returned the error.
     */
    service?: string | undefined;
    /**
     * The HTTP status code returned by the error.
     */
    statusCode?: number | undefined;
    /**
     * A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.
     */
    validation?: ErrorValidation | null | undefined;
};

/** @internal */
export namespace ErrorMessage$ {
    export const inboundSchema: z.ZodType<ErrorMessage, z.ZodTypeDef, unknown> = z
        .object({
            canBeRetried: z.string().optional(),
            correlationId: z.string().optional(),
            detailedErrorCode: z.number().int().optional(),
            error: z.string().optional(),
            service: z.string().optional(),
            statusCode: z.number().int().optional(),
            validation: z.nullable(ErrorValidation$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.canBeRetried === undefined ? null : { canBeRetried: v.canBeRetried }),
                ...(v.correlationId === undefined ? null : { correlationId: v.correlationId }),
                ...(v.detailedErrorCode === undefined
                    ? null
                    : { detailedErrorCode: v.detailedErrorCode }),
                ...(v.error === undefined ? null : { error: v.error }),
                ...(v.service === undefined ? null : { service: v.service }),
                ...(v.statusCode === undefined ? null : { statusCode: v.statusCode }),
                ...(v.validation === undefined ? null : { validation: v.validation }),
            };
        });

    export type Outbound = {
        canBeRetried?: string | undefined;
        correlationId?: string | undefined;
        detailedErrorCode?: number | undefined;
        error?: string | undefined;
        service?: string | undefined;
        statusCode?: number | undefined;
        validation?: ErrorValidation$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrorMessage> = z
        .object({
            canBeRetried: z.string().optional(),
            correlationId: z.string().optional(),
            detailedErrorCode: z.number().int().optional(),
            error: z.string().optional(),
            service: z.string().optional(),
            statusCode: z.number().int().optional(),
            validation: z.nullable(ErrorValidation$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.canBeRetried === undefined ? null : { canBeRetried: v.canBeRetried }),
                ...(v.correlationId === undefined ? null : { correlationId: v.correlationId }),
                ...(v.detailedErrorCode === undefined
                    ? null
                    : { detailedErrorCode: v.detailedErrorCode }),
                ...(v.error === undefined ? null : { error: v.error }),
                ...(v.service === undefined ? null : { service: v.service }),
                ...(v.statusCode === undefined ? null : { statusCode: v.statusCode }),
                ...(v.validation === undefined ? null : { validation: v.validation }),
            };
        });
}
