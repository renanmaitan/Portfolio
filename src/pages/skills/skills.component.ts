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
    {name: 'Electron', src: 'assets/electron-icon.png', redirect: true, url: '/home'},
    {name: 'Flask', src: 'assets/flask-icon.png', redirect: true, url: '/skills'},
    {name: 'Angular', src: 'assets/angular-icon.png', redirect: true},
    {name: 'React Native', src: 'assets/react-native-icon.png', redirect: true},
  ];
  languages = [
    {name: 'JavaScript', src: 'assets/js-icon.png', redirect: false},
    {name: 'Python', src: 'assets/python-icon.png', redirect: false},
    {name: 'Typescript', src: 'assets/typescript-icon.png', redirect: false},
    {name: 'C/C++', src: 'assets/cpp-icon.png', redirect: false},
    {name: 'Java', src: 'assets/java-icon.png', redirect: false},
  ];
}
