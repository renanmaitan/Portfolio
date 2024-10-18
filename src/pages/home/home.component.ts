import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentStatus: string;

  constructor() {
    this.currentStatus = this.calculateSemester();
  }

  calculateSemester(): string {
    const startYear = 2021;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentHalf = currentMonth > 6 ? 2 : 1;
    const currentSemester = (currentYear - startYear) * 2 + currentHalf;
    if (currentSemester>10){
      return "sou formado em Engenharia da Computação pela FACENS"
    }
    return `sou estudante do ${(currentYear - startYear) * 2 + currentHalf}º semestre de Engenharia da Computação na FACENS`;
  }
}
