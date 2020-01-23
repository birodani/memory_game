import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CredentialService} from '../credential.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @ts-ignore
  form = new FormGroup({nickName: new FormControl('', [Validators.required, Validators.minLength(4)])});

  constructor(private router: Router, private credentialService: CredentialService) {
  }

  ngOnInit() {
  }

  start() {
    console.log(this.form.value);
    this.credentialService.saveUser(this.form.value.nickName);
    this.router.navigate(['/game'],{queryParams: { from: this.router.url}});
  }
}
