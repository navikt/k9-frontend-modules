import { RadioGruppe, Radio } from 'nav-frontend-skjema';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface RadioProps {
    value: string;
    label: React.ReactNode;
}

interface RadioGroupPanelProps {
    question: React.ReactNode;
    name: string;
    radios: RadioProps[];
    validators?: { [key: string]: (v: any) => string | boolean | undefined };
    onChange?: (value) => void;
    disabled?: boolean;
}

const RadioGroupPanel = ({ question, name, validators, radios, onChange, disabled }: RadioGroupPanelProps) => {
    const { control, formState } = useFormContext();
    const { errors } = formState;
    const customOnChange = onChange;
    return (
        <Controller
            control={control}
            defaultValue={null}
            name={name}
            rules={{
                validate: {
                    ...validators,
                },
            }}
            render={(props) => {
                const reactHookFormOnChange = props.field.onChange;
                return (
                    <RadioGruppe legend={question} feil={errors[name]?.message}>
                        {radios.map((radio) => (
                            <Radio
                                key={radio.value}
                                id={radio.value}
                                label={radio.label}
                                name={name}
                                onChange={() => {
                                    if (customOnChange) {
                                        customOnChange(radio.value);
                                    }
                                    reactHookFormOnChange(radio.value);
                                }}
                                checked={radio.value === props.field.value}
                                disabled={disabled}
                            />
                        ))}
                    </RadioGruppe>
                );
            }}
        />
    );
};

export default RadioGroupPanel;
