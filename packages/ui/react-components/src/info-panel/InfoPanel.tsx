import React from 'react';
import classnames from 'classnames';
import Panel from 'nav-frontend-paneler';
import styles from './infoPanel.less';

interface InfoPanel {
    children: React.ReactNode;
    type: 'success' | 'warning';
}

const InfoPanel = ({ children, type }: InfoPanel) => {
    const cls = classnames(styles.infoPanel, styles[`infoPanel--${type}`]);
    return <Panel className={cls}>{children}</Panel>;
};

export default InfoPanel;
