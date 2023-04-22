import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserLog } from '../interfaces/userLog.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  userLog: UserLog = {
    usuario: '',
    password: ''
  };

  @ViewChild('miForm') miForm!: NgForm;
  enviar(){
    this.userLog = this.miForm.value;
    
    this.authService.logIn(this.userLog)
      .subscribe((res)=>{
        this.router.navigate(['/home']);
    })
    
  }

}
