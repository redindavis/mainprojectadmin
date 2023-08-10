import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent {
  @ViewChild('productForm') productForm!: NgForm;

  onSubmit(){
    if (this.productForm.valid){
      console.log(this.productForm.value);
      this.productForm.resetForm();
    }
  }

}
