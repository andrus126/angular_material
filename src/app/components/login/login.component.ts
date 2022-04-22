import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  loading = false;

  constructor( private fb: FormBuilder, private router: Router) { 
    this.form = this.fb.group({ 
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if( usuario == "admin" && password == "123456789"){
     this.cargando();
  
    }else{
      this.form.reset();
    }
  }
 
  cargando(){
    this.loading = true;
    setTimeout(() => {

      this.router.navigate(['dashboard']);
    },1500); 
  }
}
