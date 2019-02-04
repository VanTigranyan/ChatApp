import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-outcoming',
  templateUrl: './outcoming.component.html',
  styleUrls: ['./outcoming.component.scss']
})
export class OutcomingComponent implements OnInit {
  constructor() {}

  @Input() message;

  ngOnInit() {}

}
