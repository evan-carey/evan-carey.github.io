import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, Route, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home', },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [],
    declarations: [PageNotFoundComponent],
    providers: [],
})
export class AppRoutingModule { }
