import React from 'react';
import Icon from '../icon/Icon';

interface GreenCheckIconProps {
    size?: number;
}

const GreenCheckIcon = ({ size }: GreenCheckIconProps) => (
    <Icon size={size || 24}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.5763 0.183317C23.1243 -0.135683 22.5013 -0.0276827 22.1833 0.424317L7.36725 21.4533L1.70725 15.7943C1.31725 15.4033 0.68325 15.4033 0.29325 15.7943C-0.09775 16.1863 -0.09775 16.8183 0.29325 17.2083L6.79325 23.7083C6.98125 23.8963 7.23625 24.0003 7.50025 24.0003C7.81825 24.0003 8.12725 23.8473 8.31725 23.5763L23.8172 1.57632C24.1353 1.12532 24.0273 0.500317 23.5763 0.183317Z"
            fill="#06893A"
        />
    </Icon>
);

export default GreenCheckIcon;
