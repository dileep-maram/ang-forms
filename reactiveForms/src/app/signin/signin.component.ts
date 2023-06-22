import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{
  myForm!: FormGroup;
  constructor(private _fb:FormBuilder){

  }
  ngOnInit(): void {
    this.myForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit(){
    console.log(this.myForm.value);
  }
}
