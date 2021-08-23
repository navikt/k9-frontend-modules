import React from 'react';
import './infostripe.less';

interface BaseInfostripeProps {
    iconRenderer: () => React.ReactNode;
}

interface ElementInfostripeProps extends BaseInfostripeProps {
    element: JSX.Element;
    text?: string;
}
interface TextInfostripeProps extends BaseInfostripeProps {
    text: string;
    element?: JSX.Element;
}
type InfostripeProps = ElementInfostripeProps | TextInfostripeProps;
const Infostripe = ({ text, iconRenderer, element }: InfostripeProps) => (
    <div className="infostripe">
        <div className="infostripe__iconContainer">{iconRenderer()}</div>
        <div className="infostripe__textContainer">
            {element ? element : <p className="infostripe__text">{text}</p>}
        </div>
    </div>
);

export default Infostripe;
