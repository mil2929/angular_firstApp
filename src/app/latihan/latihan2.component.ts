//To automatically display default .ts format components, type AngCom and enter;
//.ts file shouldn't be empty to not return error in the other related files.
import { Component } from '@angular/core';
import { HttpService } from '../service/httpservice';

@Component({
    selector: 'latihan2',
    templateUrl: './latihan2.component.html',
})
export class Latihan2Component  {   //remember to check the class name; it sometimes somehow returns error
    constructor(private service:HttpService) {
        
    }
    getData(){
        this.service.get("/customers")
        .subscribe(
            result=>{
                console.log("request success");
                console.log(result);
            },
            err=>{
                console.log(err);
            },
            ()=>{
                console.log("completed");
            }
        )
    }
}