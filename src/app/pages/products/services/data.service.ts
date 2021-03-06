import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DetailsOrder, Order } from "src/app/shared/components/header/interfaces/order.interface";
import { Store } from "src/app/shared/components/header/interfaces/stores.interface";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    // private apiURL = 'http://localhost:3001'
    private apiURL = 'https://fake-server-angular-store.herokuapp.com'

    constructor(private http: HttpClient) { }

    getStores(): Observable<Store[]> {
        return this.http.get<Store[]>(`${this.apiURL}/stores`)
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(`${this.apiURL}/orders`, order)
    }

    saveDetailsOrder(details: DetailsOrder): Observable<DetailsOrder> {
        return this.http.post<DetailsOrder>(`${this.apiURL}/detailsOrders`, details)
    }

}