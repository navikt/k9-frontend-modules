interface Link {
  versjon: string;
  rel: string;
  type: 'GET' | 'POST';
  href: string;
  requestPayload?: {
    behandlingUuid: string;
  };
}

export default Link;