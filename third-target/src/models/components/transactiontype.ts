/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The type of the platform transaction:
 *
 * @remarks
 * - `Unknown`
 * - `FailedPayout` — Failed transfer of funds from the seller's merchant account to their bank account.
 * - `Payment` — Credit and debit card payments.
 * - `PaymentFee` — Payment provider's fee on each card payment.
 * - `PaymentFeeRefund` — Payment provider's fee that has been refunded to the seller.
 * - `Payout` — Transfer of funds from the seller's merchant account to their bank account.
 * - `Refund` — Refunds to a customer's credit or debit card.
 * - `Transfer` — Secure transfer of funds to the seller's bank account.
 */
export enum TransactionType {
    Payment = "Payment",
    Refund = "Refund",
    Payout = "Payout",
    FailedPayout = "FailedPayout",
    Transfer = "Transfer",
    PaymentFee = "PaymentFee",
    PaymentFeeRefund = "PaymentFeeRefund",
    Unknown = "Unknown",
}

/** @internal */
export const TransactionType$ = z.nativeEnum(TransactionType);
