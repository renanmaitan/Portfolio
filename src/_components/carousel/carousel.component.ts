import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CarouselComponent {
  @Input() slides: Slide[] = [];
  
  openProject(slide:Slide) {
    console.log(slide);
  }
}

interface Slide {
  src: string;
  title: string;
  subheader: string;
  description: string;
}