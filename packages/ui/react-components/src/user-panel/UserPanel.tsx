import React from 'react';
import bem from '@navikt/k9-bem-utils';
import { NedChevron, OppChevron } from 'nav-frontend-chevron';
import { Normaltekst as Text } from 'nav-frontend-typografi';
import styles from './userPanel.less';

const userCls = bem('user');

interface UserPanelProps {
    name: string;
    unit?: string;
    onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
    isToggled?: boolean;
}

const UserPanel: React.FunctionComponent<UserPanelProps> = ({ name, unit, onClick, isToggled }) => {
    return (
        <>
            {onClick ? (
                <button
                    onClick={onClick}
                    type="button"
                    className={styles[userCls.block]}
                    aria-haspopup="dialog"
                    aria-expanded={isToggled}
                >
                    <span>
                        <Text tag="span" className={styles[userCls.element('name')]}>
                            {name}
                        </Text>
                        {unit && (
                            <Text tag="span" className={styles[userCls.element('unit')]}>
                                {unit}
                            </Text>
                        )}
                    </span>
                    {isToggled ? (
                        <OppChevron className={styles[userCls.element('chevron')]} />
                    ) : (
                        <NedChevron className={styles[userCls.element('chevron')]} />
                    )}
                </button>
            ) : (
                <div className={styles[userCls.block]}>
                    <Text className={styles[userCls.element('name')]}>{name}</Text>
                    {unit && <Text className={styles[userCls.element('unit')]}>{unit}</Text>}
                </div>
            )}
        </>
    );
};

export default UserPanel;
