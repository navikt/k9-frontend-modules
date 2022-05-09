import React from 'react';
import styles from './navigationWithDetailViewStyles.less';

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
        <div className={styles.navigationWithDetailView}>
            <div
                className={`${styles.navigationWithDetailView__navigationSection} navigationWithDetailView__navigationSection`}
            >
                {navigationSection()}
            </div>
            {showDetailSection && (
                <div
                    className={`${styles.navigationWithDetailView__detailSection} navigationWithDetailView__detailSection`}
                >
                    {detailSection()}
                </div>
            )}
        </div>
    );
};

export default NavigationWithDetailView;
