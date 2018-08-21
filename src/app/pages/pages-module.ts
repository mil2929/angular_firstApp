import { NgModule }      from '@angular/core';
import { CommonModule } from '../../../node_modules/@angular/common';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { RouterModule } from '../../../node_modules/@angular/router';
import { routes } from './pages-route';
import { HttpClientModule } from '@angular/common/http';
import { BaseComponent } from './base-component';
import { Latihan1Component } from '../latihan/latihan.component';
import { Latihan2Component } from '../latihan/latihan2.component';
import { customerListComponent } from './customer-list-component';
import { CustomerDetails } from './customer-detail-component';
import { customerDetailModal } from './customer-detail-modal-component';
import { HttpService } from '../service/httpservice';
import { AuthGuard } from '../service/auth-guard.service';


@NgModule({
    imports:[ 
        CommonModule,
        FormsModule,
        RouterModule,
        RouterModule.forChild(routes),
        HttpClientModule 
    ],
    declarations: [ 
        BaseComponent,
        Latihan1Component,
        Latihan2Component,
        customerListComponent,
        CustomerDetails,
        customerDetailModal
    ],
    providers:    [ 
        HttpService,
        AuthGuard
     ]
})
export class PagesModule {  }