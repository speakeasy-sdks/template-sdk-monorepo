/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  ErrorValidation,
  ErrorValidation$inboundSchema,
  ErrorValidation$Outbound,
  ErrorValidation$outboundSchema,
} from "./errorvalidation.js";

export type ErrorMessage = {
  /**
   * `True` if the error occurred transiently and can be retried.
   */
  canBeRetried?: string | undefined;
  /**
   * Unique identifier used to propagate to all downstream services and determine the source of the error.
   */
  correlationId?: string | undefined;
  /**
   * Machine readable error code used to automate processes based on the code returned.
   */
  detailedErrorCode?: number | undefined;
  /**
   * A brief description of the error.
   */
  error?: string | undefined;
  /**
   * Codat's service the returned the error.
   */
  service?: string | undefined;
  /**
   * The HTTP status code returned by the error.
   */
  statusCode?: number | undefined;
  /**
   * A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.
   */
  validation?: ErrorValidation | null | undefined;
};

/** @internal */
export const ErrorMessage$inboundSchema: z.ZodType<
  ErrorMessage,
  z.ZodTypeDef,
  unknown
> = z.object({
  canBeRetried: z.string().optional(),
  correlationId: z.string().optional(),
  detailedErrorCode: z.number().int().optional(),
  error: z.string().optional(),
  service: z.string().optional(),
  statusCode: z.number().int().optional(),
  validation: z.nullable(ErrorValidation$inboundSchema).optional(),
});

/** @internal */
export type ErrorMessage$Outbound = {
  canBeRetried?: string | undefined;
  correlationId?: string | undefined;
  detailedErrorCode?: number | undefined;
  error?: string | undefined;
  service?: string | undefined;
  statusCode?: number | undefined;
  validation?: ErrorValidation$Outbound | null | undefined;
};

/** @internal */
export const ErrorMessage$outboundSchema: z.ZodType<
  ErrorMessage$Outbound,
  z.ZodTypeDef,
  ErrorMessage
> = z.object({
  canBeRetried: z.string().optional(),
  correlationId: z.string().optional(),
  detailedErrorCode: z.number().int().optional(),
  error: z.string().optional(),
  service: z.string().optional(),
  statusCode: z.number().int().optional(),
  validation: z.nullable(ErrorValidation$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorMessage$ {
  /** @deprecated use `ErrorMessage$inboundSchema` instead. */
  export const inboundSchema = ErrorMessage$inboundSchema;
  /** @deprecated use `ErrorMessage$outboundSchema` instead. */
  export const outboundSchema = ErrorMessage$outboundSchema;
  /** @deprecated use `ErrorMessage$Outbound` instead. */
  export type Outbound = ErrorMessage$Outbound;
}
