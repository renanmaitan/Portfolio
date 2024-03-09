import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [
    RouterModule,
    NgIf
  ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent{
  @Input() skill!: Skill;
}

interface Skill {
  name: string;
  src: string;
  redirect: boolean;
  url?: string;
}