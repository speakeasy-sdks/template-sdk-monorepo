/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountingCustomerRef } from "./accountingcustomerref";
import { DataType } from "./datatype";
import { InvoiceLineItem } from "./invoicelineitem";
import { InvoiceStatus } from "./invoicestatus";
import { Metadata } from "./metadata";
import { PaymentAllocationItems } from "./paymentallocationitems";
import { PushOperationChange } from "./pushoperationchange";
import { PushOperationStatus } from "./pushoperationstatus";
import { SalesOrderRef } from "./salesorderref";
import { SupplementalData } from "./supplementaldata";
import { Validation } from "./validation";
import { WithholdingTaxItems } from "./withholdingtaxitems";
import { Expose, Type } from "class-transformer";

/**
 * > **Invoices or bills?**
 *
 * @remarks
 * >
 * > We distinguish between invoices where the company *owes money* vs. *is owed money*. If the company issued an invoice, and is owed money (accounts receivable) we call this an Invoice.
 * >
 * > See [Bills](https://docs.codat.io/accounting-api#/schemas/Bill) for the accounts payable equivalent of bills.
 *
 * View the coverage for invoices in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices" target="_blank">Data coverage explorer</a>.
 *
 * ## Overview
 *
 * An invoice is an itemized record of goods sold or services provided to a [customer](https://docs.codat.io/accounting-api#/schemas/Customer).
 *
 * In Codat, an invoice contains details of:
 *
 * - The timeline of the invoice—when it was raised, marked as paid, last edited, and so on.
 * - How much the invoice is for, what portion of the invoice is tax or discounts, and what currency the amounts are represented in.
 * - Who the invoice has been raised to; the _customer_.
 * - The breakdown of what the invoice is for; the _line items_.
 * - Any [payments](https://docs.codat.io/accounting-api#/schemas/Payment) assigned to the invoice; the _payment allocations_.
 *
 * > **Invoice PDF downloads**
 * >
 * > You can <a className="external" href="https://docs.codat.io/accounting-api#/operations/get-invoice-pdf" target="_blank">download a PDF version</a> of an invoice for supported integrations.
 * >
 * > The filename will be invoice-{number}.pdf.
 *
 * > **Referencing an invoice in Sage 50 and ClearBooks**
 * >
 * > In Sage 50 and ClearBooks, you may prefer to use the **invoiceNumber** to identify an invoice rather than the invoice **id**. Each time a draft invoice is submitted or printed, the draft **id** becomes void and a submitted invoice with a new **id** exists in its place. In both platforms, the **invoiceNumber** should remain the same.
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export class AccountingInvoice extends SpeakeasyBase {
    /**
     * Additional tax amount applied to invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "additionalTaxAmount" })
    additionalTaxAmount?: number;

    /**
     * Percentage rate of any additional tax applied to the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "additionalTaxPercentage" })
    additionalTaxPercentage?: number;

    /**
     * Amount outstanding on the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amountDue" })
    amountDue: number;

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

    /**
     * Rate to convert the total amount of the payment into the base currency for the company at the time of the payment.
     *
     * @remarks
     *
     * Currency rates in Codat are implemented as the multiple of foreign currency units to each base currency unit.
     *
     * It is not possible to perform the currency conversion with two or more non-base currencies participating in the transaction. For example, if a company's base currency is USD, and it has a bill issued in EUR, then the bill payment must happen in USD or EUR.
     *
     * Where the currency rate is provided by the underlying accounting platform, it will be available from Codat with the same precision (up to a maximum of 9 decimal places).
     *
     * For accounting platforms which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.
     *
     * ## Examples with base currency of GBP
     *
     * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (GBP) |
     * | :--------------- | :------------- | :------------ | :------------------------- |
     * | **USD**          | $20            | 0.781         | £15.62                     |
     * | **EUR**          | €20            | 0.885         | £17.70                     |
     * | **RUB**          | ₽20            | 0.011         | £0.22                      |
     *
     * ## Examples with base currency of USD
     *
     * | Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (USD) |
     * | :--------------- | :------------- | :------------ | :------------------------- |
     * | **GBP**          | £20            | 1.277         | $25.54                     |
     * | **EUR**          | €20            | 1.134         | $22.68                     |
     * | **RUB**          | ₽20            | 0.015         | $0.30                      |
     *
     *
     * ### Integration-specific details
     *
     * | Integration       | Scenario                                        | System behavior                                                                                                                                                      |
     * |-------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
     * | QuickBooks Online | Transaction currency differs from base currency | If currency rate value is left `null`, a rate of 1 will be used by QBO by default. To override this, include the required currency rate in the expense transaction.  |
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currencyRate" })
    currencyRate?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "customerRef" })
    @Type(() => AccountingCustomerRef)
    customerRef?: AccountingCustomerRef;

    /**
     * Percentage rate (from 0 to 100) of discounts applied to the invoice. For example: A 5% discount will return a value of `5`, not `0.05`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "discountPercentage" })
    discountPercentage?: number;

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
     * Identifier for the invoice, unique to the company in the accounting platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Friendly reference for the invoice. If available, this appears in the file name of invoice attachments.
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
    issueDate: string;

    /**
     * An array of line items.
     */
    @SpeakeasyMetadata({ elemType: InvoiceLineItem })
    @Expose({ name: "lineItems" })
    @Type(() => InvoiceLineItem)
    lineItems?: InvoiceLineItem[];

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => Metadata)
    metadata?: Metadata;

    @SpeakeasyMetadata()
    @Expose({ name: "modifiedDate" })
    modifiedDate?: string;

    /**
     * Any additional information about the invoice. Where possible, Codat links to a data field in the accounting platform that is publicly available. This means that the contents of the note field are included when an invoice is emailed from the accounting platform to the customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "note" })
    note?: string;

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

    /**
     * An array of payment allocations.
     */
    @SpeakeasyMetadata({ elemType: PaymentAllocationItems })
    @Expose({ name: "paymentAllocations" })
    @Type(() => PaymentAllocationItems)
    paymentAllocations?: PaymentAllocationItems[];

    /**
     * List of references to related Sales orders.
     */
    @SpeakeasyMetadata({ elemType: SalesOrderRef })
    @Expose({ name: "salesOrderRefs" })
    @Type(() => SalesOrderRef)
    salesOrderRefs?: SalesOrderRef[];

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
    status: InvoiceStatus;

    /**
     * Total amount of the invoice excluding any taxes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subTotal" })
    subTotal?: number;

    /**
     * Supplemental data is additional data you can include in our standard data types.
     *
     * @remarks
     *
     * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "supplementalData" })
    @Type(() => SupplementalData)
    supplementalData?: SupplementalData;

    /**
     * Amount of the invoice, inclusive of tax.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAmount" })
    totalAmount: number;

    /**
     * Numerical value of discounts applied to the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalDiscount" })
    totalDiscount?: number;

    /**
     * Amount of tax on the invoice.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalTaxAmount" })
    totalTaxAmount: number;

    @SpeakeasyMetadata({ elemType: WithholdingTaxItems })
    @Expose({ name: "withholdingTax" })
    @Type(() => WithholdingTaxItems)
    withholdingTax?: WithholdingTaxItems[];
}

export class CreateInvoiceResponse extends SpeakeasyBase {
    /**
     * Contains a single entry that communicates which record has changed and the manner in which it changed.
     */
    @SpeakeasyMetadata({ elemType: PushOperationChange })
    @Expose({ name: "changes" })
    @Type(() => PushOperationChange)
    changes?: PushOperationChange[];

    /**
     * Unique identifier for your SMB in Codat.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyId" })
    companyId: string;

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
    @Expose({ name: "completedOnUtc" })
    completedOnUtc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => AccountingInvoice)
    data?: AccountingInvoice;

    /**
     * Unique identifier for a company's data connection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataConnectionKey" })
    dataConnectionKey: string;

    /**
     * Available Data types
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType?: DataType;

    /**
     * A message about the error.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "errorMessage" })
    errorMessage?: string;

    /**
     * A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pushOperationKey" })
    pushOperationKey: string;

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
    @Expose({ name: "requestedOnUtc" })
    requestedOnUtc: string;

    /**
     * The current status of the push operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: PushOperationStatus;

    /**
     * Push status code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "statusCode" })
    statusCode: number;

    /**
     * Number of minutes the push operation must complete within before it times out.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "timeoutInMinutes" })
    timeoutInMinutes?: number;

    /**
     * Number of seconds the push operation must complete within before it times out.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "timeoutInSeconds" })
    timeoutInSeconds?: number;

    /**
     * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "validation" })
    @Type(() => Validation)
    validation?: Validation;
}
