import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';
import { FakeService } from 'app/fake.service';
import { Product } from 'app/shop/interfaces/Product.interface';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  // Filters
  selectedCategory: string = '';
  selectedLimit: number = 5;
  categories: string[] = [];


  // Loading Spinners
  public loadingProducts: boolean = false;
  public loadingProduct: boolean = false;

  // Gets
  public products: Product[] = [];
  public productSelected: Product = null;

  constructor(
    private fakeService: FakeService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts({});
  }

  private getProducts(filters: { category?: string; limit?: number }): void {
    this.loadingProducts = true;
    this.fakeService.getProducts(filters).subscribe({
      next: (response) => {
        this.products = response;
        console.log(this.products);
        this.loadingProducts = false;
      },
      error: (error) => {
        this.loadingProducts = false;
      },
    });
  }

  public getProductById(id: number): void {
    this.productSelected = this.products.find(product => product.id === id);
  }

  public applyFilters(): void {
    this.getProducts({ category: this.selectedCategory, limit: this.selectedLimit });
  }

  public getCategories(): void {
    this.fakeService.getCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (error) => {
        this.loadingProduct = false;
        this.categories = [];
      },
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}







