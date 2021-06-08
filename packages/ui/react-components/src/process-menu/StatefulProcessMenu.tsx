import * as React from 'react';
import { StepType } from './StepType';
import ProcessMenu from './ProcessMenu';

interface StepProps {
    label: string;
    type?: StepType;
    iconAltText?: string;
}

interface StatefulProcessMenuProps {
    steps: StepProps[];
    onClick?: (index: number) => void;
}
export const StatefulProcessMenu = ({ steps, onClick }: StatefulProcessMenuProps): JSX.Element => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const handleOnClick = (index: number): void => {
        setActiveIndex(index);
        onClick(index);
    };

    const buildSteps = (): StepProps[] => {
        return steps.map((step, index) => {
            return {
                ...step,
                isActive: activeIndex === index,
                isFinished: activeIndex > index,
                isDisabled: activeIndex + 1 < index,
                type: activeIndex > index ? StepType.success : step.type,
            };
        });
    };
    return <ProcessMenu steps={buildSteps()} onClick={handleOnClick} />;
};

export default StatefulProcessMenu;
