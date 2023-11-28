import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio - Romain Antunes';

  ngOnInit(): void {
    console.log("Pssst... Looking for the source code? It's here: https://github.com/RomainAntunes/portfolio");
  }
}
