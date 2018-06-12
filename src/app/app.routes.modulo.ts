
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { FormularioAtaComponent } from "./ata/formulario-ata/formulario-ata.component";


const appRoutes: Routes = [  
    { path: 'formulario-ata', component: FormularioAtaComponent },    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutesModulo {

}