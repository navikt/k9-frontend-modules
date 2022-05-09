import React from 'react';
import styles from './indicatorWithOverlay.less';

interface IndicatorWithOverlayProps {
    indicatorRenderer: () => React.ReactNode;
    overlayRenderer: () => React.ReactNode;
}

const IndicatorWithOverlay = ({ indicatorRenderer, overlayRenderer }: IndicatorWithOverlayProps) => {
    return (
        <div className={styles.indicatorWithOverlay}>
            <div className={styles.indicatorWithOverlay__overlay}>{overlayRenderer()}</div>
            <div className={styles.indicatorWithOverlay__indicator}>{indicatorRenderer()}</div>
        </div>
    );
};

export default IndicatorWithOverlay;
