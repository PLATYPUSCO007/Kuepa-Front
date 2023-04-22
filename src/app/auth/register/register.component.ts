import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserRegister } from '../interfaces/userLog.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  userRegister: UserRegister = {
    nombre: '',
    password: '',
    tipo_usuario: 'Estudiante',
    usuario: ''
  };

  @ViewChild('miForm') miForm!: NgForm;

  enviar(){
    this.userRegister = this.miForm.value;
    console.log(this.userRegister);
    
    this.authService.register(this.userRegister)
      .subscribe((res)=>{
        this.router.navigate(['/log']);
      })
    
  }
}
