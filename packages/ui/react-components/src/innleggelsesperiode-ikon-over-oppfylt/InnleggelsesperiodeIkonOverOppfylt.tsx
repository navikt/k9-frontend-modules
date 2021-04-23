import React from 'react';
import IndicatorWithOverlay from '../indicator-with-overlay/IndicatorWithOverlay';
import InstitutionIcon from '../icons/InstitutionIcon';
import GreenCheckIconFilled from '../icons/GreenCheckIconFilled';

const InnleggelsesperiodeIkonOverOppfylt = () => {
    return (
        <IndicatorWithOverlay
            indicatorRenderer={() => <GreenCheckIconFilled />}
            overlayRenderer={() => <InstitutionIcon />}
        />
    );
};

export default InnleggelsesperiodeIkonOverOppfylt;
