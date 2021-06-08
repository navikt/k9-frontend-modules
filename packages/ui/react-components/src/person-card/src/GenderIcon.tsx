import * as React from 'react';
import bem from '@navikt/nap-bem-utils';
import { GenderType } from './PersonCard';

const maleImgPath = require('./assets/images/mann.svg') as string;
const femaleImgPath = require('./assets/images/kvinne.svg') as string;
const unknownGenderImagePath = require('./assets/images/ukjent.svg') as string;
const childImgPath = require('./assets/images/barn.svg') as string;

const cardCls = bem('person-card');

interface GenderIconProps {
    gender?: GenderType;
    isChild?: boolean;
}

const GenderIcon = ({ gender, isChild }: GenderIconProps): JSX.Element => {
    let imagePath = unknownGenderImagePath;
    let altText = '';
    if (isChild) {
        imagePath = childImgPath;
        altText = 'Barn';
    } else if (gender === 'male') {
        imagePath = maleImgPath;
        altText = 'Mann';
    } else if (gender === 'female') {
        imagePath = femaleImgPath;
        altText = 'Kvinne';
    }
    return (
        <img
            className={
                imagePath === unknownGenderImagePath
                    ? cardCls.elementWithModifier('gender-icon', 'unknown')
                    : cardCls.element('gender-icon')
            }
            src={imagePath}
            alt={altText}
        />
    );
};

export default GenderIcon;
