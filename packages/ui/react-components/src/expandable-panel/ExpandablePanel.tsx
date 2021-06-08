import bem from '@navikt/k9-bem-utils';
import React from 'react';
import { Collapse } from 'react-collapse';
import './expandablePanelStyles.less';

const expandablePanelCls = bem('expandablePanel');

type ExpandablePanelTheme = 'success' | 'warn' | 'neutral';

interface ExpandablePanelProps {
    theme?: ExpandablePanelTheme;
    children: React.ReactChild | React.ReactChildren;
    renderHeader: () => React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const ExpandablePanel: React.FunctionComponent<ExpandablePanelProps> = ({
    renderHeader,
    children,
    theme = 'neutral',
    isOpen,
    onClick,
}) => {
    return (
        <div className={expandablePanelCls.block}>
            <div className={expandablePanelCls.elementWithModifier('themeBorder', theme)} />
            <div className={expandablePanelCls.element('contentWrapper')}>
                <button className={expandablePanelCls.element('button')} type="button" onClick={onClick}>
                    {renderHeader()}
                </button>
                <Collapse isOpened={isOpen}>
                    <div className={expandablePanelCls.element('expandedContent')}>{children}</div>
                </Collapse>
            </div>
        </div>
    );
};

export default ExpandablePanel;
