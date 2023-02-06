import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userData: any;
   phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  constructor(private api: ApiService, private route: Router) { }
  userForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    phoneNumber: new FormControl('',[Validators.required , Validators.pattern(this.phoneRegex)]),
    age: new FormControl('',Validators.required)
  });


  SubmitData() {
    if(this.userForm.valid) {
      console.log(this.userForm.value);
      this.userData = this.userForm.value;
      this.api.addUserData(this.userData).subscribe(res => {
        this.route.navigate(['/user_list']);
        this.userForm.reset();
      })
    } else {
      alert("Enter Valid data")
    }
   
  }

}
