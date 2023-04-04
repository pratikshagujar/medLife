import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
signUpForm!:FormGroup;
isGetOtp:boolean=false;
otpGenerated!:number;
sub!:Subscription;
otpCounter:number=0;
isOtpVerified:boolean=false;

constructor(private fb:FormBuilder,private http:HttpService){}
ngOnInit(){
this.createNewUser()
}
createNewUser(){
  this.signUpForm=this.fb.group({
   "userName":['',(Validators.required)],
    "mobileNo":['',(Validators.required),(Validators.maxLength(10)),(Validators.minLength(10))],
      "password":['',(Validators.required)],
    "isMobileNoVerified":[false]
  })
}

getOtp(){
  this.isGetOtp = true ;
  
  this.otpGenerated = Math.floor(1000 + Math.random() * 9000);
  console.log(this.otpGenerated);

  this.sub =  interval(1000).subscribe((el:number)=>{
      this.otpCounter = 60 - el ;
  
      if(this.otpCounter === 0){
        this.sub.unsubscribe();
      }
      console.log(el);
    })
}

isIncorrectOtp:boolean = false ;
verifyOtp(otp:any){
  if(this.otpGenerated == otp){
    this.isOtpVerified = true ;
    this.isGetOtp = false ;
    this.isIncorrectOtp = false;
    this.sub.unsubscribe();
    this.signUpForm.controls["isMobNoVerified"].setValue(true);
  }else {
    this.isIncorrectOtp = true
  }
  
}

signUp(){
  this.http.postDataToServer("users",this.signUpForm.value).subscribe((el:any)=>{
    console.log(el);
  })
}

ngOnDestroy(){
  this.sub.unsubscribe();
}
}
