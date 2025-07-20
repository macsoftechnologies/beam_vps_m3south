export class Inputdata {
    name: string;
    type: string; // bind this in HTML when this issue will be fixed https://github.com/angular/angular/issues/13243
    top: number;
    left: number;
    width: number;
    height: number;
    value; any;
}

export interface PDFAnnotationData {
    alternativeText: string;
    annotationFlags: number;
    annotationType: number;
    buttonValue: any;
    borderStyle: { width: number, style: number, dashArray: any[], horizontalCornerRadius: number, verticalCornerRadius: number };
    color: number[];
    comb: boolean;
    checkBox: boolean;
    defaultAppearance: string;
    fieldFlags: number;
    fieldName: string;
    fieldType: string;
    fieldValue: any;
    hasAppearance: boolean;
    id: string;
    maxLen: null | number;
    multiLine: boolean;
    readOnly: boolean;
    rect: number[];
    subtype: string;
    textAlignment: number;
}