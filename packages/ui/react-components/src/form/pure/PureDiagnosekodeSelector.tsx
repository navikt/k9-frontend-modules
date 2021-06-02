import { Label } from 'nav-frontend-skjema';
import NavFrontendSpinner from 'nav-frontend-spinner';
import * as React from 'react';
import './diagnosekodeSelector.less';
import FieldError from '../../field-error/FieldError';
import Autocomplete from '../../autocomplete';

interface Diagnosekode {
    kode: string;
    beskrivelse: string;
}

interface DiagnosekodeSelectorProps {
    label: string;
    onChange: (value) => void;
    name: string;
    errorMessage?: string;
    initialDiagnosekodeValue: string;
    hideLabel?: boolean;
    showSpinner?: boolean;
}

const fetchDiagnosekoderByQuery = (queryString: string) => {
    return fetch(`/k9/diagnosekoder/?query=${queryString}&max=8`).then((response) => response.json());
};

const PureDiagnosekodeSelector = ({
    label,
    onChange,
    name,
    errorMessage,
    initialDiagnosekodeValue,
    hideLabel,
    showSpinner,
}: DiagnosekodeSelectorProps): JSX.Element => {
    const [suggestions, setSuggestions] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const getUpdatedSuggestions = async (queryString: string) => {
        if (queryString.length >= 3) {
            setIsLoading(true);
            const diagnosekoder: Diagnosekode[] = await fetchDiagnosekoderByQuery(queryString);
            setIsLoading(false);
            return diagnosekoder.map(({ kode, beskrivelse }) => ({
                key: kode,
                value: `${kode} - ${beskrivelse}`,
            }));
        }
        return [];
    };

    React.useEffect(() => {
        const getInitialDiagnosekode = async () => {
            const diagnosekode = await getUpdatedSuggestions(initialDiagnosekodeValue);
            if (diagnosekode.length > 0 && diagnosekode[0].value) {
                setInputValue(diagnosekode[0].value);
            }
        };
        getInitialDiagnosekode();
    }, [initialDiagnosekodeValue]);

    const onInputValueChange = async (v) => {
        setInputValue(v);
        const newSuggestionList = await getUpdatedSuggestions(v);
        setSuggestions(newSuggestionList);
    };
    return (
        <div className="diagnosekodeContainer">
            <div className={hideLabel ? 'diagnosekodeContainer__hideLabel' : ''}>
                <Label htmlFor={name}>{label}</Label>
            </div>
            <div className="diagnosekodeContainer__autocompleteContainer">
                <Autocomplete
                    id={name}
                    suggestions={suggestions}
                    value={inputValue}
                    onChange={onInputValueChange}
                    onSelect={(e) => {
                        onInputValueChange(e.value);
                        onChange(e);
                    }}
                    ariaLabel="Søk etter diagnose"
                    placeholder="Søk etter diagnose"
                />
                {showSpinner && (
                    <div className="diagnosekodeContainer__spinnerContainer">{isLoading && <NavFrontendSpinner />}</div>
                )}
            </div>
            {errorMessage && <FieldError message={errorMessage} />}
        </div>
    );
};

export default PureDiagnosekodeSelector;
