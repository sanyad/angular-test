import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MessageService} from "../../services/app-message.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate(150)
      ]),
      transition('* => void', [
        animate(150, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class MessageComponent {

  subscription: Subscription;
  message = '';
  type = '';
  translationCategory = '';
  needTranslate = false;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService
      .getMessage()
      .subscribe(messageObj => {
        this.message = messageObj.message;
        this.type = messageObj.type;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  close() {
    this.messageService.clearMessage();
  }

}
