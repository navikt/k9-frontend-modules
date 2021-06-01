import React from 'react';
import './navigationWithDetailViewStyles.less';

export interface NavigationWithDetailViewProps {
    navigationSection: () => React.ReactNode;
    detailSection: () => React.ReactNode;
    showDetailSection: boolean;
}

const NavigationWithDetailView = ({
    navigationSection,
    detailSection,
    showDetailSection,
}: NavigationWithDetailViewProps) => {
    return (
        <div className="navigationWithDetailView">
            <div className="navigationWithDetailView__navigationSection">{navigationSection()}</div>
            {showDetailSection && <div className="navigationWithDetailView__detailSection">{detailSection()}</div>}
        </div>
    );
};

export default NavigationWithDetailView;
