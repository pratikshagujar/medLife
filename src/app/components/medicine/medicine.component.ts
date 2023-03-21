import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent {
  showDefaultPinCode  = true ;
pincode="";
pincodeDetails:any;
displayErrorMessage=false;
 constructor(private http:HttpService){}

 ngOnInit(){
  this.verifyPincode();
 }

 verifyPincode(){
const endPoint="pin-code-details?"+"pincode="+this.pincode;
this.http.getDataFromServer(endPoint).subscribe((el:any)=>
{
  if(el && el.length>0){
    this.pincodeDetails=el[0];

  }

  else{
    this.displayErrorMessage=true;
    this.showDefaultPinCode = true ;
  }
})
 }
}
