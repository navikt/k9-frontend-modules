import React from 'react';
import { Suggestion } from './types/Suggestion';
import styles from './autocompleteSuggestion.less';

interface Props {
    id: string;
    index: number;
    onClick: (value: Suggestion) => void;
    value: Suggestion;
    match: string;
    active: boolean;
    setSuggestionIndex: (index: number) => void;
    avoidBlur: () => void;
}

interface State {
    value: Suggestion;
}

class AutocompleteSuggestion extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: props.value,
        };

        this.onClick = this.onClick.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
    }

    onClick() {
        const { onClick } = this.props;
        const { value } = this.state;
        onClick(value);
    }

    onMouseMove() {
        const { setSuggestionIndex, index } = this.props;
        setSuggestionIndex(index);
    }

    render() {
        const { match, active, avoidBlur, id } = this.props;
        // eslint-disable-next-line react/destructuring-assignment
        const { value } = this.state.value;
        const matchFound = value.toLowerCase().startsWith(match.toLowerCase());

        return (
            <li
                id={id}
                role="option"
                aria-selected={active}
                onClick={this.onClick}
                onMouseMove={this.onMouseMove}
                onFocus={avoidBlur}
                onMouseDown={avoidBlur}
                onKeyDown={avoidBlur}
                className="autocompleteSuggestion typo-normal"
            >
                {matchFound ? (
                    <span
                        className={`${styles.autocompleteSuggestion__inner} ${
                            active ? styles['autocompleteSuggestion--active'] : ''
                        }`}
                    >
                        {value.substring(0, match.length)}
                        <span className={styles.autocompleteSuggestion__substring}>
                            {value.substring(match.length)}
                        </span>
                    </span>
                ) : (
                    <span
                        className={`${styles.autocompleteSuggestion__inner} ${
                            active ? styles['autocompleteSuggestion--active'] : ''
                        }`}
                    >
                        {value}
                    </span>
                )}
            </li>
        );
    }
}

export default AutocompleteSuggestion;
