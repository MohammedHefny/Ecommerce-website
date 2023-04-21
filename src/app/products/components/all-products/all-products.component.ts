import { Component,OnInit } from '@angular/core';
import { product } from '../../models/product';
import { ProductstService } from '../../services/productst.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products:product[] = []
  categories:string[] = []
  loading: boolean = false;
  cartProducts:any[] = []
  constructor(private service: ProductstService){}
  ngOnInit() {
    this.getProducts()
    this.getCategories()
  }
  getProducts(){
    this.loading = true;
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res
      this.loading = false;
    }, error =>{
      this.loading = false;
      alert('error')
    })
  }
  getCategories(){
    this.loading = true;
    this.service.getAllCategories().subscribe((res: any) => {
    this.loading = false;
    console.log(res)
    this.categories = res
  }, error =>{
      this.loading = false;
      alert('error')
    })
  }

  filterCategory(event: any) {
    let value = event.target.value
    if (value === "all") {
      this.getProducts()
    }else {
      this.getProductsCategory(value)
    }
  }
  getProductsCategory(keyword: string) {
    this.loading = true
    this.service.getProductsByCategory(keyword).subscribe((res: any)=>{
      this.loading = false
      this.products = res
    })
  }

  addToCart(event: any) {
  if ("cart" in localStorage) {
    this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    let exist = this.cartProducts.find(item =>item.item.id === event.item.id)
    if (exist) {
      alert('product is already in your cart')
    }else {
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
}  else {
    this.cartProducts.push(event)
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  }
}
