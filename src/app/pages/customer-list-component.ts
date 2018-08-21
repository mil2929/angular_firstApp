import { Component, Input } from '@angular/core';
import { Customer } from '../model/customer.model'; //category
import { CUSTOMERS } from './customer.data'; //all customers //ini gak dipake kalo ambil data dr server
import { Router } from '@angular/router';
import { HttpService } from '../service/httpservice';

@Component({
    selector: 'Customer-list',
    templateUrl: './customer-list-component.html',
    styleUrls: [
        './customer-list-component.scss'
    ]
})
export class customerListComponent  { 
    //data = CUSTOMERS;
    data = [];
    customer:Customer;
    saveCallback = Function;
    index: number = -1;
    state: string;
    columns = [
        {field: "CustomerID", text: "Customer ID"},
        {field: "CompanyName", text: "Company Name"},
        {field: "ContactName", text: "Contact Name"}
    ];
    constructor(private router: Router, private service: HttpService) {
        
    }

    ngOnInit(){
        this.saveCallback = this.save.bind(this); //if there's no this line of code, save() doesn't execute
    }

    ngAfterViewInit(){
        this.displayData();
    }

    view(x){

        this.customer = this.clone(x);
        console.log( this.customer);
        this.state="view";
        console.log(this.state);
        //this.customer = x;
        //using modal
        $("#customer-modal").modal();
        //this.router.navigate(["customers", x["customerID"], "view"]);
    }


    private clone(x){
        let str = JSON.stringify(x);
        return JSON.parse(str);
    }

    edit(x){
        this.index = this.data.indexOf(x);
        this.customer = this.clone(x);  //using clone due to angular characteristic that will updated the changes in real time. By using clone, it will be stored in another object first
        this.state="edit";
        console.log(this.state);
        //this.router.navigate(["customers", x["customerID"], "edit"]);
        $("#customer-modal").modal();
    }

    add(){
        //this.router.navigate(["customers", "", "new"]);
        console.log("add()");
        this.index = -1;
        this.state = "new";
        this.customer = new Customer();
        $("#customer-modal").modal();

    }


    delete(x:Customer){
        // this.router.navigate(["customers", x["customerID"], "delete"]);
 
       /* public delete(url){
         let res = this.http.delete(this.base + url, this.getOption());
         return res;*/
         this.service.delete("/customers/"+ x.CustomerID)
         .subscribe(
             res=>{
                 if(res['meta'].success){
                    alert("deleted!");
                    this.displayData();
                 } else {
                    alert("cannot be deleted!!");
                    console.log(res);
                    
                 }
             },
             err => {
                 alert("cannot be deleted!");
                 console.log(err);
             }
         )
     }

    save(){
        console.log(this.index);
        if(this.index==-1){
            //this.data.push(this.customer); before catching data from server
            this.service.post("/customers", this.customer)
            .subscribe(
                res => {
                    if(res["meta"].success){
                        alert("Data inserted!");
                        console.log(res["meta"]);
                        this.displayData();
                    }
                },
                err => {
                    alert("Insert data failed!");
                }
            );
        }else{
            //this.data[this.index] = this.customer;
            //put to overwrite data
            this.service.put("/customers", this.customer)
            .subscribe(
                res => {
                    if(res["meta"].success){
                        alert("Data updated!");
                        this.displayData();
                    }
                },
                err => {
                    alert("Update data failed!");
                }
            );
        }
        $("#customer-modal").modal("hide");
    }

    option = {
        page : 1,
        pageSize : 10,
        criteria : [],
        order : {column: "CustomerID", direction: "ASC"}
    }

    criteria = '';
    searchVal = '';

    remove(x){
        console.log(this.criteria);
        console.log(this.searchVal);
        let i = this.option.criteria.indexOf(x);
        this.option.criteria.splice(i, 1);
        this.displayData();
    }

    search(){
        if(this.criteria!='' && this.searchVal!=''){
            console.log(this.criteria);
            console.log(this.searchVal);
            this.option.criteria.push({criteria : this.criteria, value: this.searchVal});
            this.displayData();
        }
    }
    

    sort(col){
        let order = {
            column : col,
            direction : this.direction ? "ASC" : "DSC"
        };
        this.option.order = order;
        this.direction = !this.direction;
        this.displayData();
    }

    direction = false;

    /*displayData2(){
        this.service.post("/customers/paging", this.option)
        .subscribe(
            res => {
                this.data = res['data'].rows;
            },
            err => {},
            () => {}
        )
    }*/

    rowCount = 0;
    pageCount = 0;

    next(){
        this.option.page++
        this.displayData();
    }

    prev(){
        this.option.page--;
        this.displayData();
    }

    displayData(){
            this.service.post("/customers/paging", this.option)
            .subscribe(
                res => {
                    this.data = res['data'].rows;
                    this.rowCount = res['data'].rowCount;
                    this.pageCount = res['data'].pageCount;
                },
                err => {},
                () => {}
            );
        
    }

}