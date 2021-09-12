import { Routes } from "@angular/router";
import { BookListComponent, DashboardComponent } from "./components";

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'books',
        component: BookListComponent
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
]