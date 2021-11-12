import { VendasDetailsComponent } from './vendas-details/vendas-details.component';
import { VendasDetailFormComponent } from './vendas-details/vendas-detail-form/vendas-detail-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TelaIncialComponent } from './tela-inicial-sis/tela-inicial-sis.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { EstoqueDePecasDetailsComponent } from './estoque-de-pecas-details/estoque-de-pecas-details.component';
import { FichaclientesDetailsComponent } from './fichaclientes-details/fichaclientes-details.component';
import { ToastrModule } from 'ngx-toastr';


const routes: Routes =
[
  {path: '', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminComponent, canActivate: [AuthGuard]},
  {path:'tela-inicial-sis', component: TelaIncialComponent, canActivate: [AuthGuard]},
  {path:'vendas-details', component: VendasDetailsComponent, canActivate: [AuthGuard]},
  {path:'estoque-pecas-details', component: EstoqueDePecasDetailsComponent, canActivate: [AuthGuard]},
  {path:'fichaclientes--details', component: FichaclientesDetailsComponent, canActivate: [AuthGuard]}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    /* ToastrModule.forRoot() */
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
