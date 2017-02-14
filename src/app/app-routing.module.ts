import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, Route, RouterModule } from '@angular/router';

import { HomeModule, HomeComponent } from './home';
import { ProjectsModule, ProjectsComponent } from './projects';
import { PageNotFoundComponent } from './page-not-found.component';


// const routes: Routes = [
//     { path: '', pathMatch: 'full', redirectTo: 'home' },
//     { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
//     { path: 'projects', loadChildren: 'app/projects/projects.module#ProjectsModule' },
//     { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
// ];

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    {
        path: 'graphics',
        loadChildren: 'app/+graphics#GraphicsModule'
    },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        HomeModule,
        ProjectsModule,
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
