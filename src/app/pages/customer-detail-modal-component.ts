import { Component, Input } from '@angular/core';
import { CUSTOMERS } from './customer.data';            //list of customer details
import { Customer } from '../model/customer.model';     //list of customer data category

@Component({
    selector: 'customer-detail-modal',
    templateUrl: 'customer-detail-modal-component.html',
})
export class customerDetailModal {
    customers: Customer[] = CUSTOMERS;

    @Input() customer: Customer
    @Input() state:string;
    @Input() save: Function = () => {};
    constructor() {

    }
 
    ngOnInit(){
        this.customer = new Customer(); //without this line of code, the value will be undifined; this code initialize the var customer to have an object, even it is empty
        //this.state = "";
        
    }

    cancel(){
        $("#customer-modal").modal("hide");
    }

    /*save(x){
        this.customers[x] = this.customer;
        $("#customer-modal").modal("hide");
    }*/
}