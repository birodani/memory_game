import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @ts-ignore
  form = new FormGroup({nickName: new FormControl('', [Validators.required, Validators.minLength(4)])});

  constructor() {
  }

  ngOnInit() {
  }

  start() {
    console.log(this.form.value);
  }
}
