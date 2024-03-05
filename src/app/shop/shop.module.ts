import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { RouterModule } from '@angular/router';
import { ShopRoutingModule } from './shop-routing.module';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    ShoppingComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShopRoutingModule,
    FormsModule    
  ]
})
export class ShopModule { }
