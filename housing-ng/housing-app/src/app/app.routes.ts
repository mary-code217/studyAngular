import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DetailComponent } from './component/detail/detail.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
        title:"Home",
    },
    {
        path:"details/:id",
        component:DetailComponent,
        title:"Housing Detail",
    }
];
