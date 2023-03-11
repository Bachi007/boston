import { Component } from '@angular/core';
import { product } from '../services/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    constructor(private service:ProductService){}
    products:product[]=[];
  delete(prod:product){
    this.service.deleteproduct(prod);
  }
  ngOnInit(){
    this.service.viewMenu().subscribe(res=>{
      this.products=res;
    })
  }
}
