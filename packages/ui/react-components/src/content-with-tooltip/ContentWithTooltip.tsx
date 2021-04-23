import * as React from 'react';
import classnames from 'classnames';
import './contentWithTooltip.less';

interface ContentWithTooltipProps {
    tooltipText: string;
    tooltipDirectionRight?: boolean;
    children?: React.ReactNode;
    inline?: boolean;
}

const ContentWithTooltip = ({
    tooltipText,
    tooltipDirectionRight,
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
            <div className={tooltipCls}>{tooltipText}</div>
        </div>
    );
};

export default ContentWithTooltip;
