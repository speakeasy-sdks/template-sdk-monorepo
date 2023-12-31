/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The bank or other financial institution providing the account.
 */
export class AccountInstitution extends SpeakeasyBase {
    /**
     * The institution's ID, according to the provider.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The institution's name, according to the underlying provider.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}
