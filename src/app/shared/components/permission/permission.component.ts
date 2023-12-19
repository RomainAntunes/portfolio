import {Component, OnInit} from '@angular/core';
import {PermissionsService} from "../../services/permissions.service";
import {filter, map, Observable, take, tap} from "rxjs";
import {Permission} from "../../models/permission";

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {

  isMobile: boolean = this.permissionsService.isMobile;
  filterListPermission$ = new Observable<Permission[]>();

  constructor(
    private readonly permissionsService: PermissionsService
  ) { }

  ngOnInit(): void {
    this.filterListPermission$ = this.permissionsService.listPermissionMobile
      .pipe(
        map(permissions => permissions.filter(permission => !permission.isAlreadySaved))
      )
  }

  grantPermission(permission: Permission) {
    this.permissionsService.grantPermission(permission.id);
    permission.callback();
  }

  refusePermission(id: string) {
    this.permissionsService.refusePermission(id);
  }
}
