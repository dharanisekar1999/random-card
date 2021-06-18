import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';
import {faSyncAlt,faRedo} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'random-card';
  user:any;
  faSyncAlt=faSyncAlt;
  faRedo=faRedo
  constructor(private userService:UserService,private toastr:ToastrService){}
  ngOnInit()
  {
      this.getUser()
  }
  reload()
  {
    this.user=null;
    this.getUser();
  }
  getUser()
  {
    this.userService.getUser().subscribe(
      (user:any)=>
      {
        this.user=user.results[0]
      },
      (err)=>
      {
        this.toastr.error(err.status,"oops something went wrong")
      }
    )
  }
  
}
