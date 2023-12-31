/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InvoiceStatus } from "./invoicestatus";
import { LendingCustomerRef } from "./lendingcustomerref";
import { Payment } from "./payment";
import { Expose, Type } from "class-transformer";

export class EnhancedInvoiceReportItem extends SpeakeasyBase {
    /**
     * Invoice's total amount due.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amountDue" })
    amountDue?: number;

    /**
     * The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.
     *
     * @remarks
     *
     * ## Unknown currencies
     *
     * In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.
     *
     * There are only a very small number of edge cases where this currency code is returned by the Codat system.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "customerRef" })
    @Type(() => LendingCustomerRef)
    customerRef?: LendingCustomerRef;

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
    @SpeakeasyMetadata()
    @Expose({ name: "dueDate" })
    dueDate?: string;

    /**
     * ID of the invoice, which may be a GUID but it may be something else depending on the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Invoice number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "invoiceNumber" })
    invoiceNumber?: string;

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
    @SpeakeasyMetadata()
    @Expose({ name: "issueDate" })
    issueDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "modifiedDate" })
    modifiedDate?: string;

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
    @SpeakeasyMetadata()
    @Expose({ name: "paidOnDate" })
    paidOnDate?: string;

    @SpeakeasyMetadata({ elemType: Payment })
    @Expose({ name: "payments" })
    @Type(() => Payment)
    payments?: Payment[];

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;

    /**
     * Current state of the invoice:
     *
     * @remarks
     *
     * - `Draft` - Invoice hasn't been submitted to the supplier. It may be in a pending state or is scheduled for future submission, for example by email.
     * - `Submitted` - Invoice is no longer a draft. It has been processed and, or, sent to the customer. In this state, it will impact the ledger. It also has no payments made against it (amountDue == totalAmount).
     * - `PartiallyPaid` - The balance paid against the invoice is positive, but less than the total invoice amount (0 < amountDue < totalAmount).
     * - `Paid` - Invoice is paid in full. This includes if the invoice has been credited or overpaid (amountDue == 0).
     * - `Void` - An invoice can become Void when it's deleted, refunded, written off, or cancelled. A voided invoice may still be PartiallyPaid, and so all outstanding amounts on voided invoices are removed from the accounts receivable account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: InvoiceStatus;

    /**
     * Invoice's total amount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAmount" })
    totalAmount?: number;
}
