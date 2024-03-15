import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { SkillsComponent } from '../pages/skills/skills.component';
import { ProjectsComponent } from '../pages/projects/projects.component';
import { ContactComponent } from '../pages/contact/contact.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'projects/:id', component: ProjectsComponent},
    {path: '**', redirectTo: 'home'}
];
