/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountCategoriesUpdatedWebhookData } from "./accountcategoriesupdatedwebhookdata";
import { Expose, Type } from "class-transformer";

/**
 * Webhook request body for account categories updated.
 */
export class AccountCategoriesUpdatedWebhook extends SpeakeasyBase {
    /**
     * Unique identifier of the webhook event.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "AlertId" })
    alertId?: string;

    /**
     * Unique identifier for your client in Codat.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ClientId" })
    clientId?: string;

    /**
     * Name of your client in Codat.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ClientName" })
    clientName?: string;

    /**
     * Unique identifier for your SMB in Codat.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "CompanyId" })
    companyId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "Data" })
    @Type(() => AccountCategoriesUpdatedWebhookData)
    data?: AccountCategoriesUpdatedWebhookData;

    /**
     * Unique identifier for a company's data connection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "DataConnectionId" })
    dataConnectionId?: string;

    /**
     * A human readable message about the webhook.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Message" })
    message?: string;

    /**
     * Unique identifier for the rule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "RuleId" })
    ruleId?: string;

    /**
     * The type of rule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "RuleType" })
    ruleType?: string;
}