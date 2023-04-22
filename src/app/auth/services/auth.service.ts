import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserLog, UserLogueado, UserRegister } from '../interfaces/userLog.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.api_url;
  constructor(private http: HttpClient) { }

  logIn(user: UserLog): Observable<UserLogueado>{
    const url = `${this.baseUrl}auth`;
    return this.http.post<UserLogueado>(url, user)
      .pipe(
        tap((res)=>{
          localStorage.setItem('idUser', res._id);
          localStorage.setItem('tipoUser', res.tipo_usuario);
        })
      )
  }

  register(user: UserRegister): Observable<any>{
    const url = `${this.baseUrl}usuario`;
    return this.http.post<any>(url, user);
  }
}
