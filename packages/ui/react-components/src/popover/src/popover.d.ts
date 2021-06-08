import * as React from 'react';
import { PopperProps, ReferenceProps } from 'react-popper';

interface PopoverProps {
    popperProps: PopperProps;
    referenceProps: ReferenceProps;
    popperIsVisible: boolean;
    renderArrowElement?: boolean;
    customPopperStyles?: React.CSSProperties;
}
export declare const Popover: React.FunctionComponent<PopoverProps>;
export default Popover;
