import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { CourseEligibilityService } from '../../../services/course-eligibility/course-eligibility.service';
export interface DialogData {
  animal: string;
  name: string;
}

@Component( {
  selector: 'app-course-eligibility',
  templateUrl: './course-eligibility.component.html',
  styleUrls: [ './course-eligibility.component.scss' ]
} )
export class CourseEligibilityComponent implements OnInit {
  // form: FormGroup;
  //   description:string;

  constructor ( public dialogRef: MatDialogRef<CourseEligibilityComponent>,
    @Inject( MAT_DIALOG_DATA ) data, public courseEligibilityService: CourseEligibilityService ) {


  }

  ngOnInit () {

  }
  // onSubmit(){
  //   console.warn(this.form.value);
  // }

  save ( eligibility ) {
    console.log(this.form.value);
    this.courseEligibilityService.checkEligibility( this.form.value ).subscribe( data => {
      console.log( "DATA", data );
    } );
    // this.dialogRef.close( this.form.value );

  }

  close () {
    this.dialogRef.close();
  }
  form = new FormGroup( {
    learnerName: new FormControl( '' ),
    organisation: new FormControl( '' ),
    hscPercentage: new FormControl( '' ),
    sscPercentage: new FormControl( '' ),
    graduationPercentage: new FormControl( '' ),
    entryExamCleared: new FormControl( '' )


  } );

}
