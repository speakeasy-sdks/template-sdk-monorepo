/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LocationRef } from "./locationref";
import { Expose, Type } from "class-transformer";

export class ProductInventoryLocation extends SpeakeasyBase {
    /**
     * Reference to the geographic location where the order was placed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "locationRef" })
    @Type(() => LocationRef)
    locationRef?: LocationRef;

    /**
     * The quantity of stock remaining at location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity?: number;
}
