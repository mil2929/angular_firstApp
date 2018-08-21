import { Component } from '@angular/core';
import { HttpService } from '../service/httpservice';
import { Router } from '@angular/router';

@Component({
templateUrl: './login.component.html',
})
export class LoginComponent  { 
    //create object
    credential = {
        username:"",
        password:""
    }

    message="";

    constructor(private service: HttpService, private router:Router) {}
    
    login(){
        this.message="";
        this.service.post("/login/login", this.credential)
        .subscribe(
            res=>{
                if(res["login"]==true){
                    localStorage.setItem("auth-token", res["token"]);
                    this.router.navigateByUrl("pages");
                } else {
                    this.message = res["message"];
                }
            },
            err=>{
                console.log("login failed");
                console.log(err);
            },
            ()=>{}
        );
    }
}