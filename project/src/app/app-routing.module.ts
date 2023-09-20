import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Error403Component} from "./components/error403/error403.component";
import {Error404Component} from "./components/error404/error404.component";
import {UserListComponent} from "./modules/user-list/user-list.component";

const routes: Routes = [
  {
    path: '403',
    component: Error403Component,
    loadChildren: () => import('./components/error403/error403.module').then(m => m.Error403Module),
  },
  {
    path: '404',
    component: Error404Component,
    loadChildren: () => import('./components/error404/error404.module').then(m => m.Error404Module),
  },
  {
    path: 'user-list',
    component: UserListComponent,
    loadChildren: () => import('./modules/user-list/user-list.module').then(m => m.UserListModule),
  },
  {path: '**', redirectTo: '/user-list'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
