import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlashMessageService {
  private message: string = '';

  setMessage(msg: string): void {
    this.message = msg;
  }

  getMessage(): string {
    const temp = this.message;
    this.message = ''; // clear message after reading
    return temp;
  }
}
