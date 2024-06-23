import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DistrictDetailsComponent } from './components/district-details/district-details.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'auth', component: AuthComponent
    },
    {
        path: 'district/:id', component: DistrictDetailsComponent
    },
    {
        path: '**', component: NotFoundComponent
    }
];

