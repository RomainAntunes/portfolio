import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {GithubUser} from "../models/githubUser";
import {ProjectGithub} from "../models/project";
import {Tags} from "../models/tags";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private readonly http: HttpClient
  ) {
  }

  getCompany(): Observable<string> {
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

  getVersions(githubConfig: ProjectGithub | string): Observable<Tags[]> {
    if (typeof githubConfig === 'string') {
      return of([]);
    }

    const url = `https://api.github.com/repos/${githubConfig.org}/${githubConfig.name}/tags`;
    return this.http.get<Tags[]>(url);
  }

  getLatestVersion(githubConfig: ProjectGithub | string): Observable<Tags> {
    return this.getVersions(githubConfig)
      .pipe(
        map((res) => res[0])
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
    const url = this.generateGitHubUrl(githubConfig, true);
    const urlAssets = url.replace('README.md', '');

    const regex = new RegExp('!\\[[^\\]]*]\\((?<filename>.*?)(?=[")])(?<optionalpart>".*")?\\)');
    const match = regex.exec(res);

    let groups = match?.groups;
    for (const key in groups) {
      if (groups[key]?.startsWith('http')) {
        continue;
      }

      res = res.replace(groups[key], `${urlAssets}/${groups[key]}`);
    }

    return res;
  }

  generateGitHubUrl(github: string | ProjectGithub, readme?: boolean) {
    if (typeof github === 'string') {
      return github;
    }

    const org = github.org ?? 'RomainAntunes';
    const branch = github.branch ?? 'master';

    return `https://${readme ? 'raw.githubusercontent' : 'github'}.com/${org}/${github.name}${readme ? `/${branch}/README.md` : ''}`;
  }
}
