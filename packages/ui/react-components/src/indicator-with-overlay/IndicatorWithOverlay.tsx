import React from 'react';
import './indicatorWithOverlay.less';

interface IndicatorWithOverlayProps {
    indicatorRenderer: () => React.ReactNode;
    overlayRenderer: () => React.ReactNode;
}

const IndicatorWithOverlay = ({
    indicatorRenderer,
    overlayRenderer,
}: IndicatorWithOverlayProps) => {
    return (
        <div className="indicatorWithOverlay">
            <div className="indicatorWithOverlay__overlay">
                {overlayRenderer()}
            </div>
            <div className="indicatorWithOverlay__indicator">
                {indicatorRenderer()}
            </div>
        </div>
    );
};

export default IndicatorWithOverlay;
