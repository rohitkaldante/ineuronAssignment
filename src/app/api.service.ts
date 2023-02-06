import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchdata()
  {
    return this.http.get('https://blue-journalist-bbrpv.ineuron.app:4000/users');
  }
  addUserData(data:any)
  {
    return this.http.post('https://blue-journalist-bbrpv.ineuron.app:4000/user/create',data)
  }


  fetchSelectedUser(id:string) {
    return this.http.get(`https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`)
  }

  updateUser(id:string,body:any) {
    return this.http.patch(`https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`,body)
  }

  deleteUser(id:any) {
    return this.http.delete(`https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`)
  }
 
  
  
}
