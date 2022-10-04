import React from 'react';
import { Textarea } from 'nav-frontend-skjema';
import { Controller, useFormContext } from 'react-hook-form';
import { ExpandableLabel, Box, Margin } from '@navikt/ft-plattform-komponenter';
import '@navikt/ft-plattform-komponenter/dist/style.css';

interface TextAreaProps {
    label?: React.ReactNode;
    name: string;
    validators?: { [key: string]: (v: any) => string | boolean | undefined };
    helptext?: string;
    textareaClass?: string;
    id?: string;
    disabled?: boolean;
}

const TextArea = ({ label, name, validators, helptext, textareaClass, id, disabled }: TextAreaProps): JSX.Element => {
    const { control, formState } = useFormContext();
    const { errors } = formState;

    return (
        <Controller
            control={control}
            name={name}
            defaultValue=""
            rules={{
                validate: {
                    ...validators,
                },
            }}
            render={({ field }) => {
                const { value, onChange } = field;
                const textAreaValue = value?.length === 0 ? '' : value;

                if (helptext) {
                    return (
                        <>
                            <ExpandableLabel labelText={label} helptext={helptext} labelFor={name} />
                            <Box marginTop={Margin.medium}>
                                <Textarea
                                    value={textAreaValue}
                                    maxLength={0}
                                    feil={errors[name]?.message}
                                    name={name}
                                    onChange={onChange}
                                    id={id}
                                    textareaClass={textareaClass}
                                    autoComplete="off"
                                    disabled={disabled}
                                />
                            </Box>
                        </>
                    );
                }
                return (
                    <Textarea
                        value={textAreaValue}
                        label={label}
                        maxLength={0}
                        feil={errors[name]?.message}
                        id={id}
                        name={name}
                        onChange={onChange}
                        textareaClass={textareaClass}
                        autoComplete="off"
                        disabled={disabled}
                    />
                );
            }}
        />
    );
};

export default TextArea;
