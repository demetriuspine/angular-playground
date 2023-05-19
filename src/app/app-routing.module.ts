import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { ManipulandoJsonComponent } from './pages/manipulando-json/manipulando-json.component';
import { UsersComponent } from './pages/users/users.component';
import { SubRouteComponent } from './pages/sub-route/sub-route.component';
import { Page1Component } from './pages/sub-route/page1/page1.component';
import { Page2Component } from './pages/sub-route/page2/page2.component';
import { PrivateComponent } from './pages/private/private.component';
import { AuthorizedGuard } from './guard/authorized.guard';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListarComponent },
  { path: 'register', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'students', component: ManipulandoJsonComponent },
  { path: 'users', component: UsersComponent },
  {
    path: 'subroute', component: SubRouteComponent,
    children: [
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component }
    ]
  },
  {
    path: 'private', component: PrivateComponent,
    canActivate: [AuthorizedGuard]
  },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
