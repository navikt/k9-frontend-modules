import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import CheckboxGroup from './wrappers/CheckboxGroup';
import Datepicker from './wrappers/Datepicker';
import PeriodpickerList from './wrappers/PeriodpickerList';
import RadioGroupPanel from './wrappers/RadioGroupPanel';
import TextArea from './wrappers/TextArea';
import YesOrNoQuestion from './wrappers/YesOrNoQuestion';
import { Box, Margin, Form } from '@navikt/k9-react-components';

export default {
    title: 'Form Components',
    component: Form,
};

const Template: Story<ComponentProps<typeof Form>> = (args) => {
    const formMethods = useForm();
    return (
        <FormProvider {...formMethods}>
            <Form {...args} buttonLabel="Lagre">
                <CheckboxGroup
                    question="Er dette en checkbox group?"
                    name="test"
                    checkboxes={[
                        {
                            value: 'ja',
                            label: 'Ja',
                        },
                    ]}
                />
                <Box marginTop={Margin.xLarge}>
                    <Datepicker name="test" />
                </Box>
                <Box marginTop={Margin.xLarge}>
                    <PeriodpickerList
                        fromDatepickerProps={{
                            label: 'Fra',
                            ariaLabel: 'fra',
                        }}
                        toDatepickerProps={{
                            label: 'Til',
                            ariaLabel: 'til',
                        }}
                        name="test"
                        legend="Period picker list"
                    />
                </Box>
                <Box marginTop={Margin.xLarge}>
                    <RadioGroupPanel
                        name="test"
                        question="Er dette et radio group panel?"
                        radios={[
                            {
                                value: 'ja',
                                label: 'Ja',
                            },
                            {
                                value: 'nei',
                                label: 'Nei',
                            },
                        ]}
                    />
                </Box>
                <Box marginTop={Margin.xLarge}>
                    <TextArea name="test" />
                </Box>
                <Box marginTop={Margin.xLarge}>
                    <YesOrNoQuestion name="test" question="Ja eller nei?" />
                </Box>
            </Form>
        </FormProvider>
    );
};

export const FormComponent = Template.bind({});
FormComponent.args = {};
