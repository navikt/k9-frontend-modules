import React from 'react';
import './navigationWithDetailViewStyles.less';

export interface NavigationWithDetailViewProps {
    navigationSection: () => React.ReactNode;
    detailSection: () => React.ReactNode;
}

const NavigationWithDetailView = ({
    navigationSection,
    detailSection,
}: NavigationWithDetailViewProps) => {
    return (
        <div className="navigationWithDetailView">
            <div className="navigationWithDetailView__navigationSection">
                {navigationSection()}
            </div>
            <div className="navigationWithDetailView__detailSection">
                {detailSection()}
            </div>
        </div>
    );
};

export default NavigationWithDetailView;
