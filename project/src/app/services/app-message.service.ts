import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface MessageNotice {
  message: string;
  type: string;
  timeOut?: number;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new BehaviorSubject<any>('');

  sendMessage(message: MessageNotice) {
    this.subject.next(message);
    this.timeRemove(message.timeOut);
  }
  timeRemove(timeOut?: number) {
    setTimeout(() => {
      this.subject.next({message: '', type: ''});
    }, timeOut ? timeOut : 3000);
  }
  clearMessage() {
    this.subject.next({message: '', type: ''});
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}

