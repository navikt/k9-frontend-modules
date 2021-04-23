import LinkRel from './LinkRel';

interface Link {
    versjon: string;
    rel: LinkRel;
    type: 'GET' | 'POST';
    href: string;
    requestPayload?: {
        behandlingUuid: string;
    };
}

export default Link;
