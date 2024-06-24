import { Component } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  images: any = [];
  loginForm: any;
  signUpForm: any;
  submitted: boolean = false;
  
  constructor(private fetchDataService: FetchDataService) {
    this.getImages();
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });

    this.signUpForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.submitted = true;
      console.log(this.loginForm.value);
    }
  }
  onRegister() {
    if(this.signUpForm.valid) {
      this.submitted = true;
      console.log(this.signUpForm.value);
    }
  }
 
  async getImages() {
    const url = 'https://treasure-tangible-rain.glitch.me/auth';
    try {
      this.images = await this.fetchDataService.fetchData(url);
      console.log(this.images);
    } catch (error) {
      console.error('Error loading images:', error);
    }
  }
}
