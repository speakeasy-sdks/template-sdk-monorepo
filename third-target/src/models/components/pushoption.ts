/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PushOptionChoice, PushOptionChoice$ } from "./pushoptionchoice";
import { PushOptionProperty, PushOptionProperty$ } from "./pushoptionproperty";
import { PushOptionType, PushOptionType$ } from "./pushoptiontype";
import { PushValidationInfo, PushValidationInfo$ } from "./pushvalidationinfo";
import * as z from "zod";

export type PushOption = {
    /**
     * The option type.
     */
    type: PushOptionType;
    /**
     * The property's display name.
     */
    displayName: string;
    /**
     * A description of the property.
     */
    description?: string | undefined;
    /**
     * The property is required if `True`.
     */
    required: boolean;
    properties?: Record<string, PushOptionProperty> | null | undefined;
    options?: Array<PushOptionChoice> | null | undefined;
    validation?: PushValidationInfo | undefined;
};

/** @internal */
export namespace PushOption$ {
    export type Inbound = {
        type: PushOptionType;
        displayName: string;
        description?: string | undefined;
        required: boolean;
        properties?: Record<string, PushOptionProperty$.Inbound> | null | undefined;
        options?: Array<PushOptionChoice$.Inbound> | null | undefined;
        validation?: PushValidationInfo$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PushOption, z.ZodTypeDef, Inbound> = z
        .object({
            type: PushOptionType$,
            displayName: z.string(),
            description: z.string().optional(),
            required: z.boolean(),
            properties: z.nullable(z.record(PushOptionProperty$.inboundSchema)).optional(),
            options: z.nullable(z.array(PushOptionChoice$.inboundSchema)).optional(),
            validation: PushValidationInfo$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                type: v.type,
                displayName: v.displayName,
                ...(v.description === undefined ? null : { description: v.description }),
                required: v.required,
                ...(v.properties === undefined ? null : { properties: v.properties }),
                ...(v.options === undefined ? null : { options: v.options }),
                ...(v.validation === undefined ? null : { validation: v.validation }),
            };
        });

    export type Outbound = {
        type: PushOptionType;
        displayName: string;
        description?: string | undefined;
        required: boolean;
        properties?: Record<string, PushOptionProperty$.Outbound> | null | undefined;
        options?: Array<PushOptionChoice$.Outbound> | null | undefined;
        validation?: PushValidationInfo$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PushOption> = z
        .object({
            type: PushOptionType$,
            displayName: z.string(),
            description: z.string().optional(),
            required: z.boolean(),
            properties: z.nullable(z.record(PushOptionProperty$.outboundSchema)).optional(),
            options: z.nullable(z.array(PushOptionChoice$.outboundSchema)).optional(),
            validation: PushValidationInfo$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                type: v.type,
                displayName: v.displayName,
                ...(v.description === undefined ? null : { description: v.description }),
                required: v.required,
                ...(v.properties === undefined ? null : { properties: v.properties }),
                ...(v.options === undefined ? null : { options: v.options }),
                ...(v.validation === undefined ? null : { validation: v.validation }),
            };
        });
}
