import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  myForm!: FormGroup;
  constructor(private _fb:FormBuilder){
  }
  ngOnInit(): void {
    this.myForm= this._fb.group({
      nameF:['',Validators.required],
      nameL:['',Validators.required],
      email:['',Validators.required],
      passwordn:['',Validators.required],
      passwordr:['',Validators.required]
    });
  }
  onSubmit(){
    console.log(this.myForm.value); 
  }
}