import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SocketService } from './socket.service';
import { environment } from 'src/environments/environment';
import { ReceivMessage, SendMessage } from '../interfaces/sendMessage.interface';
import { Observable, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  base_url: string = environment.api_url;
  private _messageHistory!: ReceivMessage[];

  constructor(private socket: SocketService, private http: HttpClient) { 
    this.reciveMessage();
  }
  
  get messageHistory(): ReceivMessage[] {
    return {...this._messageHistory};
  }
  

  sendMesages(message: SendMessage): Observable<any>{
    const url = `${this.base_url}mensaje`;
    return this.http.post<any>(url, message)
      .pipe(
        tap((res)=>{
          this.socket.io.emit('senMessage', message);
        })
      )
  }

  reciveMessage(){
    this.socket.io.on('reciveMessage', (message: ReceivMessage)=>{
      this.messageHistory.push(message);
    });
  }

  getAllMessages(): Observable<ReceivMessage[]>{
    const url = `${this.base_url}mensaje`;
    return this.http.get<ReceivMessage[]>(`${url}`)
      .pipe(
        tap(result => this._messageHistory = result)
      );
  }
}
