export interface Language {
  Hero: LanguajeHero;
  WeDo: LanguajeWeDo;
  WhyUs: LanguajeWhyUs;
  Technologies: LanguajeTechnologies;
  About: LanguajeAbout;
  Contact: LanguajeContact;
}

export interface LanguajeAbout {
  title1: string;
  subtitle: string;
  description: string;
  subtitle2: string;
  items: string[];
  subtitle3: string;
  description2: string;
}

export interface LanguajeContact {
  title: string;
  subtitle: string;
  form: LanguajeForm;
  snackBarMessage: string;
}

export interface LanguajeForm {
  labelName: string;
  placeholderName: string;
  labelEmail: string;
  placeholderEmail: string;
  labelMessage: string;
  placeholderMessage: string;
  button: string;
}

export interface LanguajeHero {
  title1: string;
  title2: string[];
  subtitle: string;
  button: string;
}

export interface LanguajeWeDo {
  title1: string;
  title2: string;
  cardService: LanguajeCardService[];
}

export interface LanguajeCardService {
  id: number;
  title: string;
  description: string;
  step1Time: string;
  step1: string;
  descriptionStep1: string;
  step2Time: string;
  step2: string;
  descriptionStep2: string;
  step3Time: string;
  step3: string;
  descriptionStep3: string;
  step4Time: string;
  step4: string;
  descriptionStep4: string;
}

export interface LanguajeTechnologies {
  title: string;
  description: string;
}

export interface LanguajeWhyUs {
  title: string;
  description: string;
  reasonCard: LanguajeTechnologies[];
}
