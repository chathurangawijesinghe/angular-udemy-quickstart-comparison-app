import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-username',
  template: `
  <p (click)="onUsernameClicked()">{{username}}</p>
  `
})
export class UsernameComponent implements OnInit {
  @Input() username: string;

  @Output() userClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onUsernameClicked() {
    this.userClicked.emit(this.username);
  }

}
