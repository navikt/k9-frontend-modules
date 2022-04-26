import bem from '@navikt/k9-bem-utils';
import React from 'react';
import { Collapse } from 'react-collapse';
import styles from './expandablePanelStyles.less';

const expandablePanelCls = bem('expandablePanel');

type ExpandablePanelTheme = 'success' | 'warn' | 'neutral';

export interface ExpandablePanelProps {
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
        <div className={styles[expandablePanelCls.block]}>
            <div
                className={`${styles['expandablePanel__themeBorder']} ${
                    styles[`expandablePanel__themeBorder--${theme}`]
                }`}
            />
            <div className={styles[expandablePanelCls.element('contentWrapper')]}>
                <button className={styles[expandablePanelCls.element('button')]} type="button" onClick={onClick}>
                    {renderHeader()}
                </button>
                <Collapse isOpened={isOpen}>
                    <div className={styles[expandablePanelCls.element('expandedContent')]}>{children}</div>
                </Collapse>
            </div>
        </div>
    );
};

export default ExpandablePanel;
