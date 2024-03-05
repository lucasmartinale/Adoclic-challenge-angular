import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const HEADERS = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

@Injectable({
	providedIn: 'root'
})
export class FakeService {
	private apiUrl = 'https://fakestoreapi.com';

	constructor(public http: HttpClient) {
	}

	public getProducts(filters: { category?: string; limit?: number }): Observable<any[]> {
		const url = `${this.apiUrl}/products/${filters.category ? 'category/' + filters.category : ''
			}?limit=${filters.limit || 5}`;

		return this.http.get<any[]>(url);
	}

	public getCategories() {
		return this.http.get<any>(`${this.apiUrl}/products/categories`, { headers: HEADERS });
	}
}
