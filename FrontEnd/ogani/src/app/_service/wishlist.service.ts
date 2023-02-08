import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  items : any[] =[];

  constructor() { }

  saveWishList(){
    localStorage.setItem('wish_list',JSON.stringify(this.items));
  }

  productInWishList(item: any):boolean{
    return this.items.findIndex((x:any) => x.id == item.id) > -1;
  }

  loadWishList():void{
    this.items = JSON.parse(localStorage.getItem('wish_list') as any) || [];
  }

  getItems() {
    return this.items;
  }

  getWishListLength(){
    let length = this.items;
    return length ? this.items.length : 0;
  }

  addToWishList(item: any){
    this.loadWishList();
    this.items.push(item);
    this.saveWishList();
  }


  remove(item: any){
    const index = this.items.findIndex((o:any) => o.id == item.id);
    if(index > -1){
      this.items.splice(index,1);
      this.saveWishList();
    }
  }

  clearCart(){
    this.items = [];
    localStorage.removeItem('wish_list');
  }
  
}
