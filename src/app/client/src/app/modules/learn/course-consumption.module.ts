import { TelemetryModule } from '@sunbird/telemetry';
import { CourseConsumptionRoutingModule } from './course-consumption-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@sunbird/shared';
import { SharedFeatureModule } from '@sunbird/shared-feature';
import { FormsModule } from '@angular/forms';
import {
  CoursePlayerComponent, CourseConsumptionHeaderComponent, CourseConsumptionPageComponent,
  CurriculumCardComponent  } from './components';
import { CourseConsumptionService, CourseBatchService, CourseProgressService , AssessmentScoreService } from './services';
import { CoreModule } from '@sunbird/core';
import { PlayerHelperModule } from '@sunbird/player-helper';
import {
  SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule,
  SuiProgressModule, SuiRatingModule, SuiCollapseModule
} from 'ng2-semantic-ui';
import { BatchDetailsComponent,  } from './components/batch/batch-details/batch-details.component';
import { UnEnrollBatchComponent} from './components/batch/unenroll-batch/unenroll-batch.component';
import { CommonConsumptionModule } from '@sunbird-stackroute/common-consumption';
import { AssessmentPlayerComponent } from './components/course-consumption/assessment-player/assessment-player.component';
import { CourseCompletionComponent } from './components/course-consumption/course-completion/course-completion.component';
import { CourseDetailsComponent } from './components/course-consumption/course-details/course-details.component';
import { CsModule } from '@project-sunbird/client-services';
import { CsLibInitializerService } from '../../service/CsLibInitializer/cs-lib-initializer.service';
import { MatIconModule } from '@angular/material/icon';
import { CourseEligibilityComponent } from './components/course-consumption/course-eligibility/course-eligibility.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {  ReactiveFormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';


export const csUserServiceFactory = (csLibInitializerService: CsLibInitializerService) => {
  if (!CsModule.instance.isInitialised) {
    csLibInitializerService.initializeCs();
  }
  return CsModule.instance.userService;
};
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedFeatureModule,
    SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule,
    SuiProgressModule, SuiRatingModule, SuiCollapseModule,
    FormsModule,
    CourseConsumptionRoutingModule,
    CoreModule,
    TelemetryModule,
    PlayerHelperModule,
    CommonConsumptionModule,MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule

  ],
  providers: [{ provide: 'CS_USER_SERVICE', useFactory: csUserServiceFactory, deps: [CsLibInitializerService] }],
  declarations: [CoursePlayerComponent, CourseConsumptionHeaderComponent, AssessmentPlayerComponent,
    CourseConsumptionPageComponent, BatchDetailsComponent, CurriculumCardComponent, UnEnrollBatchComponent,
    AssessmentPlayerComponent, CourseCompletionComponent, CourseDetailsComponent,CourseEligibilityComponent],
  entryComponents:[CourseEligibilityComponent]
})
export class CourseConsumptionModule { }
