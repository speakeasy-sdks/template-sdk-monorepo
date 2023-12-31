/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ValidationItem } from "./validationitem";
import { Expose, Type } from "class-transformer";

/**
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
 */
export class Validation extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ValidationItem })
    @Expose({ name: "errors" })
    @Type(() => ValidationItem)
    errors?: ValidationItem[];

    @SpeakeasyMetadata({ elemType: ValidationItem })
    @Expose({ name: "warnings" })
    @Type(() => ValidationItem)
    warnings?: ValidationItem[];
}
