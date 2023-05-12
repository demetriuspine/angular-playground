import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { ManipulandoJsonComponent } from './pages/manipulando-json/manipulando-json.component';
import { UsersComponent } from './pages/users/users.component';
import { SubRouteComponent } from './pages/sub-route/sub-route.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListarComponent },
  { path: 'register', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'students', component: ManipulandoJsonComponent },
  { path: 'users', component: UsersComponent },
  { path: 'subroute', component: SubRouteComponent,
    children:[
      { path: 'page1', component: ManipulandoJsonComponent },
      { path: 'page2', component: ManipulandoJsonComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
