/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PushOptionType } from "./pushoptiontype";
import { Expose } from "class-transformer";

export class PushOptionChoice extends SpeakeasyBase {
    /**
     * A description of the property.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * The property's display name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName?: string;

    /**
     * The property is required if `True`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "required" })
    required?: boolean;

    /**
     * The option type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: PushOptionType;

    /**
     * Allowed value for field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: string;
}
