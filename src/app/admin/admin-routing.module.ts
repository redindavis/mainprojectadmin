
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
 { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'order', component: OrderComponent },
  { path: 'product', component: ProductComponent },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
