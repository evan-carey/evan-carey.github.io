import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GitHubProject } from './project.model';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectsService {
    private githubUrl = "https://api.github.com/users/evan-carey/repos"

    constructor(private http: Http) { }

    getProjects(): Observable<GitHubProject[]> {
        return <Observable<GitHubProject[]>>this.http
            .get(this.githubUrl)
            .map(res => this.extractData<GitHubProject[]>(res))
        // .catch(console.log("Error"));
    }

    private extractData<T>(res: Response): T {
        if (res.status < 200 || res.status >= 300) {
            throw new Error(`Bad response status: ${res.status}`);
        }
        let body = res.json ? res.json() : null;
        return <T>(body || {});
    }
}