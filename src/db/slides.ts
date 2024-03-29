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
  },
  'regnacraft': {
    src: 'assets/imgs/projects/regnacraft-project.png',
    title: 'RegnaCraft',
    subheader: 'Flask',
    description:
      'Site para um servidor de minecraft. Possui um sistema de loja virtual para compra de vips.',
  }
};