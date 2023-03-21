import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-top-deals-by-category',
  templateUrl: './top-deals-by-category.component.html',
  styleUrls: ['./top-deals-by-category.component.scss']
})
export class TopDealsByCategoryComponent {

  topDealsByCategoryData:any=[];

constructor(private http:HttpService){

}
ngOnInit(){
this.getTopDealsByCategory()
}

getTopDealsByCategory(){
  this.http.getDataFromServer("top-deals-by-category").subscribe((el:any)=>{
    if(el && el.length>0){
      this.topDealsByCategoryData=el;
    }
  },
  error=>{
    console.log(error);
  }
  )
}
}
