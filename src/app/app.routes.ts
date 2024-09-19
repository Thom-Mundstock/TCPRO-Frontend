import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavBarProjetoComponent } from './components/nav-bar-projeto/nav-bar-projeto.component';
import { ListProjectsPageComponent } from './pages/list-projects-page/list-projects-page.component';
import { PopupComponent } from './components/base-popup/base-popup.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'dashboard',
    component: ListProjectsPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'projeto',
    component: NavBarProjetoComponent,
    children: [
      {
        path: 'dashboard',
        component: NavBarProjetoComponent,
      },
      {
        path: 'infos',
        component: NavBarProjetoComponent,
      },
      {
        path: 'riscos',
        component: NavBarProjetoComponent,
      },
      {
        path: 'entregas',
        component: NavBarProjetoComponent,
      },
      {
        path: 'gantt',
        component: NavBarProjetoComponent,
      },
    ]
  },
  {
    path: 'teste',
    component: PopupComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];
