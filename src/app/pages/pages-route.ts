import { Route } from "@angular/router";
//import { homepage } from "./latihan/home.component";
import { customerListComponent } from "./customer-list-component";
import { CustomerDetails } from "./customer-detail-component";
import { Latihan1Component } from "../latihan/latihan.component";
import { Latihan2Component } from "../latihan/latihan2.component";
import { BaseComponent } from "./base-component";
import { AuthGuard } from "../service/auth-guard.service";

export const routes:Route[]=[
    {
        path: '',
        component: BaseComponent,
        children: [
            {
                path: 'customers',
                component: customerListComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'customers/:id/:state',
                component: CustomerDetails,
                canActivate: [AuthGuard]  
            },
            {
                path: 'latihan1',
                component: Latihan1Component,
                canActivate: [AuthGuard]
            },
            {
                path: 'latihan2',
                component: Latihan2Component,
                canActivate: [AuthGuard]
            }
        ],
        canActivate: [AuthGuard]
        
    }
]