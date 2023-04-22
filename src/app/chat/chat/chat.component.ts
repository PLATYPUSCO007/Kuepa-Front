import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { ChatService } from '../services/chat.service';
import { ReceivMessage, SendMessage } from '../interfaces/sendMessage.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  receiveMessageHistory!: ReceivMessage[];
  idUser: string = '6443d6a97100918ae2f33807';

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getAllMessages()
      .subscribe((res)=>{
        this.receiveMessageHistory = res;
    })
  }

  message: SendMessage = {
    message: '',
    username: this.idUser
  }
  @ViewChild('miForm') miForm!: NgForm;

  enviar(){
    this.message.message = this.miForm.controls['message'].value;
    this.chatService.sendMesages(this.message)
      .pipe(
        switchMap(()=>this.chatService.getAllMessages())
      ).subscribe((res)=>{
        this.receiveMessageHistory = res;
        this.miForm.resetForm({
          message: ''
        })
    })
  }

}
