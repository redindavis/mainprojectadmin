import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { adminProductdata } from 'src/app/models/product';
import { ProductModalService } from 'src/app/services/product-modal.service';

@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.css']
})
export class EditmodalComponent implements OnInit {

  productData: any = {};

  categories: any[ ] = [ ];
  
  imageSrc: any = ''; 

  constructor( private productmodalservice:ProductModalService, private router: Router){}

  @ViewChild('productForm') productForm!: NgForm;

  ngOnInit(){
    this.fetchCategories();
  }

  fetchCategories(){
    this.productmodalservice.getCategories().subscribe((
      response:string[])=>{
        this.categories=response;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  getProductDetails(productId: number) {
    this.productmodalservice.getProductById(productId).subscribe(
      (response: adminProductdata) => {
        console.log('Fetched product details:', response);
        this.productData = response; // Populate productData with the fetched data
        // Set the image source if there's an existing image
        this.imageSrc = this.productData.image ? `data:image/png;base64,${this.productData.image}` : '';
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
  }

  onSubmit(data: adminProductdata) {
    if (this.productForm.valid) {
      if (this.imageSrc) {
        
        const base64String = this.imageSrc.split(',')[1];
        
        data.image = base64String;
      }

      this.productmodalservice.editProduct(data).subscribe(
        (response) => {
          console.log('Product data updated successfully:', response);
          this.productForm.resetForm();
          window.location.reload();
        },
        (error) => {
          console.error('Error updating product data:', error);
        }
      );
    }
  }
  onFileChanged(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result; 
    };
    reader.readAsDataURL(file);
  }

}
