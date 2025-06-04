import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Home } from './pages/home/home';
import { About } from './pages/home/about/about';

export const routes: Routes = [
    {path:'login', component: Login},
    {path:'register', component: Register},
    {path:'home', component: Home, children: [
        {path: 'about', component: About}
    ]}
];
