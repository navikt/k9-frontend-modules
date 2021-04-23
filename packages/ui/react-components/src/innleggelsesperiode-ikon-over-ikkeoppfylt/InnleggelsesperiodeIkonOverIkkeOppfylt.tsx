import React from 'react';
import IndicatorWithOverlay from '../indicator-with-overlay/IndicatorWithOverlay';
import InstitutionIcon from '../icons/InstitutionIcon';
import RedCrossIconFilled from '../icons/RedCrossIconFilled';

const InnleggelsesperiodeIkonOverIkkeOppfylt = () => {
    return (
        <IndicatorWithOverlay
            indicatorRenderer={() => <RedCrossIconFilled />}
            overlayRenderer={() => <InstitutionIcon />}
        />
    );
};

export default InnleggelsesperiodeIkonOverIkkeOppfylt;
