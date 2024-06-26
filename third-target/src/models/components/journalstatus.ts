/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Current journal status.
 */
export enum JournalStatus {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived",
}

/** @internal */
export const JournalStatus$ = z.nativeEnum(JournalStatus);
