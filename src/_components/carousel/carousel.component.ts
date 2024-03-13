import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CarouselComponent {
  @Input() slides: Slides = {};
  @Output() openProjectEvent = new EventEmitter<Slide>();
  keys: string[] = [];

  ngOnInit() {
    this.keys = Object.keys(this.slides);
  }
  
  openProject(slide:Slide) {
    this.openProjectEvent.emit(slide);
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