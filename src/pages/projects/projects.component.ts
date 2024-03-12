import { Component } from '@angular/core';
import { CarouselComponent } from '../../_components/carousel/carousel.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CarouselComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  slides: Slide[] = [
    {
      src: 'assets/imgs/projects/portfolio-project.png',
      title: 'Portfólio',
      subheader: 'Angular 17',
      description: 'Esse portfólio foi desenvolvido com Angular 17. (Clique no ver mais para ver o repositório no GitHub)'
    },
    {
      src: 'assets/imgs/projects/electron-certificate-project.png',
      title: 'Electron Certificate',
      subheader: 'Electron',
      description: 'Electron é um aplicativo de geração de certificados seguindo um modelo defido pelo usuário.'
    },
    {
      src: 'assets/imgs/projects/regnacraft-project.png',
      title: 'RegnaCraft',
      subheader: 'Flask',
      description: 'Site para um servidor de minecraft. Possui um sistema de loja virtual para compra de vips.'
    },
    {
      src: 'assets/imgs/projects/connected-med-project.jpeg',
      title: 'Connected Med',
      subheader: 'React Native',
      description: 'Aplicativo móvel de agendamento médico. Possui um sistema de agendamento de consultas, cadastro de médico e de paciente.'
    },
    {
      src: 'assets/imgs/projects/regnacraft-project.png',
      title: 'RegnaCraft',
      subheader: 'Flask',
      description: 'Site para um servidor de minecraft. Possui um sistema de loja virtual para compra de vips.'
    },
    {
      src: 'assets/imgs/projects/regnacraft-project.png',
      title: 'RegnaCraft',
      subheader: 'Flask',
      description: 'Site para um servidor de minecraft. Possui um sistema de loja virtual para compra de vips.'
    },
    {
      src: 'assets/imgs/projects/regnacraft-project.png',
      title: 'RegnaCraft',
      subheader: 'Flask',
      description: 'Site para um servidor de minecraft. Possui um sistema de loja virtual para compra de vips.'
    },
  ];
}

interface Slide {
  src: string;
  title: string;
  subheader: string;
  description: string;
}
