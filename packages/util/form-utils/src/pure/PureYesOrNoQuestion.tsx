import React from 'react';
import { RadioGruppe, Radio } from 'nav-frontend-skjema';

interface YesOrNoQuestionProps {
    question: string;
    value: boolean;
    onChange: (value) => void;
    name: string;
    errorMessage?: string;
    disabled?: boolean;
}

enum YesOrNo {
    YES = 'YES',
    NO = 'NO',
}

const resolveYesOrNoLiteral = (value: boolean | undefined) => {
    if (value === true) {
        return YesOrNo.YES;
    }
    if (value === false) {
        return YesOrNo.NO;
    }
    return undefined;
};

const radios = [
    { label: 'Ja', value: YesOrNo.YES },
    { label: 'Nei', value: YesOrNo.NO },
];

const PureYesOrNoQuestion = ({ question, value, onChange, name, errorMessage, disabled }: YesOrNoQuestionProps) => (
    <RadioGruppe legend={question} feil={errorMessage}>
        {radios.map((radio) => (
            <Radio
                id={`${name}${radio.value}`}
                key={radio.value}
                label={radio.label}
                name={name}
                onChange={() => {
                    onChange(radio.value === YesOrNo.YES);
                }}
                checked={resolveYesOrNoLiteral(value) === radio.value}
                disabled={disabled}
            />
        ))}
    </RadioGruppe>
);

export default PureYesOrNoQuestion;
