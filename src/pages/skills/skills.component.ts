import { Component } from '@angular/core';
import { SkillComponent } from '../../_components/skill/skill.component';

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
  skills = [
    {name: 'Electron', src: 'assets/imgs/skills/electron-icon.png', redirect: true, url: '/home'},
    {name: 'Flask', src: 'assets/imgs/skills/flask-icon.png', redirect: true, url: '/skills'},
    {name: 'Angular', src: 'assets/imgs/skills/angular-icon.png', redirect: true},
    {name: 'React Native', src: 'assets/imgs/skills/react-native-icon.png', redirect: true},
  ];
  languages = [
    {name: 'JavaScript', src: 'assets/imgs/skills/js-icon.png', redirect: false},
    {name: 'Python', src: 'assets/imgs/skills/python-icon.png', redirect: false},
    {name: 'Typescript', src: 'assets/imgs/skills/typescript-icon.png', redirect: false},
    {name: 'C/C++', src: 'assets/imgs/skills/cpp-icon.png', redirect: false},
    {name: 'Java', src: 'assets/imgs/skills/java-icon.png', redirect: false},
  ];
}
