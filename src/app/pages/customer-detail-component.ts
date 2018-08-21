import { Component } from '@angular/core';
import { CUSTOMERS } from './customer.data';            //list of customer details
import { Customer } from '../model/customer.model';     //list of customer data category
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'customer-details',
    templateUrl: 'customer-detail-component.html',
})
export class CustomerDetails  { 

    customers: Customer[] = CUSTOMERS;
    customer: Customer;
    index: number = -1
    state: string;

    constructor(private route:ActivatedRoute) {
        
    }

    ngOnInit(){
        //the flow is : you have to create varible first in the app.routes.ts -> path: 'customers/:id/:state'
        //and then the value is catch from the customer-list-component.ts -> this.router.navigate(["customers", x["customerID"], "view"]);
        //then in this file, create a variable that catch the value from the previous page as cusId and state.
        let cusId = this.route.snapshot.params["id"];
        this.state = this.route.snapshot.params["state"];
        console.log("the state is : " + this.state);
        if(this.state=="new"){
            this.customer = new Customer();
        } else {
            let cus = this.customers.find(item => {
                return item.CustomerID == cusId;
            })
            this.index = this.customers.indexOf(cus);
            let strObj = JSON.stringify(cus);
            this.customer = JSON.parse(strObj);
        }
    }

    save(){
        if(this.index==-1){
            this.customers.push(this.customer);
        }else{
            this.customers[this.index] = this.customer;
        }
        window.history.go(-1);
    }

    cancel(){
        window.history.go(-1);
    }
}