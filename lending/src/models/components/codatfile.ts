/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../../lib/base64";
import * as z from "zod";

export type CodatFile = {
    fileName: string;
    content: Uint8Array | string;
};

/** @internal */
export namespace CodatFile$ {
    export type Inbound = {
        fileName: string;
        content: Uint8Array | string;
    };

    export const inboundSchema: z.ZodType<CodatFile, z.ZodTypeDef, Inbound> = z
        .object({
            fileName: z.string(),
            content: b64$.zodInbound,
        })
        .transform((v) => {
            return {
                fileName: v.fileName,
                content: v.content,
            };
        });

    export type Outbound = {
        fileName: string;
        content: Uint8Array;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CodatFile> = z
        .object({
            fileName: z.string(),
            content: b64$.zodOutbound,
        })
        .transform((v) => {
            return {
                fileName: v.fileName,
                content: v.content,
            };
        });
}
