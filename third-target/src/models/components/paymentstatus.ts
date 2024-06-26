/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Status of the payment.
 */
export enum PaymentStatus {
    Pending = "Pending",
    Authorized = "Authorized",
    Paid = "Paid",
    Failed = "Failed",
    Cancelled = "Cancelled",
    Unknown = "Unknown",
}

/** @internal */
export const PaymentStatus$ = z.nativeEnum(PaymentStatus);
