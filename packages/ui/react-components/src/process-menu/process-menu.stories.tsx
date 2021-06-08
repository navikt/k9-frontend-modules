import * as React from 'react';
import ProcessMenu from '.';
import StatefulProcessMenu from './StatefulProcessMenu';
import { StepType } from './StepType';

export default { title: 'Process menu' };

export const stateFromProps = (): React.ReactNode => (
    <ProcessMenu
        steps={[
            {
                label: 'Inngangsvilkår',
                type: StepType.success,
                usePartialStatus: true,
            },
            {
                label: 'Beregning',
                type: StepType.success,
                isFinished: true,
                isActive: true,
                usePartialStatus: true,
            },
            {
                label: 'Uttak',
                type: StepType.warning,
                usePartialStatus: true,
            },
            {
                label: 'Tilkjent ytelse',
                type: StepType.danger,
                usePartialStatus: true,
            },
            {
                label: 'Simulering',
                type: StepType.default,
            },
            {
                label: 'Vedtak',
                type: StepType.default,
                isDisabled: true,
            },
        ]}
        // eslint-disable-next-line no-console
        onClick={(index: number): void => console.log(index)}
    />
);

export const stateful = (): React.ReactNode => (
    <StatefulProcessMenu
        steps={[
            {
                label: 'Inngangsvilkår',
            },
            {
                label: 'Beregning',
            },
            {
                label: 'Uttak',
                type: StepType.warning,
            },
            {
                label: 'Tilkjent ytelse',
            },
            {
                label: 'Simulering',
                type: StepType.danger,
            },
            {
                label: 'Vedtak',
            },
        ]}
        // eslint-disable-next-line no-console
        onClick={(index: number): void => console.log(index)}
    />
);

export const manySteps = (): React.ReactNode => (
    <StatefulProcessMenu
        steps={[
            {
                label: 'Inngangsvilkår',
            },
            {
                label: 'Beregning',
            },
            {
                label: 'Uttak',
                type: StepType.warning,
            },
            {
                label: 'Tilkjent ytelse',
            },
            {
                label: 'Simulering',
                type: StepType.danger,
            },
            {
                label: 'Vedtak',
            },
            {
                label: 'Inngangsvilkår2',
            },
            {
                label: 'Beregning2',
            },
            {
                label: 'Uttak2',
                type: StepType.warning,
            },
            {
                label: 'Tilkjent ytelse2',
            },
            {
                label: 'Simulering2',
                type: StepType.danger,
            },
            {
                label: 'Vedtak2',
            },
        ]}
        // eslint-disable-next-line no-console
        onClick={(index: number): void => console.log(index)}
    />
);
