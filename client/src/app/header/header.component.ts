import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HeaderComponent implements OnInit {

  images: Array<string>;


  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

    this.images = [
      './assets/images/image_1.jpg',
      './assets/images/image_2.jpg',
      './assets/images/image_3.jpg',
      './assets/images/image_4.jpg'
    ]
  }

  ngOnInit(): void {
  }

}
