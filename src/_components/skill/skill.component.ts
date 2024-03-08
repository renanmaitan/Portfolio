import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
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