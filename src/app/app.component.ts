import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  
  constructor(private fb: FormBuilder) { }

  angForm = this.fb.group({
    mobiles : this.fb.array([
      this.fb.control('')
    ])
  })

 counter : number;

 get mobiles(){
   return this.angForm.get('mobiles') as FormArray;
 }

 addNewMobile(){
    this.mobiles.push(this.fb.control(''));
  }

  onSubmit(){
    // console.log("Mobile 1 is :"+ this.angForm.get(['mobiles','0']).value);
   this.counter = 0;
   for(let mob of this.mobiles.controls){
     console.log("Mobile "+ (this.counter+1) + " :: "+ this.angForm.get(['mobiles',this.counter]).value);
     this.counter = this.counter+1;
   }
  }

}
