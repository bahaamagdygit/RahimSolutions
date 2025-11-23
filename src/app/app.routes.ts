import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('../app/pages/home-page/home-page').then(m => m.HomePage)
    },
     {
        path: 'section',
        loadComponent: () => import('../../Layout/genaric-card/min-section/min-section').then(m => m.MinSection)
    },
    {
        path: 'min-genaric-card',
        loadComponent: () => import('../../Layout/genaric-card/min-genaric-card/min-genaric-card').then(m => m.MinGenaricCard)
    },
    {
        path: 'login',
        loadComponent: () => import('./Account/login/login').then(m => m.Login)
    },
    {
        path: 'regester',
        loadComponent: () => import('./Account/regester/regester').then(m => m.Regester)
    },
    {
        path: 'forgot-password',
        loadComponent: () => import('./Account/forgot-password/forgot-password').then(m => m.ForgotPassword)
    },
    {
        path: 'otp-confirm',
        loadComponent: () => import('./Account/otp-confirm/otp-confirm').then(m => m.OtpConfirm)
    },
    {
        path: 'reset-password',
        loadComponent: () => import('./Account/reset-password/reset-password').then(m => m.ResetPassword)
    },
    {
        path: '',
        redirectTo: 'section',
        pathMatch: 'full'
    }
];
