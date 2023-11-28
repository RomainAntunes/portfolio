import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  slug: string = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (!params.hasOwnProperty('slug')){
        this.router.navigate(['/']);
      }

      this.slug = params['slug'];
    });
  }
}
