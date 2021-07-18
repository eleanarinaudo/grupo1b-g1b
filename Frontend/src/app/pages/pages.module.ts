import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet/wallet.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { PesoComponent } from './wallet/operation/peso/peso.component';
import { DashboardComponent } from './wallet/dashboard/dashboard.component';



@NgModule({
  declarations: [
    WalletComponent,
    NotfoundComponent,
    HomeComponent,
    TermsComponent,
    SigninComponent,
    LoginComponent,
    PesoComponent,
    DashboardComponent
  
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [WalletComponent, NotfoundComponent, HomeComponent, TermsComponent, SigninComponent, LoginComponent, PesoComponent, DashboardComponent]
})


export class PagesModule { }
