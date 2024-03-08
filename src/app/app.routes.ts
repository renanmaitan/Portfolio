import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { SkillsComponent } from '../pages/skills/skills.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'skills', component: SkillsComponent}
];
