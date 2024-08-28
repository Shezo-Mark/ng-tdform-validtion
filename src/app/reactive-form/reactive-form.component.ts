import { Component } from '@angular/core';
// ractive form use ths must
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

UserData = new FormGroup({
   name: new FormControl('',[Validators.required]),
   email: new FormControl('',[Validators.required,Validators.email, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
   //email: new FormControl( ['', [Validators.required, Validators.email, ]]),
   number: new FormControl('',[Validators.required, Validators.maxLength(9)]),
   password: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) ]),
   Gender:new FormControl(''),
   IsMale:new FormControl(false),

});

GetData() {
  // debugger;
  if(!this.UserData.valid)
    return;
  // add new data to json
  // add data into nested obj
  let data={
    'id':18,
    'obj':this.UserData.value
  }
  // add data into exixting obj
  let data2={
    'id':18,
   'name': this.UserData.value.name
  }
   console.log(this.UserData.value);
   // console.log(`User Data: ${JSON.stringify(this.UserData.value)}`);
  // console.log(`User Data: ${JSON.stringify(data)}`);
  // console.log(`User Data2: ${JSON.stringify(data2)}`);
}
get check(){
  return  this.UserData.controls
}

get password() {
  return this.check['password'] as FormControl;
}

// Password validation conditions
get isLengthValid() {
  return this.password?.value?.length >= 8;
}

get hasUppercase() {
  return /[A-Z]/.test(this.password?.value);
}

get hasLowercase() {
  return /[a-z]/.test(this.password?.value);
}

get hasNumber() {
  return /\d/.test(this.password?.value);
}

get hasSpecialChar() {
  return /[@$!%*?&]/.test(this.password?.value);
}
}
