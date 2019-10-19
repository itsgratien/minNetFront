import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private api: UserServiceService, private route: Router) { }

  ngOnInit() {
  }
  onSubmit(formData) {
    const { value } = formData;
    this.api.login(value).subscribe((res) => {
      const {token } = res;
      localStorage.setItem('appToken', token);
      this.route.navigate(['']);
    }, (error) => {
      console.log(error);
    });
  }
}
