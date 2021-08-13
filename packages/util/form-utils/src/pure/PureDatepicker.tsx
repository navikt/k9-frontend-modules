import React from 'react';
import { Datepicker } from 'nav-datovelger';
import { CalendarPlacement } from 'nav-datovelger/lib/types';
import { DatepickerProps } from 'nav-datovelger/lib/Datepicker';
import { Label } from 'nav-frontend-skjema';
import './datepicker.less';
import { FieldError } from '@navikt/k9-react-components';

interface CustomDatepickerProps {
    label: string;
    errorMessage?: string;
    ariaLabel?: string;
    inputId?: string;
    calendarSettings?: {
        position?: CalendarPlacement;
    };
    disabled?: boolean;
    initialMonth?: Date;
}

const PureDatepicker = ({
    label,
    value,
    onChange,
    errorMessage,
    limitations,
    ariaLabel,
    inputId,
    calendarSettings,
    disabled,
    initialMonth,
}: DatepickerProps & CustomDatepickerProps): JSX.Element => {
    const dayPickerProps = { initialMonth: initialMonth ? new Date(initialMonth) : undefined };

    return (
        <div className="datepicker">
            {label && <Label htmlFor={inputId}>{label}</Label>}
            <Datepicker
                onChange={onChange}
                value={value}
                inputProps={{
                    placeholder: 'dd.mm.åååå',
                    'aria-label': ariaLabel,
                }}
                limitations={limitations}
                dayPickerProps={dayPickerProps}
                calendarSettings={calendarSettings}
                inputId={inputId}
                disabled={disabled}
            />
            {errorMessage && <FieldError message={errorMessage} />}
        </div>
    );
};

export default PureDatepicker;
