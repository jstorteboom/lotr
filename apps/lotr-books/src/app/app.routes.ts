import { Routes } from "@angular/router";
import { SignInGuard } from "@lens/core/lib";
import { FullLayoutComponent } from '@lens/ui/bootstrap';
import { BookListComponent, DashboardComponent } from "./components";

export const routes: Routes = [
    {
        path: '',
        component: FullLayoutComponent,
        children: [
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
                path: 'characters',
                loadChildren: () => import('./modules/character/character.module').then(m => m.CharacterModule)
            },
            {
                path: '**',
                redirectTo: 'dashboard'
            }
        ]
    }
]