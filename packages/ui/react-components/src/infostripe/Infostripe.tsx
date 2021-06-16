import React from 'react';
import './infostripe.less';

interface InfostripeProps {
    text: string;
    iconRenderer: () => React.ReactNode;
}

const Infostripe = ({ text, iconRenderer }: InfostripeProps) => (
    <div className="infostripe">
        <div className="infostripe__iconContainer">{iconRenderer()}</div>
        <div className="infostripe__textContainer">
            <p className="infostripe__text">{text}</p>
        </div>
    </div>
);

export default Infostripe;
