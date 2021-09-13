import { Routes } from "@angular/router";
import { BookListComponent, DashboardComponent } from "./components";
import { SignInGuard } from "./guards/sign-in.guard";

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'books',
        component: BookListComponent,
        canActivate: [SignInGuard]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
]