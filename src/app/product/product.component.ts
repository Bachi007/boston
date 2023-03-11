import { Component } from '@angular/core';
import { product } from '../services/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  pid:string=''
  pname:string=''
  pprice:string=''
  pimage:string=''
  userproduct:any;
  constructor(private service:ProductService){}
  addproduct(){
    this.userproduct={
      productId:this.pid,
      productName:this.pname,
      productPrice:this.pprice,
      productImage:this.pimage
    }
    console.log(this.userproduct)
    this.service.addProduct(this.userproduct);




  }

}
