import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../../_components/carousel/carousel.component';
import { NgClass, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { slides } from '../../db/slides';
import { ProjectComponent } from '../../_components/project/project.component';
import { projects } from '../../db/projects';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CarouselComponent,
    NgIf,
    ProjectComponent,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute) { }
  slides = slides;
  showSlide: boolean = false;
  selectedSlide: any = null;
  projects = projects;
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id'] && this.projects[params['id']]) {
        this.showSlide = true;
        this.selectedSlide = this.projects[params['id']];
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