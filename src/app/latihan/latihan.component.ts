    import { Component } from '@angular/core';

@Component({
    selector: 'latihan1',
    templateUrl: './latihan1.component.html',
})
export class Latihan1Component  { 
    constructor() {
        
    }
    nama: string;
    job: string;
    listOfJobs = ['programmer','actor','director']; //use = instead of :

    setNama(){
        this.nama = "Emilia";
    }

    addJobs(){
        if(this.job!=undefined){
            this.listOfJobs.push(this.job);
        } else{
            alert("Fill the job first");
        }
    }

    delete(x){
        let index = this.listOfJobs.indexOf(x);
        if(index >= 0){
            this.listOfJobs.splice(x,1);
        }
    }
}

/*
What actually selector does:
selector will say what will be a name of tag in parent template
Your component will be inserted to that tag. 
Using that tag with corresponding selector name you can pass parameters 
(and do actions off course) to component which owns selector. 
And catch too (in component).
*/