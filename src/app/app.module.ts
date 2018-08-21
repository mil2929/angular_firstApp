import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Latihan1Component } from './latihan/latihan.component';
import { Latihan2Component } from './latihan/latihan2.component';
import { homepage } from './latihan/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { customerListComponent } from './pages/customer-list-component';
import { CustomerDetails } from './pages/customer-detail-component';
import { customerDetailModal } from './pages/customer-detail-modal-component';
import { HttpService } from './service/httpservice';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),  //from separate file
    HttpClientModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }