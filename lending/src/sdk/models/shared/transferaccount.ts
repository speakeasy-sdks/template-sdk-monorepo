/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountRef } from "./accountref";
import { Expose, Type } from "class-transformer";

/**
 * Account details of the account sending or receiving the transfer.
 */
export class TransferAccount extends SpeakeasyBase {
    /**
     * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountRef" })
    @Type(() => AccountRef)
    accountRef?: AccountRef;

    /**
     * The amount transferred between accounts.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;

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
}