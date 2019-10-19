import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private api: UserServiceService, private route: Router) { }

  ngOnInit() {
  }
  onSubmit(formData) {
    const { value } = formData;
    this.api.register(value).subscribe((res) => {
      this.route.navigate(['login']);
    }, (error) => {
      console.log(error);
    });
  }

}
