import { Route } from "@angular/router";
import { LoginComponent } from "./login/login.component";

export const routes:Route[]=[
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'pages',
        loadChildren: 'src/app/pages/pages-module#PagesModule'
    },
    {
        path:'',
        redirectTo: '/pages',
        pathMatch: 'full'
    }
]