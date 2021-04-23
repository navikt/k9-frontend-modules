import React from 'react';
import { Period } from '@navikt/period-utils';
import ContentWithTooltip from '../content-with-tooltip/ContentWithTooltip';
import GreenCheckIconFilled from '../icons/GreenCheckIconFilled';
import OnePersonIconGray from '../icons/OnePersonIconGray';
import OnePersonOutlineGray from '../icons/OnePersonOutlineGray';
import RedCrossIconFilled from '../icons/RedCrossIconFilled';
import TwoPersonsWithOneHighlightedIconGray from '../icons/TwoPersonsWithOneHighlightedIconGray';
import InstitutionIcon from '../icons/InstitutionIcon';
import InnleggelsesperiodeIkonOverOppfylt from '../innleggelsesperiode-ikon-over-oppfylt/InnleggelsesperiodeIkonOverOppfylt';
import InnleggelsesperiodeIkonOverIkkeOppfylt from '../innleggelsesperiode-ikon-over-ikkeoppfylt/InnleggelsesperiodeIkonOverIkkeOppfylt';
import Vurderingsresultat from '../vurderingsnavigasjon/Vurderingsresultat';
import Vurderingselement from '../vurderingsnavigasjon/Vurderingselement';
import ManuellVurdering from '../vurderingsnavigasjon/ManuellVurdering';
import './vurderingsperiodeElement.less';

interface VurderingsperiodeElementProps {
    vurderingselement: Vurderingselement;
    renderAfterElement?: () => React.ReactNode;
    visParterLabel?: boolean;
}

const renderInnleggelsesperiodeIcon = (resultat: Vurderingsresultat) => {
    if (resultat === Vurderingsresultat.OPPFYLT) {
        return (
            <ContentWithTooltip tooltipText="Innleggelsesperiode over oppfylt periode">
                <InnleggelsesperiodeIkonOverOppfylt />
            </ContentWithTooltip>
        );
    }
    if (resultat === Vurderingsresultat.IKKE_OPPFYLT) {
        return (
            <ContentWithTooltip tooltipText="Innleggelsesperiode over ikke oppfylt periode">
                <InnleggelsesperiodeIkonOverIkkeOppfylt />
            </ContentWithTooltip>
        );
    }
    return (
        <ContentWithTooltip tooltipText="Innleggelsesperiode">
            <InstitutionIcon />
        </ContentWithTooltip>
    );
};

const renderResultatIcon = (resultat: Vurderingsresultat) => {
    if (resultat === Vurderingsresultat.OPPFYLT) {
        return (
            <ContentWithTooltip tooltipText="Vilkåret er oppfylt">
                <GreenCheckIconFilled />
            </ContentWithTooltip>
        );
    }
    if (resultat === Vurderingsresultat.IKKE_OPPFYLT) {
        return (
            <ContentWithTooltip tooltipText="Vilkåret er ikke oppfylt">
                <RedCrossIconFilled />
            </ContentWithTooltip>
        );
    }
    return null;
};

const renderStatusIndicator = (vurderingselement: Vurderingselement) => {
    const {
        erInnleggelsesperiode,
        resultat,
    } = vurderingselement as ManuellVurdering;
    if (erInnleggelsesperiode) {
        return renderInnleggelsesperiodeIcon(resultat);
    }
    return renderResultatIcon(resultat);
};

const renderPersonIcon = ({
    gjelderForAnnenPart,
    gjelderForSøker,
}: ManuellVurdering) => {
    if (gjelderForAnnenPart && gjelderForSøker) {
        return (
            <ContentWithTooltip tooltipText="Søker og annen part">
                <div className="vurderingsperiodeElement__texts__parterIcon--wide">
                    <TwoPersonsWithOneHighlightedIconGray />
                </div>
            </ContentWithTooltip>
        );
    }
    if (gjelderForAnnenPart) {
        return (
            <ContentWithTooltip tooltipText="Annen part">
                <OnePersonOutlineGray />
            </ContentWithTooltip>
        );
    }
    return (
        <ContentWithTooltip tooltipText="Søker">
            <OnePersonIconGray />
        </ContentWithTooltip>
    );
};

const VurderingsperiodeElement = ({
    vurderingselement,
    renderAfterElement,
    visParterLabel,
}: VurderingsperiodeElementProps): JSX.Element => {
    const {
        periode: { fom, tom },
    } = vurderingselement;
    const periode = new Period(fom, tom);
    return (
        <div className="vurderingsperiodeElement">
            <span className="visuallyHidden">Type</span>
            <div className="vurderingsperiodeElement__indicator">
                {renderStatusIndicator(vurderingselement)}
            </div>
            <div className="vurderingsperiodeElement__texts">
                <p className="vurderingsperiodeElement__texts__period">
                    <span className="visuallyHidden">Periode</span>
                    {periode.prettifyPeriod()}
                </p>
                {visParterLabel && (
                    <div className="vurderingsperiodeElement__texts__parterIcon">
                        <span className="visuallyHidden">Parter</span>
                        {renderPersonIcon(
                            vurderingselement as ManuellVurdering
                        )}
                    </div>
                )}
            </div>
            {renderAfterElement && renderAfterElement()}
        </div>
    );
};

export default VurderingsperiodeElement;
