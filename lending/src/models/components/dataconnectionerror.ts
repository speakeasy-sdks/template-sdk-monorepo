/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DataConnectionError = {
    /**
     * The HTTP status code returned by the error.
     */
    statusCode?: string | undefined;
    /**
     * A non-numeric status code/text.
     */
    statusText?: string | undefined;
    /**
     * A brief message about the error.
     */
    errorMessage?: string | undefined;
    /**
     * In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:
     *
     * @remarks
     *
     * ```
     * 2020-10-08T22:40:50Z
     * 2021-01-01T00:00:00
     * ```
     *
     *
     *
     * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
     *
     * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
     * - Unqualified local time: `2021-11-15T01:00:00`
     * - UTC time offsets: `2021-11-15T01:00:00-05:00`
     *
     * > Time zones
     * >
     * > Not all dates from Codat will contain information about time zones.
     * > Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
     */
    erroredOnUtc?: string | undefined;
};

/** @internal */
export namespace DataConnectionError$ {
    export type Inbound = {
        statusCode?: string | undefined;
        statusText?: string | undefined;
        errorMessage?: string | undefined;
        erroredOnUtc?: string | undefined;
    };

    export const inboundSchema: z.ZodType<DataConnectionError, z.ZodTypeDef, Inbound> = z
        .object({
            statusCode: z.string().optional(),
            statusText: z.string().optional(),
            errorMessage: z.string().optional(),
            erroredOnUtc: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.statusCode === undefined ? null : { statusCode: v.statusCode }),
                ...(v.statusText === undefined ? null : { statusText: v.statusText }),
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                ...(v.erroredOnUtc === undefined ? null : { erroredOnUtc: v.erroredOnUtc }),
            };
        });

    export type Outbound = {
        statusCode?: string | undefined;
        statusText?: string | undefined;
        errorMessage?: string | undefined;
        erroredOnUtc?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DataConnectionError> = z
        .object({
            statusCode: z.string().optional(),
            statusText: z.string().optional(),
            errorMessage: z.string().optional(),
            erroredOnUtc: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.statusCode === undefined ? null : { statusCode: v.statusCode }),
                ...(v.statusText === undefined ? null : { statusText: v.statusText }),
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                ...(v.erroredOnUtc === undefined ? null : { erroredOnUtc: v.erroredOnUtc }),
            };
        });
}
