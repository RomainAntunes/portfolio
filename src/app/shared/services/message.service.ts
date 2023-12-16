import { Injectable } from '@angular/core';
import {Modal} from "../models/modal";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  modals: Modal[] = [];

  modalsBehaviourSubject$ = new BehaviorSubject<Modal[]>(this.modals);

  constructor() {
  }

  get modals$() {
    return this.modalsBehaviourSubject$.asObservable();
  }

  add(modal: Modal) {
    this.modals.push(modal);
    this.modalsBehaviourSubject$.next(this.modals);
  }

  remove(id: string) {
    this.modals = this.modals.filter(x => x.id !== id);
    this.modalsBehaviourSubject$.next(this.modals);
  }
}
