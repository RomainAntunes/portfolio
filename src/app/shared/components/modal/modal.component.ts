import {Component, OnInit} from '@angular/core';
import {Modal} from "../../models/modal";
import {MessageService} from "../../services/message.service";
import {map, Observable, tap} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modals$: Observable<Modal> = new Observable<Modal>();

  constructor(
    private readonly messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.modals$ = this.messageService.modals$
      .pipe(
        map(modals => modals[0]),
      )
    ;
  }


  saveModal(callback: () => void, modalId: string) {
    callback();
    this.messageService.remove(modalId);
  }

  closeModal(modalId: string) {
    this.messageService.remove(modalId);
  }

  openSpecialCallback(callback: (() => void), link: string, id: string) {
    callback();
    this.messageService.remove(id);
  }
}
