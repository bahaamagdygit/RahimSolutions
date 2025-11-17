import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'section',
        loadComponent: () => import('../../Layout/genaric-card/min-section/min-section').then(m => m.MinSection)
    },
    {
        path: 'min-genaric-card',
        loadComponent: () => import('../../Layout/genaric-card/min-genaric-card/min-genaric-card').then(m => m.MinGenaricCard)
    },
    {
        path: '',
        redirectTo: 'section',
        pathMatch: 'full'
    }
];
