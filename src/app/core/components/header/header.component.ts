import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CartService } from 'src/app/cart/cart.service';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartCounter:number = 0 ;
@ViewChild('closeBtn')closeBtn!:ElementRef;
isUserLoggedIn:boolean=false;

userDetails:any;
constructor(private auth:AuthService,private shared:SharedService){}

ngOnInit(): void {
  this.shared.cartCounterObs.subscribe((el:any)=>{
     this.cartCounter = el ;
  })
}
}
