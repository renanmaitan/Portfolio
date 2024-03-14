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
  @Input() slides!: any;
  @Output() openProjectEvent = new EventEmitter<string>();
  keys: string[] = [];

  ngOnInit() {
    this.keys = Object.keys(this.slides);
  }
  
  openProject(key: string) {
    if (this.slides[key].url) {
      window.open(this.slides[key].url, '_blank');
      return;
    }
    this.openProjectEvent.emit(key);
  }
}