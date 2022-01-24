import React from 'react';
import { prettifyDateString } from '@navikt/k9-date-utils';
import './strukturertDokumentElement.less';
import Dokument from '../types/Dokument';
import { ContentWithTooltip, OnePersonOutlineGray } from '../..';
import { DuplicateDocumentsIcon, GreenCheckIconFilled, OnePersonIconGray } from '../../index';

interface StrukturertDokumentElementProps {
    dokument: Dokument;
    dokumentLabel: { [key: string]: string; }
}

const StrukturertDokumentElement = ({
    dokument: { navn, datert, type, annenPartErKilde, duplikater },
    dokumentLabel,
}: StrukturertDokumentElementProps): JSX.Element => {
    const harDuplikater = duplikater?.length > 0;

    const getDokumenttype = () => {
        if (dokumentLabel[type]) {
            return dokumentLabel[type];
        }
        return navn;
    };

    const parterLabel = () => {
        if (annenPartErKilde) {
            return (
                <ContentWithTooltip tooltipText="Annen part" inline>
                    <OnePersonOutlineGray />
                </ContentWithTooltip>
            );
        }
        return (
            <ContentWithTooltip tooltipText="Søker" inline>
                <OnePersonIconGray />
            </ContentWithTooltip>
        );
    };

    return (
        <div className="strukturertDokumentElement">
            <span className="visuallyHidden">Status</span>
            <ContentWithTooltip tooltipText="Dokumentet er ferdig håndtert">
                <GreenCheckIconFilled />
            </ContentWithTooltip>
            <div className="strukturertDokumentElement__texts">
                <p className="strukturertDokumentElement__texts__type">
                    <span className="visuallyHidden">Type</span>
                    {getDokumenttype()}
                </p>
                <span className="strukturertDokumentElement__texts__date">
                    <span className="visuallyHidden">Datert</span>
                    {prettifyDateString(datert)}
                </span>
                <span className="strukturertDokumentElement__texts__part">
                    <span className="visuallyHidden">Part</span>
                    {parterLabel()}
                </span>
                {harDuplikater && (
                    <span className="strukturertDokumentElement__texts__document">
                        <ContentWithTooltip tooltipText="Det finnes ett eller flere duplikater av dette dokumentet">
                            <DuplicateDocumentsIcon />
                        </ContentWithTooltip>
                    </span>
                )}
            </div>
        </div>
    );
};

export default StrukturertDokumentElement;
