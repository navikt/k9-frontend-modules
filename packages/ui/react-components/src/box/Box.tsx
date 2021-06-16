import classNames from 'classnames';
import React from 'react';
import './box.less';

export enum Margin {
    small = 'small',
    medium = 'medium',
    large = 'large',
    xLarge = 'xLarge',
    xxLarge = 'xxLarge',
}

export interface BoxProps {
    children: React.ReactNode;
    marginBottom?: Margin;
    marginTop?: Margin;
}

const Box = ({ children, marginBottom, marginTop }: BoxProps): JSX.Element => {
    const marginTopClass = `${marginTop}MarginTop`;
    const marginBottomClass = `${marginBottom}MarginBottom`;
    const boxClassnames = classNames({
        [marginTopClass]: marginTop,
        [marginBottomClass]: marginBottom,
    });
    return <div className={boxClassnames}>{children}</div>;
};

export default Box;
