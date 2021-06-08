import bem from '@navikt/k9-bem-utils';
import * as React from 'react';
import classnames from 'classnames';
import { StepType } from './StepType';
import './stepStyles.less';
import CheckIcon from './assets/images/check';
import AdvarselIcon from './assets/images/advarsel';
import AvslåttValgIcon from './assets/images/avslaatt_valgt';

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
        return <CheckIcon className={stepCls.elementWithModifier('icon', 'success')} />;
    }
    if (isWarning) {
        return <AdvarselIcon className={stepCls.elementWithModifier('icon', 'warning')} />;
    }
    if (isDanger) {
        return <AvslåttValgIcon className={stepCls.elementWithModifier('icon', 'danger')} />;
    }
    return <span className={stepCls.element('icon-placeholder')} />;
};

export default StepIcon;
