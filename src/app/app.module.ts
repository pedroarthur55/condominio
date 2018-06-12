import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

//Imports PRIMENG
import { AccordionModule } from 'primeng/accordion';     
import { MenuItem } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { PanelMenuModule } from 'primeng/panelmenu';                
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { AppRoutesModulo } from './app.routes.modulo';
import { FormularioAtaComponent } from './ata/formulario-ata/formulario-ata.component';

@NgModule({
  declarations: [
    AppComponent,    
    FormularioAtaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModulo,
    FormsModule,
    //Imports PRIMENG
    AccordionModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    CardModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
