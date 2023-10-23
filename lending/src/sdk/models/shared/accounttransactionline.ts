/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RecordRef } from "./recordref";
import { Expose, Type } from "class-transformer";

export class AccountTransactionLine extends SpeakeasyBase {
    /**
     * Amount in the bill payment currency.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;

    /**
     * Description of the account transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Links the current record to the underlying record or data type that created it.
     *
     * @remarks
     *
     * For example, if a journal entry is generated based on an invoice, this property allows you to connect the journal entry to the underlying invoice in our data model.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recordRef" })
    @Type(() => RecordRef)
    recordRef?: RecordRef;
}