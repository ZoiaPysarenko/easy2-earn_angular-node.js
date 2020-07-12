import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'easy2learn-portfolio';
  currentSection: string;

  constructor(){
    this.currentSection = 'header';
  }


  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

}
