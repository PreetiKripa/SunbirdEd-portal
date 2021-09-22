import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { CourseEligibilityService } from '../../../services/course-eligibility/course-eligibility.service';
import {MatSnackBar} from '@angular/material/snack-bar';
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
form = new FormGroup( {
    learnerName: new FormControl( '' ),
    organisation: new FormControl( '' ),
    hscPercentage: new FormControl( '' ),
    sscPercentage: new FormControl( '' ),
    graduationPercentage: new FormControl( '' ),
    entryExamCleared: new FormControl( '' )


  } );
  constructor ( public dialogRef: MatDialogRef<CourseEligibilityComponent>,
    @Inject( MAT_DIALOG_DATA ) data, public courseEligibilityService: CourseEligibilityService ,private _snackBar: MatSnackBar) {


  }

  ngOnInit () {

  }
  // onSubmit(){
  //   console.warn(this.form.value);
  // }

  save ( eligibility ) {
    console.log(this.form.value);
    eligibility=this.form.value
    this.courseEligibilityService.checkEligibility( eligibility ).subscribe( data => {
      console.log( "DATA", data );
      if(data.entryExamCleared){
  this._snackBar.open("Congratulations!! You are eligible to enroll.", "OK",{


  panelClass: ['blue-snackbar']

  });
      }
      else{
          this._snackBar.open("Oops!! You are not eligible to enroll.", "OK",{


  panelClass: ['red-snackbar']

  });
      }

    } );
    // this.dialogRef.close( this.form.value );

  }

  close () {
    this.dialogRef.close();
  }


}
