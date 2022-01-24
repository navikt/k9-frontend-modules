import {prettifyDateString} from '@navikt/k9-date-utils';
import React from 'react';
import './ustrukturertDokumentElement.less';
import { ContentWithTooltip, OnePersonIconGray, OnePersonOutlineGray, WarningIcon } from '../../index';
import Dokument from '../types/Dokument';

interface UstrukturertDokumentElementProps {
  dokument: Dokument;
}

const UstrukturertDokumentElement = ({
  dokument: {datert, mottattDato, annenPartErKilde},
}: UstrukturertDokumentElementProps): JSX.Element => {
  const parterLabel = () => {
    if (annenPartErKilde) {
      return (
        <ContentWithTooltip tooltipText="Annen part" inline>
          <OnePersonOutlineGray/>
        </ContentWithTooltip>
      );
    }
    return (
      <ContentWithTooltip tooltipText="Søker" inline>
        <OnePersonIconGray/>
      </ContentWithTooltip>
    );
  };

  return (
    <div className="ustrukturertDokumentElement">
      <ContentWithTooltip tooltipText="Dokumentet må håndteres">
        <WarningIcon/>
      </ContentWithTooltip>
      <div className="ustrukturertDokumentElement__texts">
        <p className="ustrukturertDokumentElement__texts__type" id="ikkeKlassifisertText">
          <span className="visuallyHidden">Type</span>
          Ikke klassifisert
        </p>
        <span className="ustrukturertDokumentElement__texts__date">
          <span className="visuallyHidden">Datert</span>
          <ContentWithTooltip inline tooltipText="Dato dokumentet ble mottatt">
            {`${prettifyDateString(datert || mottattDato)}*`}
          </ContentWithTooltip>
        </span>
        <span className="ustrukturertDokumentElement__texts__part">
          <span className="visuallyHidden">Part</span>
          {parterLabel()}
        </span>
      </div>
    </div>
  );
};

export default UstrukturertDokumentElement;
