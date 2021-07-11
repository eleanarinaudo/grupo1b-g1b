import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { TermsComponent } from './pages/terms/terms.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'wallet', component: WalletComponent},
    {path: 'terms', component: TermsComponent},
    {path:'**', component: NotfoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }