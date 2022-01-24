import { EkspanderbartpanelBase } from 'nav-frontend-ekspanderbartpanel';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import './dokumentnavigasjon.less';
import Dokument from '../types/Dokument';
import { Dokumentfilter, InteractiveList, StrukturertDokumentElement, UstrukturertDokumentElement } from '../../index';

interface DokumentnavigasjonProps {
    tittel: string;
    dokumenter: Dokument[];
    onDokumentValgt: (dokument: Dokument) => void;
    valgtDokument: Dokument;
    expandedByDefault?: boolean;
    displayFilterOption?: boolean;
    dokumenttype: { [key: string]: string; };
    dokumentLabel: { [key: string]: string; };
}

const erIkkeDuplikat = (dokument: Dokument) => dokument.duplikatAvId === null;
const lagDokumentelement = (dokument: Dokument, dokumenttype: { [key: string]: string; }, dokumentLabel: { [key: string]: string; }) => ({
    dokument,
    renderer: () =>
        dokument.type === dokumenttype.UKLASSIFISERT ? (
            <UstrukturertDokumentElement dokument={dokument} />
        ) : (
            <StrukturertDokumentElement dokument={dokument} dokumentLabel={dokumentLabel} />
        ),
});

const Dokumentnavigasjon = ({
    tittel,
    dokumenter,
    onDokumentValgt,
    valgtDokument,
    expandedByDefault,
    displayFilterOption,
    dokumenttype,
    dokumentLabel
}: DokumentnavigasjonProps): JSX.Element => {
    const [dokumenttypeFilter, setDokumenttypeFilter] = React.useState([...Object.values(dokumenttype)]);
    const updateDokumenttypeFilter = (type) =>
        dokumenttypeFilter.includes(type)
            ? setDokumenttypeFilter(dokumenttypeFilter.filter((v) => v !== type))
            : setDokumenttypeFilter(dokumenttypeFilter.concat([type]));

    const [listExpanded, setListExpanded] = React.useState(expandedByDefault || false);

    const filtrerteDokumenter = dokumenter.filter(
        (dokument) => dokumenttypeFilter.includes(dokument.type) && erIkkeDuplikat(dokument)
    );

    const dokumentElementer = filtrerteDokumenter.map((dokument) => lagDokumentelement(dokument, dokumenttype, dokumentLabel));

    return (
        <div className="dokumentnavigasjon">
            <EkspanderbartpanelBase tittel={tittel} apen={listExpanded} onClick={() => setListExpanded(!listExpanded)}>
                <div className="dokumentnavigasjon__container">
                    <div className="dokumentnavigasjon__columnHeadings">
                        <Element className="dokumentnavigasjon__columnHeading--first">Status</Element>
                        {!displayFilterOption && (
                            <Element className="dokumentnavigasjon__columnHeading--second">Type</Element>
                        )}
                        {displayFilterOption && (
                            <Dokumentfilter
                                dokumentLabel={dokumentLabel}
                                className="dokumentnavigasjon__columnHeading--second"
                                text="Type"
                                filters={dokumenttypeFilter}
                                onFilterChange={updateDokumenttypeFilter}
                                dokumenttype={dokumenttype}
                            />
                        )}
                        <Element className="dokumentnavigasjon__columnHeading--third">Datert</Element>
                        <Element className="dokumentnavigasjon__columnHeading--fourth">Part</Element>
                    </div>
                    {dokumentElementer.length === 0 && (
                        <div style={{ padding: '0.5rem 1rem 1rem 1rem' }}>
                            <Normaltekst>Ingen dokumenter å vise</Normaltekst>
                        </div>
                    )}
                    <InteractiveList
                        elements={dokumentElementer
                            .filter((element) => dokumenttypeFilter.includes(element?.dokument?.type))
                            .map((element, currentIndex) => ({
                                content: element.renderer(),
                                active: element.dokument === valgtDokument,
                                key: `${currentIndex}`,
                                onClick: () => onDokumentValgt(element.dokument),
                            }))}
                    />
                </div>
            </EkspanderbartpanelBase>
        </div>
    );
};

export default Dokumentnavigasjon;
