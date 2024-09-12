import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavBarProjetoComponent } from './components/nav-bar-projeto/nav-bar-projeto.component';
import { ListProjectsPageComponent } from './pages/list-projects-page/list-projects-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'home',
    component: ListProjectsPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'projeto/infos',
    component: NavBarProjetoComponent,
  },
  {
    path: 'projeto/riscos',
    component: NavBarProjetoComponent,
  },
  {
    path: 'projeto/entregas',
    component: NavBarProjetoComponent,
  },
  {
    path: 'projeto/gantt',
    component: NavBarProjetoComponent,
  },
];
