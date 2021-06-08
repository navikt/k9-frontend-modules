import * as React from 'react';
import bem from '@navikt/k9-bem-utils';
import { NedChevron, OppChevron } from 'nav-frontend-chevron';
import { Normaltekst as Text } from 'nav-frontend-typografi';
import './userPanelStyles.less';

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
                    className={userCls.block}
                    aria-haspopup="dialog"
                    aria-expanded={isToggled}
                >
                    <span>
                        <Text tag="span" className={userCls.element('name')}>
                            {name}
                        </Text>
                        {unit && (
                            <Text tag="span" className={userCls.element('unit')}>
                                {unit}
                            </Text>
                        )}
                    </span>
                    {isToggled ? (
                        <OppChevron className={userCls.element('chevron')} />
                    ) : (
                        <NedChevron className={userCls.element('chevron')} />
                    )}
                </button>
            ) : (
                <div className={userCls.block}>
                    <Text className={userCls.element('name')}>{name}</Text>
                    {unit && <Text className={userCls.element('unit')}>{unit}</Text>}
                </div>
            )}
        </>
    );
};

export default UserPanel;
