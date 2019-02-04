import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incoming',
  templateUrl: './incoming.component.html',
  styleUrls: ['./incoming.component.scss']
})
export class IncomingComponent implements OnInit {
  constructor() {}

  @Input() message;
  @Input() from;

  ngOnInit() {}

}
