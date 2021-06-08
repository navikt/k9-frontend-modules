import bem from '@navikt/nap-bem-utils';
import * as React from 'react';
import './indexStyles';
import Step, { StepProps } from './Step';

interface ProcessMenuProps {
    steps: StepProps[];
    onClick?: (index: number) => void;
}

const processMenuCls = bem('process-menu');

export const ProcessMenu = ({ steps, onClick }: ProcessMenuProps): JSX.Element => {
    return (
        <ol className={processMenuCls.block}>
            {steps.map((step, index) => (
                <Step key={step.label.split(' ').join('')} index={index} onClick={onClick} {...step} />
            ))}
        </ol>
    );
};
export default ProcessMenu;
