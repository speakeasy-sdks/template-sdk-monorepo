/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetExcelReportGenerationStatusRequest = {
    /**
     * Unique identifier for a company.
     */
    companyId: string;
    /**
     * The type of report you want to generate and download.
     */
    reportType: components.ExcelReportTypes;
};

export type GetExcelReportGenerationStatusResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    excelStatus?: components.ExcelStatus | undefined;
};

/** @internal */
export namespace GetExcelReportGenerationStatusRequest$ {
    export type Inbound = {
        companyId: string;
        reportType: components.ExcelReportTypes;
    };

    export const inboundSchema: z.ZodType<
        GetExcelReportGenerationStatusRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            companyId: z.string(),
            reportType: components.ExcelReportTypes$,
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                reportType: v.reportType,
            };
        });

    export type Outbound = {
        companyId: string;
        reportType: components.ExcelReportTypes;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetExcelReportGenerationStatusRequest
    > = z
        .object({
            companyId: z.string(),
            reportType: components.ExcelReportTypes$,
        })
        .transform((v) => {
            return {
                companyId: v.companyId,
                reportType: v.reportType,
            };
        });
}

/** @internal */
export namespace GetExcelReportGenerationStatusResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        ExcelStatus?: components.ExcelStatus$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetExcelReportGenerationStatusResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            ExcelStatus: components.ExcelStatus$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.ExcelStatus === undefined ? null : { excelStatus: v.ExcelStatus }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        ExcelStatus?: components.ExcelStatus$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetExcelReportGenerationStatusResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            excelStatus: components.ExcelStatus$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.excelStatus === undefined ? null : { ExcelStatus: v.excelStatus }),
            };
        });
}
