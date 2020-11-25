import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  touristForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.touristForm = fb.group({
      // fullName: ['', [Validators.required, Validators.minLength(4)]],
      // email: ['', [Validators.required, Validators.pattern('[\\w]+@[\\w]+.[a-zA-Z]{2,5}')]],
      // prefix: ['+359', [Validators.required]],
      // phone: ['', [Validators.required]],
      // role: ['', [Validators.required]],
      // passwords: fb.group({
      //   password: ['', [Validators.required]],
      //   rePassword: ['', [Validators.required]]
      // }, { validators: [passwordMatch] })
      email: ['', [Validators.required, Validators.pattern('[\\w]+@[\\w]+.[a-zA-Z]{2,5}')]],
      // tourists: fb.array([fb.group({ tourist1: '' })])
    });
  }
  ngOnInit(): void {
  }
  log(): void {
    // tslint:disable-next-line: no-unused-expression
    console.log;
  }
}
