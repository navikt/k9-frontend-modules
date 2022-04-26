import bem from '@navikt/k9-bem-utils';
import React from 'react';
import classnames from 'classnames';
import StepType from './StepType';
import CheckIcon from './icons/CheckIcon';
import WarningIcon from './icons/WarningIcon';
import AvslåttValgIcon from './icons/AvslåttIcon';
import styles from './step.less';

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
                className={classnames(`${styles[stepCls.element('icon')]} ${styles['step__icon--partial']}`, {
                    [styles['step__icon--success']]: !isWarning && !isDanger,
                    [styles['step__icon--warning']]: isWarning,
                    [styles['step__icon--danger']]: isDanger,
                })}
            />
        );
    }
    if (isFinished) {
        return <CheckIcon className={`${styles[stepCls.element('icon')]} ${styles['step__icon--success']}`} />;
    }
    if (isWarning) {
        return <WarningIcon className={`${styles[stepCls.element('icon')]} ${styles['step__icon--warning']}`} />;
    }
    if (isDanger) {
        return <AvslåttValgIcon className={`${styles[stepCls.element('icon')]} ${styles['step__icon--danger']}`} />;
    }
    return <span className={styles[stepCls.element('icon-placeholder')]} />;
};

export default StepIcon;
