/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Links } from "./links";
import { TrackingCategory } from "./trackingcategory";
import { Expose, Type } from "class-transformer";

export class TrackingCategories extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "_links" })
    @Type(() => Links)
    links: Links;

    /**
     * Current page number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pageNumber" })
    pageNumber: number;

    /**
     * Number of items to return in results array.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pageSize" })
    pageSize: number;

    @SpeakeasyMetadata({ elemType: TrackingCategory })
    @Expose({ name: "results" })
    @Type(() => TrackingCategory)
    results?: TrackingCategory[];

    /**
     * Total number of items.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalResults" })
    totalResults: number;
}
