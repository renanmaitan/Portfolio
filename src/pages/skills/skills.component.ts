import { Component } from '@angular/core';
import { SkillComponent } from '../../_components/skill/skill.component';
import { skills, languages } from '../../db/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    SkillComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = skills;
  languages = languages;
}
