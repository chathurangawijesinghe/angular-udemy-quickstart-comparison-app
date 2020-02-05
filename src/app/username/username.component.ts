import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-username',
  template: `
  <p>{{username}}</p>
  `
})
export class UsernameComponent implements OnInit {
  @Input() username: string;

  constructor() { }

  ngOnInit() {
  }

}
