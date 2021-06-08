import * as React from 'react';
import bem from '@navikt/k9-bem-utils';
import classnames from 'classnames';
import { Normaltekst } from 'nav-frontend-typografi';
import StepIcon from './StepIcon';
import { StepType } from './StepType';
import './step.less';

export interface StepProps {
    label: string;
    isFinished?: boolean;
    usePartialStatus?: boolean;
    isActive?: boolean;
    type?: StepType;
    onClick?: (index: number) => void;
    iconAltText?: string;
    isDisabled?: boolean;
}

interface ComponentProps {
    index: number;
}

const stepCls = bem('step');

export const Step = React.memo(
    ({
        label,
        index,
        isActive,
        onClick,
        isFinished,
        type = StepType.default,
        iconAltText,
        usePartialStatus,
    }: StepProps & ComponentProps): JSX.Element => {
        const handleButtonClick = (event: React.FormEvent<HTMLButtonElement>): void => {
            event.preventDefault();
            onClick(index);
        };

        const stepIndicatorCls = classnames(stepCls.elementWithModifier('indicator', type), {
            [stepCls.elementWithModifier('indicator', 'active')]: isActive,
            [stepCls.elementWithModifier('indicator', 'partial')]: usePartialStatus,
        });

        return (
            <li key={label.split(' ').join('')} className={stepCls.block} aria-current={isActive ? 'step' : undefined}>
                <button
                    className={isActive ? stepCls.elementWithModifier('button', 'active') : stepCls.element('button')}
                    type="button"
                    onClick={handleButtonClick}
                    data-tooltip={label}
                >
                    <span className={stepCls.element('text-icon-container')}>
                        <StepIcon
                            type={type}
                            isFinished={isFinished}
                            iconAltText={iconAltText}
                            usePartialStatus={usePartialStatus}
                        />
                        <Normaltekst tag="span">{label}</Normaltekst>
                    </span>
                    <span className={stepIndicatorCls} />
                </button>
                {isActive && (
                    <div className={stepCls.element('arrow-container')}>
                        <div className={stepCls.element('arrow')} />
                    </div>
                )}
            </li>
        );
    }
);
export default Step;
