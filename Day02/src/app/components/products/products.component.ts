import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductComponentComponent } from '../product-component/product-component.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,CommonModule,ProductComponentComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  products:any  = [ { name: 'Laptop', price: 1200, available: true }, { name: 'Smartphone', price: 800, available: true }, { name: 'Headphones', price: 100, available: false }, { name: 'Camera', price: 600, available: true }, { name: 'Tablet', price: 300, available: false }, { name: 'Fitness Tracker', price: 50, available: true }, { name: 'Bluetooth Speaker', price: 80, available: true }, { name: 'Gaming Console', price: 400, available: false }, { name: 'Smartwatch', price: 150, available: true }, { name: 'External Hard Drive', price: 120, available: true }, ];

  searchText:String="";
   
  searchData:any;

  findProduct(name:String){
    console.log(name);
     this.searchData=this.products.find((product:any)=>product.name==name)||{};
   
  }
  
}
