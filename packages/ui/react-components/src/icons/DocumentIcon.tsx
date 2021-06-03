import React from 'react';

interface DocumentIconProps {
    className?: string;
}

const DocumentIcon = ({ className }: DocumentIconProps): JSX.Element => (
    <svg
        className={className}
        width="34"
        height="44"
        viewBox="0 0 34 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.5 44H0.5V0H20.6667L33.5 12.8333V44ZM17 3.66667H4.16667V40.3333H29.8333V14.6667H17V3.66667ZM20.6667 5.18833V11L26.4783 10.9982L20.6667 5.18833Z"
            fill="#0067C5"
        />
    </svg>
);

export default DocumentIcon;
