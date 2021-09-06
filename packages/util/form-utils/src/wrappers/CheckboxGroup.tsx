import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox, CheckboxGruppe, CheckboxProps } from 'nav-frontend-skjema';

interface CheckboxGroupProps {
    question: string;
    name: string;
    checkboxes: CheckboxProps[];
    validators?: { [key: string]: (v: any) => string | boolean | undefined };
    disabled?: boolean;
}

const CheckboxGroup = ({ question, checkboxes, name, validators, disabled }: CheckboxGroupProps) => {
    const { control, formState } = useFormContext();
    const { errors } = formState;
    return (
        <Controller
            control={control}
            defaultValue={[]}
            name={name}
            rules={{
                validate: {
                    ...validators,
                },
            }}
            render={({ field }) => {
                const { name, value, onChange } = field;
                return (
                    <CheckboxGruppe legend={question} feil={errors[name]?.message}>
                        {checkboxes.map((checkboxProps) => (
                            <Checkbox
                                {...checkboxProps}
                                onChange={() => {
                                    const index = value.indexOf(checkboxProps.value);
                                    const newValue = [...value];
                                    if (index > -1) {
                                        newValue.splice(index, 1);
                                    } else {
                                        newValue.push(checkboxProps.value);
                                    }
                                    onChange(newValue);
                                }}
                                checked={value.indexOf(checkboxProps.value) >= 0}
                                key={'' + checkboxProps.value}
                                disabled={disabled}
                            />
                        ))}
                    </CheckboxGruppe>
                );
            }}
        />
    );
};

export default CheckboxGroup;
