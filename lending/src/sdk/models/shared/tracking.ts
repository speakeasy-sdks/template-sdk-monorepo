/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RecordRef } from "./recordref";
import { TrackingRecordRef } from "./trackingrecordref";
import { Expose, Type } from "class-transformer";

export class Tracking extends SpeakeasyBase {
    /**
     * Links the current record to the underlying record or data type that created it.
     *
     * @remarks
     *
     * For example, if a journal entry is generated based on an invoice, this property allows you to connect the journal entry to the underlying invoice in our data model.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "invoiceTo" })
    @Type(() => RecordRef)
    invoiceTo?: RecordRef;

    @SpeakeasyMetadata({ elemType: TrackingRecordRef })
    @Expose({ name: "recordRefs" })
    @Type(() => TrackingRecordRef)
    recordRefs: TrackingRecordRef[];
}
