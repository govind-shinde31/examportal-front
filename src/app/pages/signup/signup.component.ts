import { Component } from '@angular/core';
import { User } from '../../Models/user.model';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(private userService:UserService, private snackBar:MatSnackBar){}

  public user = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  }

    public Submit(){
      console.log(this.user)
      if(this.user.username == '' || this.user.username == null){
        // alert("User is required.. !!");
        this.snackBar.open("Usename is requires..!!", '', {
          duration:2000,
          verticalPosition:'top',
          horizontalPosition:'right',
        })
        return;
      }
      // addUser UserService 
      this.userService.addUser(this.user).subscribe((data: any) =>{
        // success
        console.log(data);
        // alert("User added successfully..!!")
        Swal.fire("Success", "added successfully..!!", 'success')
        
      },
      (error)=>{
        // error
        console.log(error);
        alert("Something went wrong");
      }
    )
    }
}
