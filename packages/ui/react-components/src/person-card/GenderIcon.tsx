import * as React from 'react';
import bemUtils from '@navikt/k9-bem-utils';
import { GenderType } from './PersonCard';
import ChildIcon from './icons/Child';
import ManIcon from './icons/Man';
import WomanIcon from './icons/Woman';
import UnknownIcon from './icons/Unknown';

const cardCls = bemUtils('person-card');

interface GenderIconProps {
    gender?: GenderType;
    isChild?: boolean;
}

const GenderIcon = ({ gender, isChild }: GenderIconProps): JSX.Element => {
    let icon;
    if (isChild) {
        icon = <ChildIcon />;
    } else if (gender === 'male') {
        icon = <ManIcon />;
    } else if (gender === 'female') {
        icon = <WomanIcon />;
    }
    return (
        <div className={!icon ? cardCls.elementWithModifier('gender-icon', 'unknown') : cardCls.element('gender-icon')}>
            {icon || <UnknownIcon />}
        </div>
    );
};

export default GenderIcon;
