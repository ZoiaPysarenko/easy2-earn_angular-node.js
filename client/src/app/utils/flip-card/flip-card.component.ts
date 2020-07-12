import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  @Input() workTitle: string;
  @Input() workDescription: string;
  @Input() workImage: string;

  constructor() { }

  ngOnInit(): void {
  }


}
