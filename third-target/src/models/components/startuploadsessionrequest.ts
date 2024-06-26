/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A key for a Codat data type.
 */
export enum StartUploadSessionRequestDataType {
    BankingAccounts = "banking-accounts",
    BankingTransactions = "banking-transactions",
}

export type StartUploadSessionRequest = {
    /**
     * A key for a Codat data type.
     */
    dataType?: StartUploadSessionRequestDataType | undefined;
};

/** @internal */
export const StartUploadSessionRequestDataType$ = z.nativeEnum(StartUploadSessionRequestDataType);

/** @internal */
export namespace StartUploadSessionRequest$ {
    export type Inbound = {
        dataType?: StartUploadSessionRequestDataType | undefined;
    };

    export const inboundSchema: z.ZodType<StartUploadSessionRequest, z.ZodTypeDef, Inbound> = z
        .object({
            dataType: StartUploadSessionRequestDataType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
            };
        });

    export type Outbound = {
        dataType?: StartUploadSessionRequestDataType | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StartUploadSessionRequest> = z
        .object({
            dataType: StartUploadSessionRequestDataType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.dataType === undefined ? null : { dataType: v.dataType }),
            };
        });
}
