import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.scss']
})
export class DotsComponent {

  moveX = 0;
  moveY = 0;

  @Input() scale: number = 3;

  @Input() columns: number = 5;
  @Input() rows: number = 5;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    let width = window.innerWidth;
    let height = window.innerHeight;

    this.moveX = (e.clientX / width) * this.scale;
    this.moveY = (e.clientY / height) * this.scale;
  }
}
