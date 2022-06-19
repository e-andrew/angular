import {Component, Input} from "@angular/core"
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // @ts-ignore
  @Input() parent: AppComponent;

  setCardIndex(cardIndex: number){
    this.parent.setCardIndex(cardIndex);
  }
}
