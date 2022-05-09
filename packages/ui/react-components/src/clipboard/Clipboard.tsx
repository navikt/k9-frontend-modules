import React from 'react';
import bemUtils from '@navikt/k9-bem-utils';
import ClipboardIcon from './ClipboardIcon';
import copyContentsToClipboard from './util';
import styles from './clipboard.less';

interface ClipboardProps {
    children: React.ReactNode;
    buttonLabel?: string;
}

const clipboardCls = bemUtils('clipboard');

const Clipboard = ({ children, buttonLabel = 'Kopier' }: ClipboardProps): JSX.Element => {
    const [didCopy, setDidCopy] = React.useState(false);
    const [shouldAnimate, setShouldAnimate] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>();

    const copy = (): void => {
        if (!didCopy) {
            setDidCopy(copyContentsToClipboard(ref.current.firstChild));
            setShouldAnimate(true);
        }
    };

    React.useEffect(() => {
        if (didCopy) {
            setTimeout(() => setDidCopy(false), 2000);
        }
    }, [didCopy]);

    const animationContainer = `${styles[clipboardCls.element('animationContainer')]} ${
        shouldAnimate ? styles[clipboardCls.element('animate')] : ''
    }`;

    return (
        <div className={styles[clipboardCls.block]}>
            <div ref={ref}>{children}</div>
            <button
                data-tooltip={didCopy ? 'Kopiert!' : 'Kopier'}
                data-tip-disable={!didCopy}
                onClick={copy}
                data-class="typo-undertekst"
                type="button"
                aria-label={buttonLabel}
                className={styles[clipboardCls.element('button')]}
            >
                <span className={animationContainer} key={didCopy ? 'check' : 'copy'}>
                    <ClipboardIcon type={didCopy ? 'check' : 'copy'} size={24} />
                </span>
            </button>
            {didCopy && (
                <span className={styles[clipboardCls.element('kopiert')]} aria-live="assertive">
                    Kopiert!
                </span>
            )}
        </div>
    );
};

export default Clipboard;
