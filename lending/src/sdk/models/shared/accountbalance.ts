/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AccountBalance extends SpeakeasyBase {
    /**
     * The account's current balance
     */
    @SpeakeasyMetadata()
    @Expose({ name: "available" })
    available?: number;

    /**
     * The currency of the account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: string;

    /**
     * Funds that are not yet available in the balance
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pending" })
    pending?: number;

    /**
     * Funds reserved as holdings
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reserved" })
    reserved?: any;
}
