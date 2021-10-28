import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Product
  @Output() addToCart = new EventEmitter<Product>()
  constructor() { }

  handleClick(): void {
    this.addToCart.emit(this.product)
  }

}
