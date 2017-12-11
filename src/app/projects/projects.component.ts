import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProjectsService } from './projects.service';
import { GitHubProject } from './project.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Component({
    selector: 'ec-projects',
    templateUrl: 'projects.component.html'
})
export class ProjectsComponent implements OnInit {
    projects: Observable<GitHubProject[]>;

    constructor(private projectsService: ProjectsService) { }

    ngOnInit() {
        this.getProjects();
    }

    getProjects() {
        this.projects = this.projectsService.getProjects()
            .catch(error => Observable.of([]));
    }
}