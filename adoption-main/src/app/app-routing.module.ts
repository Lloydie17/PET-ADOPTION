import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { Role } from './_models';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const profileModule = () => import('./profile/profile.module').then(x => x.ProfileModule);
const requestModule = () => import('./request/request.module').then(x => x.RequestModule);
const requestsModule = () => import('./requests/requests.module').then(x => x.RequestsModule);
const ratingsModule = () => import('./rating/rating.module').then(x => x.RatingModule);


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'ratings', loadChildren: ratingsModule, canActivate: [AuthGuard], data: { roles: [Role.User] } },
    { path: 'myrequest', loadChildren: requestModule, canActivate: [AuthGuard], data: { roles: [Role.User] } },
    { path: 'requests', loadChildren: requestsModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
    { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
