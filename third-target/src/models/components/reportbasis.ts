/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The basis of a report.
 */
export enum ReportBasis {
    Unknown = "Unknown",
    Accrual = "Accrual",
    Cash = "Cash",
}

/** @internal */
export const ReportBasis$ = z.nativeEnum(ReportBasis);
