import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hover-card',
  templateUrl: './hover-card.component.html',
  styleUrls: ['./hover-card.component.scss']
})
export class HoverCardComponent implements OnInit {

  @Input() name: string;
  @Input() position: string;
  @Input() description: string;
  @Input() imageUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
