/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductInventory } from "./productinventory";
import { ProductPrice } from "./productprice";
import { ProductVariantStatus } from "./productvariantstatus";
import { Expose, Type } from "class-transformer";

/**
 * Represents a variation of a product available for sale, for example an item of clothing that may be available for sale in multiple sizes and colors.
 *
 * @remarks
 *
 */
export class ProductVariant extends SpeakeasyBase {
    /**
     * Unique product number of the variant. This might be a barcode, UPC, ISBN, etc.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "barcode" })
    barcode?: string;

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
    @Expose({ name: "createdDate" })
    createdDate?: string;

    /**
     * A unique, persistent identifier for this record
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Information about the total inventory as well as the locations inventory is in.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "inventory" })
    @Type(() => ProductInventory)
    inventory?: ProductInventory;

    /**
     * Whether sales taxes are enabled for this product variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isTaxEnabled" })
    isTaxEnabled?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "modifiedDate" })
    modifiedDate?: string;

    /**
     * Name of the product recorded in the commerce or point of sale platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Prices for the product variants in different currencies.
     */
    @SpeakeasyMetadata({ elemType: ProductPrice })
    @Expose({ name: "prices" })
    @Type(() => ProductPrice)
    prices?: ProductPrice[];

    /**
     * Indicates whether or not the product requires physical delivery.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shippingRequired" })
    shippingRequired?: boolean;

    /**
     * SKU (stock keeping unit) of the variant, as defined by the merchant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sku" })
    sku?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceModifiedDate" })
    sourceModifiedDate?: string;

    /**
     * The status of the product variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: ProductVariantStatus;

    /**
     * Unit of measure for the variant, such as `kg` or `meters`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unitOfMeasure" })
    unitOfMeasure?: string;

    /**
     * VAT rate for the product variant if sales taxes are enabled.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "vatPercentage" })
    vatPercentage?: number;
}
