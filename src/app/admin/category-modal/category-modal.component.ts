import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css']
})
export class CategoryModalComponent {

 @ViewChild('categoryForm') categoryForm!: NgForm;
  
    onSubmit(){
      if (this.categoryForm.valid){
        console.log(this.categoryForm.value);
        this.categoryForm.resetForm();
      }
    }

}
