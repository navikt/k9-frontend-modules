import * as React from 'react';
import './fieldError.less';

interface FieldErrorProps {
    message?: string;
}

const FieldError = ({ message }: FieldErrorProps): JSX.Element => <p className="fieldError">{message}</p>;

export default FieldError;
