import * as React from 'react';
import {
    PopperArrowProps as ArrowProps,
    PopperChildrenProps,
    PopperProps,
    ReferenceProps,
    usePopper,
} from 'react-popper';

interface PopoverProps {
    // eslint-disable-next-line
    popperProps: PopperProps<any>;
    arrowProps?: Partial<ArrowProps>;
    referenceProps: ReferenceProps;
    popperIsVisible: boolean;
    renderArrowElement?: boolean;
    customPopperStyles?: React.CSSProperties;
    popperChildrenProps?: PopperChildrenProps;
}

export const Popover: React.FunctionComponent<PopoverProps> = ({
    popperProps,
    referenceProps,
    popperIsVisible,
    renderArrowElement,
    customPopperStyles,
    arrowProps,
    popperChildrenProps,
}) => {
    const { placement, strategy } = popperProps;
    const [referenceElement, setReferenceElement] = React.useState(null);
    const [popperElement, setPopperElement] = React.useState(null);
    const [arrowElement, setArrowElement] = React.useState(null);
    const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
        placement,
        strategy,
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    });
    const [shouldRepaint, setShouldRepaint] = React.useState(false);

    React.useEffect(() => setShouldRepaint(true), [popperIsVisible]);

    const repaint = (): void => {
        if (shouldRepaint && update) {
            update();
            setShouldRepaint(false);
        }
    };
    repaint();
    const arrowStyles = { ...styles.arrow, ...arrowProps?.style };
    return (
        <React.StrictMode>
            {referenceProps.children({ ref: setReferenceElement })}
            <div
                {...attributes.popper}
                ref={setPopperElement}
                style={{
                    ...styles.popper,
                    ...customPopperStyles,
                    visibility: popperIsVisible ? 'visible' : 'hidden',
                }}
            >
                {renderArrowElement && (
                    <div
                        {...arrowProps}
                        ref={setArrowElement}
                        className="arrow"
                        style={arrowStyles}
                        data-popper-placement={placement}
                        data-popper-arrow
                    />
                )}
                {popperProps.children(popperChildrenProps)}
            </div>
        </React.StrictMode>
    );
};

export default Popover;
