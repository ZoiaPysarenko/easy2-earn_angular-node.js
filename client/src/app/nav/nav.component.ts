import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  //currentSection = 'header';
  @Input() currentSecID: string;

  constructor() { }
  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }
  // public setCurrentSection(sectionId: string){
  //   this.currentSection = sectionId;
  // }
}
