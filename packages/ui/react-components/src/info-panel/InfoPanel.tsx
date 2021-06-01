import React from 'react';
import classnames from 'classnames';
import Panel from 'nav-frontend-paneler';
import './infoPanel.less';

interface InfoPanel {
    children: React.ReactNode;
    type: 'success' | 'warning';
}

const InfoPanel = ({ children, type }: InfoPanel) => {
    const cls = classnames('infoPanel', `infoPanel--${type}`);
    return <Panel className={cls}>{children}</Panel>;
};

export default InfoPanel;
