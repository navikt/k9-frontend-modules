import Link from './Link';

export interface Dokument {
  annenPartErKilde: boolean;
  behandlet: boolean;
  benyttet: boolean;
  bruktTilMinstEnVurdering: boolean;
  datert: string;
  duplikatAvId: string;
  duplikater: string[];
  fremhevet: boolean;
  id: string;
  links: Link[];
  mottattDato: string;
  mottattTidspunkt: string;
  navn: string;
  type: string;
}

export default Dokument;
