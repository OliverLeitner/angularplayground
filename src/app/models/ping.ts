import { Message } from './../services/chat.service';
export class Ping {
  constructor(public author?: string, public message?: string) {
    return this;
  }
  copy(obj: Message): Ping {
    this.author = obj.author;
    this.message = obj.message;
    return this;
  }
}
