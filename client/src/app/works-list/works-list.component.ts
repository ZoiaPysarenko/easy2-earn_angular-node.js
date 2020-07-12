import { Component, OnInit } from '@angular/core';
// import { WORKS } from './../works';

import { Work } from './../work';
import { WorksService } from './../data/works.service';



@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.scss']
})
export class WorksListComponent implements OnInit {

  // works = WORKS;
  works: Work[] = [];

  constructor(private worksService: WorksService) { }

  ngOnInit(): void {
    // this.works = this.worksService.getWorks();
    this.worksService.loadWorksList().subscribe(works => {
      this.works = works;
    });
  }

}
