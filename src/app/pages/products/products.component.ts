import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators';
import { Product } from './interface/product.interface';
import { ShoppingCartService } from 'src/app/shared/components/header/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[]

  constructor(private productsSvc: ProductsService, private shoppingCartSVC: ShoppingCartService) { }

  ngOnInit(): void {
    this.productsSvc.getProducts()
      .pipe(
        tap((res: Product[]) => this.products = res)
      )
      .subscribe()
  }

  addToCartParent(product: Product): void {
    // console.log(product)
    this.shoppingCartSVC.updateCart(product)
  }
}
