import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'shopping',
    loadChildren: () => import('./shop/shop.module').then( m => m.ShopModule ),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: '**',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
