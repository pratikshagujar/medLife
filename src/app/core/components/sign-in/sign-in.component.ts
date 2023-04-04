
import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
loginForm!:FormGroup;
loginData:any;
isNewUser:boolean=false;

isUserLoggedIn:boolean=false;

userDetails:any
@Output() emitAction:EventEmitter<boolean>=new EventEmitter(false);
constructor(private fb:FormBuilder,private http:HttpService,private auth:AuthService){

}
ngOnInit(){
this.createForm();
}
createForm(){
  this.loginForm=this.fb.group({
    userName:['',(Validators.required)],
    password:['',(Validators.required)]
  })
}

logIn()
{
  const httpParams=new HttpParams()
                      .set("userName",this.loginForm.controls['userName'].value)
                      .set("password",this.loginForm.controls['password'].value)

   this.http.getDataFromByQueryParameter("users",httpParams).subscribe((el:any)=>{

    if(el && el.length>0){
      this.loginData=el;
      this.isNewUser=false;
      const token="QWerTy754NbsJh";
      localStorage.setItem("auth-token",token);
      localStorage.setItem("userdetails",JSON.stringify(el[0]));
      this.emitAction.emit(true);
    }
    else{
      this.isNewUser=true; 
    }
   })
}

getAction(flag:any){
  if(flag){
    this.isUserLoggedIn=true;
    this.userDetails=this.auth.getUserDetailsFromLocalStorage();
  }
  }
}
