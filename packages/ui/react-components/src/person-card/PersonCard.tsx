import bemUtils from '@navikt/k9-bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import Clipboard from '../clipboard/Clipboard';
import Popover from '../popover/Popover';
import Card from './Card';
import GenderIcon from './GenderIcon';
import Menu from './Menu';
import styles from './personCard.less';

export type GenderType = 'male' | 'female' | 'unknown';
export enum Gender {
    male = 'male',
    female = 'female',
    unknown = 'unknown',
}

export interface PersonCardData {
    name: string;
    fodselsnummer: string;
    gender: GenderType;
    url?: string;
    isActive?: boolean;
    renderMenuContent?: () => React.ReactNode;
    renderLabelContent?: () => React.ReactNode;
    isChild?: boolean;
    childAge?: string | React.ReactNode;
}

const personCardCls = bemUtils('personCard');

const PersonCard = ({
    name,
    gender,
    fodselsnummer,
    isActive,
    url,
    renderMenuContent,
    renderLabelContent,
    isChild,
    childAge,
}: PersonCardData): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuRef = React.useRef(null);
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };
    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    const onClick = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };
    const userDetails = (
        <>
            <Normaltekst
                tag="span"
                className={
                    isActive
                        ? `${styles.personCard__name} ${styles['personCard__name--active']}`
                        : styles[personCardCls.element('name')]
                }
            >
                {name}
            </Normaltekst>
        </>
    );

    return (
        <Card active={isActive}>
            <div className={styles[personCardCls.element('name-gender-container')]}>
                <GenderIcon gender={gender} isChild={isChild} />
                {url ? (
                    <a
                        className={styles[personCardCls.element('selector')]}
                        aria-current={isActive}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {userDetails}
                    </a>
                ) : (
                    <p className={`${styles.personCard__selector} ${styles['personCard__selector--inactive']}`}>
                        {userDetails}
                    </p>
                )}
            </div>
            {isChild ? (
                <div>
                    {childAge && (
                        <div className={styles[personCardCls.element('child-age')]}>
                            <Normaltekst tag="span">({childAge})</Normaltekst>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    <Normaltekst tag="span">/</Normaltekst>
                    <div className={styles[personCardCls.element('container')]}>
                        <Clipboard buttonLabel={`Kopier ${name}s fødselsnummer til utklippstavlen`}>
                            <Normaltekst>{fodselsnummer}</Normaltekst>
                        </Clipboard>

                        {!!renderMenuContent && (
                            <div ref={menuRef}>
                                <Popover
                                    popperIsVisible={isMenuOpen}
                                    renderArrowElement
                                    customPopperStyles={{ top: '6px', left: '-1px', zIndex: 2 }}
                                    popperProps={{
                                        children: (): React.ReactNode =>
                                            renderMenuContent && (
                                                <div className={styles[personCardCls.element('menu-container')]}>
                                                    {renderMenuContent()}
                                                </div>
                                            ),
                                        placement: 'bottom-start',
                                        strategy: 'fixed',
                                    }}
                                    referenceProps={{
                                        children: ({ ref }): React.ReactNode => (
                                            <div
                                                className={styles[personCardCls.element('menu-button-container')]}
                                                ref={ref}
                                            >
                                                <Menu onClick={onClick} isOpen={isMenuOpen} />
                                            </div>
                                        ),
                                    }}
                                    arrowProps={{ style: { left: '8px' } }}
                                />
                            </div>
                        )}
                        {renderLabelContent && (
                            <div className={styles[personCardCls.element('labelContainer')]}>
                                {renderLabelContent()}
                            </div>
                        )}
                    </div>
                </>
            )}
        </Card>
    );
};
export default PersonCard;
