import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: AppComponent},
    {path: 'todo', component: TodolistComponent},
    {path: 'about', component: AboutComponent}
];
