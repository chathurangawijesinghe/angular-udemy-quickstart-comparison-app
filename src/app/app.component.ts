import { Component } from '@angular/core';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Max';
  elements: number[] = [];

  onChangeName() {
    this.name = 'Anna';
  }

  onAddElement() {
    this.elements.push(this.elements.length + 1);
  }

  getColor(element: number) {
    return element % 2 === 0 ? 'green' : 'red';
  }

  onUserWasClicked(username: string){
    alert(username);
  }
}
