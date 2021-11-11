import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TelaIncialComponent } from './tela-inicial-sis/tela-inicial-sis.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { VendasDetailsComponent } from './vendas-details/vendas-details.component';
import { FichaclientesDetailsComponent } from './fichaclientes-details/fichaclientes-details.component';
import { FichaclientesDetailFormComponent } from './fichaclientes-details/fichaclientes-detail-form/fichaclientes-detail-form.component';
import { EstoqueDePecasDetailsComponent } from './estoque-de-pecas-details/estoque-de-pecas-details.component';
import { EstoqueDePecasDetailFormComponent } from './estoque-de-pecas-details/estoque-de-pecas-detail-form/estoque-de-pecas-detail-form.component';
import { VendasDetailFormComponent } from './vendas-details/vendas-detail-form/vendas-detail-form.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TelaIncialComponent,
    NavComponent,
    HomeComponent,
    AdminComponent,
    VendasDetailsComponent,
    FichaclientesDetailsComponent,
    FichaclientesDetailFormComponent,
    EstoqueDePecasDetailsComponent,
    EstoqueDePecasDetailFormComponent,
    VendasDetailFormComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
