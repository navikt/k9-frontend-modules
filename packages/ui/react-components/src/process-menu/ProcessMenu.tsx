import bem from '@navikt/k9-bem-utils';
import React from 'react';
import Step, { StepProps } from './Step';
import styles from './processMenu.less';

interface ProcessMenuProps {
    steps: StepProps[];
    onClick?: (index: number) => void;
}

const processMenuCls = bem('processMenu');

export const ProcessMenu = ({ steps, onClick }: ProcessMenuProps): JSX.Element => {
    return (
        <ol className={styles[processMenuCls.block]}>
            {steps.map((step, index) => (
                <Step key={step.label.split(' ').join('')} index={index} onClick={onClick} {...step} />
            ))}
        </ol>
    );
};
export default ProcessMenu;
