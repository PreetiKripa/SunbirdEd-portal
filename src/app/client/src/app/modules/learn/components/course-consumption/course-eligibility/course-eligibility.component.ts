import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialog} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-course-eligibility',
  templateUrl: './course-eligibility.component.html',
  styleUrls: ['./course-eligibility.component.scss']
})
export class CourseEligibilityComponent implements OnInit {
  // form: FormGroup;
  //   description:string;

  constructor( public dialogRef: MatDialogRef<CourseEligibilityComponent>,
    @Inject(MAT_DIALOG_DATA) data) {


     }

  ngOnInit() {

  }
  onSubmit(){
    console.warn(this.form.value);
  }

  //  save() {
  //       this.dialogRef.close(this.form.value);
  //   }

  //   close() {
  //       this.dialogRef.close();
  //   }
form = new FormGroup({
         hscPercentage: new FormControl(''),
         sscPercentage: new FormControl(''),
         graduationPercentage: new FormControl('')


});

}
