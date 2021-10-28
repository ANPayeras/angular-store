import { Component } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
    selector: 'app-cart',
    template: `
    <ng-container *ngIf='{total: total$ | async, quantity:quantity$ | async} as dataCart'>
        <ng-container *ngIf=dataCart.total >
            <mat-icon>add_shopping_cart</mat-icon>
            {{dataCart.total | currency}}
            ({{dataCart.quantity}})
        </ng-container>
    </ng-container>`,
    styleUrls: ['./cart.component.scss']
})

export class CartComponent {
    constructor(private shoppingCartSVC: ShoppingCartService) { }

    quantity$ = this.shoppingCartSVC.quantityAction$
    total$ = this.shoppingCartSVC.totalAction$
    cart$ = this.shoppingCartSVC.cartAction$

}
