/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TrackingRecordRef } from "./trackingrecordref";
import { Expose, Type } from "class-transformer";

export class PropertieTracking2 extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: TrackingRecordRef })
    @Expose({ name: "recordRefs" })
    @Type(() => TrackingRecordRef)
    recordRefs?: TrackingRecordRef[];
}