/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The type of the report requested in the query string.
 */
export enum ExcelReportTypes {
    Audit = "audit",
    EnhancedFinancials = "enhancedFinancials",
    EnhancedInvoices = "enhancedInvoices",
    EnhancedCashFlow = "enhancedCashFlow",
}

/** @internal */
export const ExcelReportTypes$ = z.nativeEnum(ExcelReportTypes);
