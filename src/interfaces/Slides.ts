export interface Slides {
  [key: string]: Slide;
}
export interface Slide {
  src: string;
  title: string;
  subheader: string;
  description: string;
  btnText?: string;
  url?: string;
}
