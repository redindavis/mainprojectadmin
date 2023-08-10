import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { RouterModule,Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { CategoryModalComponent } from './category-modal/category-modal.component';
import { CoreModule } from '../core/core.module';




@NgModule({
  declarations: [
    OrderComponent,
    CategoryComponent,
    ProductComponent,
    ProductModalComponent,
    CategoryModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule
  

  ]
})
export class AdminModule { }
