import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-component.component.html',
  styleUrl: './product-component.component.css'
})
export class ProductComponentComponent {

  @Input() products:Product[]=[];

  threshold:number=150;

  getStyle(product:Product){
    return {
      'background-color':product.available?'green':'red',
      'font-size':product.price>this.threshold?'20px':'10px'
    }
  }


}
