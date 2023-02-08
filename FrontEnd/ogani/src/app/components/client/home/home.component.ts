import { Component, OnInit } from '@angular/core';
import { faBars, faHeart, faPhone, faRetweet, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { CartService } from 'src/app/_service/cart.service';
import { ProductService } from 'src/app/_service/product.service';
import { WishlistService } from 'src/app/_service/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]

})
export class HomeComponent implements OnInit {
  

  heart = faHeart;
  bag = faShoppingBag;
  retweet = faRetweet;

  listProductNewest : any;
  listProductPrice: any;

  showDepartment = true;


  category_items_response= [
  
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
  },
  {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
  },
  {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
  }
  
]

category_items = [
  {
    id: 1,
    src: 'assets/image/cat-1.jpg',
    alt: '',
    title: 'Fresh Fruit'
  },
  {
    id: 2,
    src: 'assets/image/cat-2.jpg',
    alt: '',
    title: 'Dried Fruit'
  },
  {
    id: 3,
    src: 'assets/image/cat-3.jpg',
    alt: '',
    title: 'Vegetables'
  },
  {
    id: 4,
    src: 'assets/image/cat-4.jpg',
    alt: '',
    title: 'Drink Fruits'
  },
  {
    id: 5,
    src: 'assets/image/cat-5.jpg',
    alt: '',
    title: 'Fresh Meat'
  }
] ;

constructor(private productSerive:ProductService,private cartService: CartService, private wishlistService: WishlistService,private messageService: MessageService){}

ngOnInit(): void {
  this.getListProduct();  
}


getListProduct(){
  this.productSerive.getListProductNewest(8).subscribe({
    next: res =>{
      this.listProductNewest = res;
    },error: err =>{
      console.log(err);
    }
  })
  this.productSerive.getListProductByPrice().subscribe({
    next:res =>{
      this.listProductPrice =res;
    },error: err=>{
      console.log(err);
    }
  })
}

addToCart(item: any){
  this.cartService.getItems();
  this.showSuccess("Add To Cart Successfully!")
  this.cartService.addToCart(item,1);
}

addToWishList(item: any){
  if(!this.wishlistService.productInWishList(item)){
    this.showSuccess("Add To Wishlist Successfully!")
    this.wishlistService.addToWishList(item);
  }
}

showSuccess(text: string) {
  this.messageService.add({severity:'success', summary: 'Success', detail: text});
}
showError(text: string) {
  this.messageService.add({severity:'error', summary: 'Error', detail: text});
}

showWarn(text: string) {
  this.messageService.add({severity:'warn', summary: 'Warn', detail: text});
}
}
