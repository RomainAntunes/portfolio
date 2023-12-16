import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {GithubUser} from "../models/githubUser";
import {ProjectGithub} from "../models/project";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private readonly http: HttpClient
  ) {
  }

  getCompagny(): Observable<string> {
    return this.http.get<GithubUser>('https://api.github.com/users/RomainAntunes')
      .pipe(
        map((res) => res.company)
      );
  }

  getBio(): Observable<string> {
    return this.http.get<GithubUser>('https://api.github.com/users/RomainAntunes')
      .pipe(
        map((res) => res.bio)
      );
  }

  getLocation(): Observable<string> {
    return this.http.get<GithubUser>('https://api.github.com/users/RomainAntunes')
      .pipe(
        map((res) => res.location)
      );
  }

  getReadMe(githubConfig: ProjectGithub | string): Observable<string> {

    const urlReadme = this.generateGitHubUrl(githubConfig, true);

    return this.http.get<string>(
      urlReadme,
      {responseType: 'text' as 'json'})
      .pipe(
        map((res) => this.imageUrl(res, githubConfig))
      );
  }

  private imageUrl(res: string, githubConfig: ProjectGithub | string): string {
    const url = this.generateGitHubUrl(githubConfig);
    const regex = new RegExp('src="(.*)"');
    const match = regex.exec(res);
    console.log(res, match)

    if (match) {
      return res.replace(match[1], url + '/' + match[1]);
    }

    return res;
  }

  generateGitHubUrl(github: string | ProjectGithub, readme?: boolean) {
    if (typeof github === 'string') {
      return github;
    }

    const org = github.org ?? 'RomainAntunes';
    const branch = github.branch ?? 'master';

    return `https://raw.githubusercontent.com/${org}/${github.name}${readme ? `/${branch}/README.md` : ''}`;
  }
}
