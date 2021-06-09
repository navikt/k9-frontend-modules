import React from 'react';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import './form.less';
import Box, { Margin } from '../box/Box';

export interface FormProps {
    children: React.ReactNode;
    buttonLabel?: string;
    onSubmit: (e?: any) => void;
    shouldShowSubmitButton?: boolean;
    onAvbryt?: () => void;
    submitButtonDisabled?: boolean;
    cancelButtonDisabled?: boolean;
}

const Form = ({
    children,
    onSubmit,
    buttonLabel,
    shouldShowSubmitButton,
    onAvbryt,
    submitButtonDisabled,
    cancelButtonDisabled,
}: FormProps): JSX.Element => (
    <form onSubmit={onSubmit}>
        {children}
        {shouldShowSubmitButton !== false && (
            <Box marginTop={Margin.xxLarge}>
                <div className="buttonContainer">
                    <Hovedknapp
                        id="submitButton"
                        disabled={submitButtonDisabled === true}
                        spinner={submitButtonDisabled === true}
                    >
                        {buttonLabel}
                    </Hovedknapp>
                    {onAvbryt && (
                        <div className="buttonContainer__avbryt">
                            <Knapp htmlType="button" onClick={onAvbryt} disabled={cancelButtonDisabled === true}>
                                Avbryt
                            </Knapp>
                        </div>
                    )}
                </div>
            </Box>
        )}
    </form>
);

export default Form;
