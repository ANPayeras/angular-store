import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/components/header/services/shopping-cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  constructor(private shoppingCartSVC: ShoppingCartService) { }
  total$ = this.shoppingCartSVC.totalAction$
  cart$ = this.shoppingCartSVC.cartAction$
}
