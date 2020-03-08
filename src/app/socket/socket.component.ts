import { SocketData } from './../models/socketdata';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { demo } from '../models/demo';
import { WebsocketService } from '../services/ping.service';
import { Message, ChatService } from '../services/chat.service';
import { Ping } from '../models/ping';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  providers: [WebsocketService, ChatService]
})
export class SocketComponent implements OnInit {
  testObject: demo;
  ping: Ping;
  socketData: SocketData;

  private message: Message = {
    author: 'Oliver Leitner',
    message: 'this is a test message'
  };

  constructor(private appComponent: AppComponent, private chatService: ChatService) {
    this.testObject = appComponent.testObject;
    this.testObject.title = 'websocket tester';
    chatService.messages.subscribe(msg => {
      console.log('Response from websocket');
      this.ping = new Ping().copy(msg);
      console.log(this.ping);
    });
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.socketData = f.value; // mapping the data
    console.log('new message from client to websocket: ', this.socketData);
    this.chatService.messages.next(this.socketData);
    this.socketData.message = '';
  }
}
