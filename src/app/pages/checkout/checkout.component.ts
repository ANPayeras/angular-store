import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs/operators';
import { Order, Details } from 'src/app/shared/components/header/interfaces/order.interface';
import { Store } from 'src/app/shared/components/header/interfaces/stores.interface';
import { ShoppingCartService } from 'src/app/shared/components/header/services/shopping-cart.service';
import { Product } from '../products/interface/product.interface';
import { DataService } from '../products/services/data.service';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  model = {
    name: '',
    store: '',
    shippingAddress: '',
    city: ''
  }
  stores: Store[] = []
  isDelivery: boolean = true
  cart: Product[] = []

  constructor(
    private dataSVC: DataService,
    private shoppingCartSVC: ShoppingCartService,
    private router: Router,
    private productsSVC: ProductsService
  ) {
    this.checkCartEmpty()
  }

  ngOnInit(): void {
    this.getStores()
    this.getDataCart()
  }

  changeDelivery(value: boolean): void {
    this.isDelivery = value
  }

  onSubmit({ value: formData }: NgForm): void {
    // console.log(formData)
    const data: Order = {
      ...formData,
      date: this.getCurrentDay(),
      isDelivery: this.isDelivery
    }
    this.dataSVC.saveOrder(data)
      .pipe(
        tap(res => console.log(res)),
        switchMap(({ id: orderId }) => {
          const details = this.prepareDetails()
          return this.dataSVC.saveDetailsOrder({ details, orderId })
        }),
        tap(() => this.router.navigate(['/checkout/finalRegard'])),
        delay(2000),
        tap(() => this.shoppingCartSVC.resetCart())
      )
      .subscribe()
  }

  private getStores(): void {
    this.dataSVC.getStores()
      .pipe(
        tap((res: Store[]) => this.stores = res))
      .subscribe()
  }

  private getCurrentDay(): string {
    return new Date().toLocaleString()
  }

  private prepareDetails(): Details[] {
    const details: Details[] = []
    this.cart.forEach(product => {
      const { id: productID, name: productName, quantity, stock } = product;
      const updateStock = (stock - quantity);

      this.productsSVC.updateStock(productID, updateStock)
        .pipe(
          tap(() => details.push({ productID, productName, quantity }))
        )
        .subscribe()
    })
    return details
  }

  private getDataCart(): void {
    this.shoppingCartSVC.cartAction$
      .pipe(
        tap((products: Product[]) => this.cart = products)
      )
      .subscribe()
  }

  private checkCartEmpty(): void {
    this.shoppingCartSVC.cartAction$
      .pipe(
        tap((products: Product[]) => {
          if (Array.isArray(products) && !products.length) {
            this.router.navigate(['/products'])
          }
        })
      )
      .subscribe()
  }

}
