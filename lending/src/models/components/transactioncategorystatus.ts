/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The status of the transaction category.
 */
export enum TransactionCategoryStatus {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived",
}

/** @internal */
export const TransactionCategoryStatus$ = z.nativeEnum(TransactionCategoryStatus);