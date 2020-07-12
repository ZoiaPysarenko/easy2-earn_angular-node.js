import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.scss']
})
export class OwlCarouselComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: false
  }


  slidesStore = [
    {
      id:1,
      src:'../../../assets/icons/facebook-96.png',
      alt:'facebook',
      title:'facebook'
    },
    {
      id:2,
      src:'../../../assets/icons/instagram-96.png',
      alt:'instagram',
      title:'instagram'
    },
    {
      id:3,
      src:'../../../assets/icons/vk-96.png',
      alt:'vkontakte',
      title:'vkontakte'
    },
    {
      id:4,
      src:'../../../assets/icons/internet-96.png',
      alt:'website',
      title:'website'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
