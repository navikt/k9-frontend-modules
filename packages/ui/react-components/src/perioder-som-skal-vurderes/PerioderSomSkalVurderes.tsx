import React from 'react';
import { Period } from '@navikt/period-utils';
import ContentWithTooltip from '../content-with-tooltip/ContentWithTooltip';
import OnePersonIconGray from '../icons/OnePersonIconGray';
import WarningIcon from '../icons/WarningIcon';
import './perioderSomSkalVurderes.less';

interface PerioderSomSkalVurderesProps {
    perioder: Period[];
    visParterLabel?: boolean;
}

const PerioderSomSkalVurderes = ({
    perioder,
    visParterLabel,
}: PerioderSomSkalVurderesProps) => {
    return (
        <div className="perioderSomSkalVurderes" id="perioderSomSkalVurderes">
            <span className="visuallyHidden">Type</span>
            <div className="perioderSomSkalVurderes__indicator">
                <ContentWithTooltip tooltipText="Perioden må vurderes">
                    <WarningIcon />
                </ContentWithTooltip>
            </div>
            <div className="perioderSomSkalVurderes__texts">
                <div>
                    {perioder.map(({ fom, tom }, index) => {
                        const periode = new Period(fom, tom);
                        return (
                            <p
                                key={`${periode.fom}_${periode.tom}`}
                                className="perioderSomSkalVurderes__texts__period"
                            >
                                {index === 0 && (
                                    <span className="visuallyHidden">
                                        Perioder
                                    </span>
                                )}
                                {periode.prettifyPeriod()}
                            </p>
                        );
                    })}
                </div>
                {visParterLabel && (
                    <div className="perioderSomSkalVurderes__texts__parterIcon">
                        <span className="visuallyHidden">Parter</span>
                        <ContentWithTooltip tooltipText="Søker">
                            <OnePersonIconGray />
                        </ContentWithTooltip>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PerioderSomSkalVurderes;
