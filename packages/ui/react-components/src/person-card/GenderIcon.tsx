import * as React from 'react';
import { bemUtils } from '@navikt/k9-bem-utils';
import { GenderType } from './PersonCard';
import BarnIcon from './images/barn';
import MannIcon from './images/mann';
import KvinneIcon from './images/kvinne';
import UkjentIcon from './images/ukjent';

const cardCls = bemUtils('person-card');

interface GenderIconProps {
    gender?: GenderType;
    isChild?: boolean;
}

const GenderIcon = ({ gender, isChild }: GenderIconProps): JSX.Element => {
    let icon;
    if (isChild) {
        icon = <BarnIcon />;
    } else if (gender === 'male') {
        icon = <MannIcon />;
    } else if (gender === 'female') {
        icon = <KvinneIcon />;
    }
    return (
        <div className={!icon ? cardCls.elementWithModifier('gender-icon', 'unknown') : cardCls.element('gender-icon')}>
            {icon || <UkjentIcon />}
        </div>
    );
};

export default GenderIcon;
