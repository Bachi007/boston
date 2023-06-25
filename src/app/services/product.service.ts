import { Injectable } from '@angular/core';
import { product } from './product';
import {of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:product[]=[
    {
      productId:'p1',
      productName:'Apricot Delight',
      productPrice:'150',
      productImage:'http://3.bp.blogspot.com/-bGGNmO8jaZs/US05mcfs_RI/AAAAAAAAAmQ/hTJmEBokYLc/s1600/IMG_5602.JPG',
      isEdit:false
    },
    {
      productId:'p2',
      productName:'Khaddu ka Kheer',
      productPrice:'160',
      productImage:'https://1.bp.blogspot.com/-ceEgbICRKhI/Xyw8F4GQ_MI/AAAAAAAAAIs/x3e_hd32lDkY4ay6bYkQsQlCTTZUZPZDACLcBGAsYHQ/w498-h321/kheer.png',
      isEdit:false
    },
    {
      productId:'p3',
      productName:'Gajar ki Halwa',
      productPrice:'170',
      productImage:'https://1.bp.blogspot.com/-ceEgbICRKhI/Xyw8F4GQ_MI/AAAAAAAAAIs/x3e_hd32lDkY4ay6bYkQsQlCTTZUZPZDACLcBGAsYHQ/w498-h321/kheer.png',
      isEdit:false
    }
  ];

  addProduct(prodresh:product){
    this.products.push(prodresh);
  }

  viewMenu(){
    return of(this.products);
  }

  deleteproduct(prod:product){
    const ind=this.products.findIndex(obj=>obj.productId==prod.productId)
    this.products.splice(ind,1);
  }

  updateproduct(prod:product){
    this.products.forEach((p,ind)=>{
      if(p.productId==prod.productId){
        this.products.splice(ind,1,prod);
      }
    })
  }

  iscompleted(prod:product){
    
  }







  constructor() { }
}
