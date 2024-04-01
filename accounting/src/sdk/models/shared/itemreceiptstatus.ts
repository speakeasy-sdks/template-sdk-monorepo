/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Current status of the item receipt.
 */
export enum ItemReceiptStatus {
    Unknown = "Unknown",
    Draft = "Draft",
    Received = "Received",
    Rejected = "Rejected",
    Void = "Void",
}

/** @internal */
export const ItemReceiptStatus$ = z.nativeEnum(ItemReceiptStatus);