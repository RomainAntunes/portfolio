import {Injectable} from '@angular/core';
import {Permission} from "../models/Permission";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  isMobile: boolean = false;
  listPermission: Permission[] = [
    {
      id: 'deviceOrientation',
      text: 'Active paralax effect',
      isGranted: false,
      isMobile: true,
      callback: this.askMotionPermission
    },
  ]

  permissionBehaviourSubject$ = new BehaviorSubject<Permission[]>(this.listPermission);

  constructor() {
  }

  get listPermissionMobile(): Observable<Permission[]> {
    return this.permissionBehaviourSubject$.asObservable();
  }

  loadPermission() {
    const localStoragePermission = localStorage.getItem('permissions');
    if (localStoragePermission) {
      for (const permission of this.listPermission) {
        const permissionFromLocalStorage = JSON.parse(localStoragePermission).find((p: Permission) => p.id === permission.id);
        if (permissionFromLocalStorage) {
          permission.isAlreadySaved = true;
          permission.isGranted = permissionFromLocalStorage.isGranted;
        }
      }
    }

    this.checkDevice();
  }

  checkDevice() {
    this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }

  askMotionPermission() {
    // @ts-ignore
    DeviceOrientationEvent.requestPermission()
      // @ts-ignore
      .then(response => {
        if (response == "granted") {
          this.grantPermission('deviceOrientation');
        }

        if (response == "denied") {
          this.refusePermission('deviceOrientation');
        }
      });
  }

  isGranted(permissionId: string) {
    const permission = this.listPermission.find(p => p.id === permissionId);
    if (permission) {
      return permission.isGranted;
    }

    return false;
  }

  grantPermission(permissionId: string) {
    const permission = this.listPermission.find(p => p.id === permissionId);
    if (permission) {
      permission.isGranted = true;
      permission.isAlreadySaved = true;
    }

    this.permissionBehaviourSubject$.next(this.listPermission);
    this.saveToLocalStorage();
  }

  refusePermission(id: string) {
    const permission = this.listPermission.find(p => p.id === id);
    if (permission) {
      permission.isGranted = false;
      permission.isAlreadySaved = true;
    }

    this.permissionBehaviourSubject$.next(this.listPermission);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('permissions', JSON.stringify(this.listPermission));
  }

  resetPermission() {
    localStorage.setItem('permissions', '');

    this.listPermission.map((p) => {
      p.isAlreadySaved = false;
      p.isGranted = false;
    })
    this.permissionBehaviourSubject$.next(this.listPermission);
  }
}
