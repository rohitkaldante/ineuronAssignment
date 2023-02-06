import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  implements OnInit  {
getdata:any;
set:any;
  constructor(private api:ApiService){
   
  
   }

   ngOnInit(): void {
    this.getUser()
   }


   getUser() {
    this.api.fetchdata().subscribe(res=>{
      this.getdata=res;
      this.set=this.getdata.data
    });
   }

   

  
   onDeleteUser(id:string) {
      this.api.deleteUser(id).subscribe((val)=>{
        console.log(val)
        alert("User Deleted");
        this.getUser()
      })
   }
  
}
