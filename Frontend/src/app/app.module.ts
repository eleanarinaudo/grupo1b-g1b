import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from "@angular/google-maps";
import { MatCardModule } from '@angular/material/card';
import { MenuModule } from './pages/wallet/menu.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DataDialogComponent } from './pages/wallet/perfil/perfil.component';
import { ClienteService } from './servicios/cliente.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DataDialogComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    MenuModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    GoogleMapsModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [ClienteService],
  entryComponents: [DataDialogComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }