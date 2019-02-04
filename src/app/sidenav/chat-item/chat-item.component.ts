import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {

  @Input() name: string;
  @Input() img: string;
  @Input() message: string;
  @Input() is_online: boolean;
  @Input() selected: boolean;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
