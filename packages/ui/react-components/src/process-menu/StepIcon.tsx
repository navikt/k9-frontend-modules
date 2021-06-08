import bem from '@navikt/k9-bem-utils';
import * as React from 'react';
import classnames from 'classnames';
import { StepType } from './Step';
import './stepStyles.less';

/* eslint-disable global-require */
const advarselImgPath = require('./assets/images/advarsel.svg') as string;
const avslaatImgPath = require('./assets/images/avslaatt_valgt.svg') as string;
const checkImgPath = require('./assets/images/check.svg') as string;
/* eslint-enable global-require */

interface StepIconProps {
    type: string;
    isFinished?: boolean;
    iconAltText?: string;
    usePartialStatus?: boolean;
}

const stepCls = bem('step');

const StepIcon = ({ type, isFinished, iconAltText, usePartialStatus }: StepIconProps): JSX.Element => {
    const isWarning = type === StepType.warning;
    const isDanger = type === StepType.danger;

    if (usePartialStatus) {
        return (
            <div
                className={classnames(stepCls.elementWithModifier('icon', 'partial'), {
                    [stepCls.elementWithModifier('icon', 'success')]: !isWarning && !isDanger,
                    [stepCls.elementWithModifier('icon', 'warning')]: isWarning,
                    [stepCls.elementWithModifier('icon', 'danger')]: isDanger,
                })}
            />
        );
    }
    if (isFinished) {
        return (
            <img
                src={checkImgPath}
                alt={iconAltText || 'Behandlet - Oppgave løst/godkjent'}
                className={stepCls.elementWithModifier('icon', 'success')}
            />
        );
    }
    if (isWarning) {
        return (
            <img
                src={advarselImgPath}
                alt={iconAltText || 'Behandlet - Manuell oppgave'}
                className={stepCls.elementWithModifier('icon', 'warning')}
            />
        );
    }
    if (isDanger) {
        return (
            <img
                src={avslaatImgPath}
                alt={iconAltText || 'Oppgave løst/avslått'}
                className={stepCls.elementWithModifier('icon', 'danger')}
            />
        );
    }
    return <span className={stepCls.element('icon-placeholder')} />;
};

export default StepIcon;
