/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

/**
 * Status of the tax rate in the accounting platform.
 *
 * @remarks
 * - `Active` - An active tax rate in use by a company.
 * - `Archived` - A tax rate that has been archived or is inactive in the accounting platform.
 * - `Unknown` - Where the status of the tax rate cannot be determined from the underlying platform.
 */
export enum TaxRateStatus {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived",
}
