import React from 'react';
import classnames from 'classnames';
import './contentWithTooltip.less';

export interface ContentWithTooltipProps {
    tooltipText: string;
    tooltipDirectionRight?: boolean;
    tooltipClassName?: string;
    children?: React.ReactNode;
    inline?: boolean;
}

const ContentWithTooltip = ({
    tooltipText,
    tooltipDirectionRight,
    tooltipClassName,
    children,
    inline,
}: ContentWithTooltipProps): JSX.Element => {
    const tooltipCls = classnames('contentWithTooltip__tooltipText', {
        ['contentWithTooltip__tooltipText--right']: tooltipDirectionRight,
    });
    const containerCls = classnames('contentWithTooltip', {
        ['contentWithTooltip--inline']: inline,
    });
    return (
        <div className={containerCls}>
            {children}
            <div className={tooltipClassName || tooltipCls}>{tooltipText}</div>
        </div>
    );
};

export default ContentWithTooltip;
