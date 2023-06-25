import { Component } from '@angular/core';
import { product } from '../services/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  userproduct:any;
    constructor(private service:ProductService){}
    products:product[]=[];
  delete(prod:product){
    this.service.deleteproduct(prod);
  }
  onEdit(item:any){
    item.isEdit=true;
  }

  pId:any;
  pName:any;
  pPrice:any;
  update(item:any){ 
    item.isEdit=false; 
    this.userproduct={
    productId:item.productId,
    productName:item.productName,
    productPrice:item.productPrice,
    productImage:item.productImage
  }
  console.log(this.userproduct)
  this.service.updateproduct(this.userproduct);

  }
  ngOnInit(){
    this.service.viewMenu().subscribe(res=>{
      this.products=res;
    })
  }
}
