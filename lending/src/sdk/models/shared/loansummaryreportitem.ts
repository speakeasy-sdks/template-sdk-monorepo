/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LoanSummaryRecordRef } from "./loansummaryrecordref";
import { Expose, Type } from "class-transformer";

export class LoanSummaryReportItem extends SpeakeasyBase {
    /**
     * The loan outstanding balance.  This may not equal totalDrawdowns - totalRepayments due to interest which has been accrued.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "balance" })
    balance?: number;

    /**
     * The description of the object being referred to. E.g. the account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * The name of lender providing the loan.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lenderName" })
    lenderName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "recordRef" })
    @Type(() => LoanSummaryRecordRef)
    recordRef?: LoanSummaryRecordRef;

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
    @Expose({ name: "startDate" })
    startDate?: string;

    /**
     * The total loan drawdowns.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalDrawdowns" })
    totalDrawdowns?: number;

    /**
     * The total loan repayments which includes capital plus any interest.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalRepayments" })
    totalRepayments?: number;
}
