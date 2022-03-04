/// <reference types="react" />
import { FormItemProps } from 'antd/lib/form';
export declare const FormCreater: (props: {
    onChange: (v: any) => void;
    value: {
        [k: string]: any;
    };
    config: {
        key: string;
        type: string;
        attributeId: string;
        displayName: string;
        formItemProps?: FormItemProps;
        cfg?: {
            [k: string]: any;
        };
    }[];
}) => JSX.Element;
