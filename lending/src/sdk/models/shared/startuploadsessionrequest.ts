/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A key for a Codat data type.
 */
export enum StartUploadSessionRequestDataType {
    BankingAccounts = "banking-accounts",
    BankingTransactions = "banking-transactions",
}

export class StartUploadSessionRequest extends SpeakeasyBase {
    /**
     * A key for a Codat data type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType?: StartUploadSessionRequestDataType;
}