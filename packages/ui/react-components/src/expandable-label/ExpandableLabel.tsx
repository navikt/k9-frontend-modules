import * as React from 'react';
import { Collapse } from 'react-collapse';
import ChevronIconBlue from '../icons/ChevronIconBlue';
import './expandableLabel.less';

interface HelptextProps {
    labelText: React.ReactNode;
    helptext: string;
    labelFor: string;
}

const ExpandableLabel = ({ helptext, labelText, labelFor }: HelptextProps): JSX.Element => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="expandableLabel">
            <label htmlFor={labelFor}>{labelText}</label>
            <Collapse isOpened={open}>
                <p className="expandableLabel__helptext">{helptext}</p>
            </Collapse>

            <button
                className="expandableLabel__button"
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                {open ? 'Lukk hjelpetekst' : 'Mer hjelpetekst'}
                <span
                    className={
                        open ? 'expandableLabel__chevron expandableLabel__chevron--open' : 'expandableLabel__chevron'
                    }
                >
                    <ChevronIconBlue />
                </span>
            </button>
        </div>
    );
};

export default ExpandableLabel;
