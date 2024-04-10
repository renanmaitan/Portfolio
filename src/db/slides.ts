import { Slides } from "../interfaces/Slides";

export const slides: Slides = {
  'portfolio': {
    src: 'assets/imgs/projects/portfolio-project.png',
    title: 'Portfólio',
    subheader: 'Angular 17',
    description:
      'Esse portfólio foi desenvolvido com Angular 17.',
    btnText: 'Ver no GitHub',
    url: 'https://github.com/renanmaitan/Portfolio',
  },
  'catalogo-api': {
    src: 'assets/imgs/projects/catalogo-api-project.png',
    title: 'Catalogo API',
    subheader: 'Spring Framework',
    description:
      'API desenvolvida para ser consumida por um site online de exibição de produtos.',
  },
  'connect-med': {
    src: 'assets/imgs/projects/connect-med-project.jpeg',
    title: 'Connect Med',
    subheader: 'React Native',
    description:
      'Aplicativo móvel de agendamento médico. Possui um sistema de agendamento de consultas, cadastro de médico e de paciente.',
  },
  'electron-certificate': {
    src: 'assets/imgs/projects/electron-certificate-project.png',
    title: 'Electron Certificate',
    subheader: 'Electron',
    description:
      'Electron Certificate é um aplicativo de geração de certificados seguindo um modelo defido pelo usuário.',
  }
};