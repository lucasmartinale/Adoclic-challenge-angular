import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { RouterModule } from '@angular/router';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbdModalComponent } from '../shared/components/modal/modal.component';


@NgModule({
  declarations: [
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShopRoutingModule,
    SharedModule,
    NgbdModalComponent,
  ]
})
export class ShopModule { }
