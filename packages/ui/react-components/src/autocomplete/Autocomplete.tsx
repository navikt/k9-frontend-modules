import React from 'react';
import { Suggestion } from './types/Suggestion';
import AutocompleteSuggestion from './AutocompleteSuggestion';
import './autocomplete.less';

export interface AutocompleteProps {
    onSelect: (value: Suggestion) => void;
    onChange: (value: string) => void;
    placeholder: string;
    suggestions: Suggestion[];
    value: string;
    ariaLabel: string;
    id: string;
    name?: string;
    shouldFocusOnMount?: boolean;
}

interface State {
    activeSuggestionIndex: number;
    hasFocus: boolean;
    shouldShowSuggestions: boolean;
    setAriaActiveDescendant: boolean;
    shouldBlur: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blurDelay: any;
}

class Autocomplete extends React.Component<AutocompleteProps, State> {
    input: HTMLInputElement;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    inputRef: any;

    constructor(props: AutocompleteProps) {
        super(props);
        this.state = {
            activeSuggestionIndex: -1,
            hasFocus: false,
            shouldShowSuggestions: true,
            setAriaActiveDescendant: false,
            shouldBlur: true,
            blurDelay: null,
        };

        this.inputRef = (element) => {
            this.input = element;
        };

        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.setValue = this.setValue.bind(this);
        this.setSuggestionIndex = this.setSuggestionIndex.bind(this);
        this.avoidBlur = this.avoidBlur.bind(this);
        this.clearBlurDelay = this.clearBlurDelay.bind(this);
    }

    componentWillUnmount() {
        const { blurDelay } = this.state;
        if (blurDelay) {
            clearTimeout(blurDelay);
            this.setState({ blurDelay: null });
        }
    }

    onChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { onChange } = this.props;
        const value = (event.target as any).value;
        this.setState({
            activeSuggestionIndex: -1,
            shouldShowSuggestions: true,
        });
        onChange(value);
    }

    onKeyDown(event: React.KeyboardEvent) {
        const { shouldShowSuggestions } = this.state;
        let { activeSuggestionIndex } = this.state;
        const { suggestions } = this.props;
        const hasSelectedSuggestion = activeSuggestionIndex > -1;

        this.setState({
            setAriaActiveDescendant: event.keyCode === 38 || event.keyCode === 40,
        });

        switch (event.keyCode) {
            case 9: // Tab
                if (hasSelectedSuggestion && shouldShowSuggestions) {
                    this.setValue(suggestions[activeSuggestionIndex]);
                }
                break;
            case 13: // Enter
                if (hasSelectedSuggestion && shouldShowSuggestions) {
                    // avoid form submission when user selects a suggestion
                    event.preventDefault();
                    this.setValue(suggestions[activeSuggestionIndex]);
                } else if (shouldShowSuggestions && suggestions.length === 1) {
                    this.setValue(suggestions[0]);
                } else {
                    this.setState({
                        shouldShowSuggestions: false,
                    });
                }
                break;
            case 27: // Esc
                if (shouldShowSuggestions && suggestions.length > 0) {
                    event.preventDefault();
                    this.setState({
                        shouldShowSuggestions: false,
                    });
                }
                break;
            case 38: // Pil opp
                if (shouldShowSuggestions) {
                    event.preventDefault();
                    activeSuggestionIndex = activeSuggestionIndex - 1 === -2 ? -1 : activeSuggestionIndex - 1;
                    this.setState({ activeSuggestionIndex });
                }
                break;
            case 40: // Pil ned
                if (shouldShowSuggestions) {
                    event.preventDefault();
                    activeSuggestionIndex =
                        activeSuggestionIndex + 1 === suggestions.length
                            ? suggestions.length - 1
                            : activeSuggestionIndex + 1;
                    this.setState({ activeSuggestionIndex });
                }
                break;
            default:
                break;
        }
    }

    onFocus() {
        this.setState({
            hasFocus: true,
            activeSuggestionIndex: -1,
        });
    }

    onBlur() {
        const blurDelay = setTimeout(() => {
            const { shouldBlur } = this.state;
            if (shouldBlur) {
                this.setState({
                    hasFocus: false,
                });
            }
        }, 10);
        this.setState({ blurDelay });
    }

    setSuggestionIndex(index: number) {
        this.setState({
            activeSuggestionIndex: index,
        });
        this.clearBlurDelay();
    }

    setValue(value: Suggestion) {
        this.setState(
            {
                shouldShowSuggestions: false,
                activeSuggestionIndex: -1,
            },
            () => {
                this.inputRef.focus();
            }
        );
        this.clearBlurDelay();

        const { onSelect } = this.props;
        onSelect(value);
    }

    avoidBlur() {
        this.setState({ shouldBlur: false });
    }

    clearBlurDelay() {
        const { blurDelay } = this.state;
        if (blurDelay) {
            clearTimeout(blurDelay);
            this.setState({ blurDelay: null });
        }
        this.setState({ shouldBlur: true });
    }

    render() {
        const { suggestions, id, ariaLabel, placeholder, value, name, shouldFocusOnMount } = this.props;
        const { activeSuggestionIndex, setAriaActiveDescendant, hasFocus, shouldShowSuggestions } = this.state;

        const showSuggestions = hasFocus && shouldShowSuggestions && suggestions.length > 0;
        const activeDescendant =
            setAriaActiveDescendant && activeSuggestionIndex > -1 ? `${id}-item-${activeSuggestionIndex}` : undefined;

        return (
            <div
                className="autocomplete"
                aria-expanded={showSuggestions}
                aria-owns={`${id}-suggestions`}
                aria-haspopup="listbox"
            >
                <input
                    id={id}
                    name={name}
                    type="search"
                    aria-label={ariaLabel}
                    aria-autocomplete="list"
                    aria-controls={`${id}-suggestions`}
                    aria-activedescendant={activeDescendant}
                    placeholder={placeholder}
                    value={value}
                    autoComplete="off"
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    onKeyDown={this.onKeyDown}
                    onFocus={this.onFocus}
                    ref={(input) => {
                        this.inputRef = input;
                    }}
                    className="autocomplete__input typo-normal"
                    autoFocus={shouldFocusOnMount}
                />
                <ul
                    id={`${id}-suggestions`}
                    role="listbox"
                    className={showSuggestions ? 'autocomplete__suggestions' : 'autocomplete__suggestions--hidden'}
                >
                    {showSuggestions &&
                        suggestions.map((suggestion: Suggestion, index: number) => (
                            <AutocompleteSuggestion
                                id={`${id}-item-${index}`}
                                key={suggestion.key}
                                index={index}
                                value={suggestion}
                                match={value}
                                active={index === activeSuggestionIndex}
                                onClick={this.setValue}
                                setSuggestionIndex={this.setSuggestionIndex}
                                avoidBlur={this.avoidBlur}
                            />
                        ))}
                </ul>
            </div>
        );
    }
}

export default Autocomplete;
