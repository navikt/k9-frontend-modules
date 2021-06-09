import bem from '@navikt/k9-bem-utils';
import * as React from 'react';
import Step, { StepProps } from './Step';
import './processMenu.less';

interface ProcessMenuProps {
    steps: StepProps[];
    onClick?: (index: number) => void;
}

const processMenuCls = bem('processMenu');

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
