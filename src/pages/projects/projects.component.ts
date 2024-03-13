import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../../_components/carousel/carousel.component';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CarouselComponent,
    NgIf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute) { }
  slides: Slides = {
    "portfolio": {
      src: 'assets/imgs/projects/portfolio-project.png',
      title: 'Portfólio',
      subheader: 'Angular 17',
      description: 'Esse portfólio foi desenvolvido com Angular 17. (Clique no ver mais para ver o repositório no GitHub)'
    },
    "electron-certificate": {
      src: 'assets/imgs/projects/electron-certificate-project.png',
      title: 'Electron Certificate',
      subheader: 'Electron',
      description: 'Electron é um aplicativo de geração de certificados seguindo um modelo defido pelo usuário.'
    },
    "regnacraft": {
      src: 'assets/imgs/projects/regnacraft-project.png',
      title: 'RegnaCraft',
      subheader: 'Flask',
      description: 'Site para um servidor de minecraft. Possui um sistema de loja virtual para compra de vips.'
    },
    "connected-med": {
      src: 'assets/imgs/projects/connected-med-project.jpeg',
      title: 'Connected Med',
      subheader: 'React Native',
      description: 'Aplicativo móvel de agendamento médico. Possui um sistema de agendamento de consultas, cadastro de médico e de paciente.'
    },
    "regnacraft2": {
      src: 'assets/imgs/projects/regnacraft-project.png',
      title: 'RegnaCraft',
      subheader: 'Flask',
      description: 'Site para um servidor de minecraft. Possui um sistema de loja virtual para compra de vips.'
    },
    "regnacraft3": {
      src: 'assets/imgs/projects/regnacraft-project.png',
      title: 'RegnaCraft',
      subheader: 'Flask',
      description: 'Site para um servidor de minecraft. Possui um sistema de loja virtual para compra de vips.'
    },
    "regnacraft4": {
      src: 'assets/imgs/projects/regnacraft-project.png',
      title: 'RegnaCraft',
      subheader: 'Flask',
      description: 'Site para um servidor de minecraft. Possui um sistema de loja virtual para compra de vips.'
    }
  };

  showSlide: boolean = false;
  selectedSlide?: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id'] && this.slides[params['id']]) {
        this.showSlide = true;
        this.selectedSlide = params['id'];
      }
      else {
        this.router.navigate(['projects']);
      }
    });
  }

  onOpenProjectEvent(key: string) {
    this.router.navigate(['projects', key]);
  }
}

interface Slides {
  [key: string]: Slide;
}
interface Slide {
  src: string;
  title: string;
  subheader: string;
  description: string;
}
