import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'

import './core/rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProjectsService } from './projects/projects.service';


import { CoreModule } from './core/core.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MaterialModule.forRoot(),
        AppRoutingModule,
        CoreModule,
        CommonModule
    ],
    declarations: [AppComponent, PageNotFoundComponent],
    providers: [ProjectsService],
    bootstrap: [AppComponent]
})
export class AppModule { }