import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editForm:any;
  id:any;
  oldData : any;
  selectedData:any;
 
  constructor(private api: ApiService,private activated : ActivatedRoute,private route:Router) {
     


  }

  ngOnInit():void {
    
    this.activated.params.subscribe((res:any)=>{
     this.id = res['id']
    
    });
    
    this.api.fetchSelectedUser(this.id).subscribe((response:any)=>{
      this.oldData = response.data;
      console.log(this.oldData)
      const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

        this.editForm = new FormGroup({
          firstName:new FormControl(this.oldData.firstName,Validators.required),
          lastName: new FormControl(this.oldData.lastName,Validators.required),
          phoneNumber:new FormControl(this.oldData.phoneNumber,[Validators.required,Validators.pattern(phoneRegex)]),
          age:new FormControl(this.oldData.age,Validators.required),
        })
    })
   
  }

  updateData() {
    if(this.editForm.valid) {
      const newData = {
        firstName : this.editForm.value.firstName,
        lastName : this.editForm.value.lastName,
        phoneNumber : this.editForm.value.phoneNumber,
        age : this.editForm.value.age
      }
      this.api.updateUser(this.id,newData).subscribe((res:any)=>{
        console.log(res)
        alert("Data Updated");
        this.route.navigate(['/user_list'])
  
  
      })
    } else {
      alert("Please Enter Valid Data")
    }
   
  }

  
  

}
