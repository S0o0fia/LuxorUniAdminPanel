
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AdminLoginComponent } from './Components/AdminAuthentication/admin-login/admin-login.component';
import { DashBoardComponent } from './Components/DashBoard/dash-board/dash-board.component';
import { SKAllCourcesComponent } from './Components/DashBoard/SkillsDevelopment/skall-cources/skall-cources.component';
import { SKAddCourseComponent } from './Components/DashBoard/SkillsDevelopment/skadd-course/skadd-course.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { MenuToggleModule } from './Helpers/menu/menu-toggle.module';
import { SideBarComponent } from './Components/AdminAuthentication/Shared/side-bar/side-bar.component';
import { MenuItems } from './Helpers/menu/menu-items/menu-items';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from './Services/auth-grad.service';
import { RegsitedStudentsComponent } from './Components/DashBoard/MilitryEducation/regsited-students/regsited-students.component';
import { AllNewsComponent, NewDetailsDialog } from './Components/DashBoard/UniversityWebsite/all-news/all-news.component';
import { UniversityWebsiteComponent } from './Components/DashBoard/UniversityWebsite/university-website/university-website.component';
import { AddNewComponent } from './Components/DashBoard/UniversityWebsite/add-new/add-new.component';
import { AllMilitaryEducationNewsComponent, MilitaryNewDetailsDialog } from './Components/DashBoard/MilitryEducation/all-military-education-news/all-military-education-news.component';
import { AddMilitaryNewComponent } from './Components/DashBoard/MilitryEducation/add-military-new/add-military-new.component';
import { AddTraineeComponent } from './Components/DashBoard/SkillsDevelopment/add-trainee/add-trainee.component';
import { AllTraineeComponent } from './Components/DashBoard/SkillsDevelopment/all-trainee/all-trainee.component';
import { TraineesofCourseComponent } from './Components/DashBoard/SkillsDevelopment/traineesof-course/traineesof-course.component';
import { AssginTraineeToCouresComponent } from './Components/DashBoard/SkillsDevelopment/assgin-trainee-to-coures/assgin-trainee-to-coures.component';
import { ShowCourseTraineeComponent } from './Components/DashBoard/SkillsDevelopment/show-course-trainee/show-course-trainee.component';
import { AddMilitaryCourseComponent } from './Components/DashBoard/MilitryEducation/add-military-course/add-military-course.component';
import { ShowMilitaryCoursesComponent } from './Components/DashBoard/MilitryEducation/show-military-courses/show-military-courses.component';
import { ShowMilitaryCourseStudentsComponent } from './Components/DashBoard/MilitryEducation/show-military-course-students/show-military-course-students.component';
import { UploadMilitaryLecturesComponent } from './Components/DashBoard/MilitryEducation/upload-military-lectures/upload-military-lectures.component';
import { ShowMilitaryCourseLectureComponent } from './Components/DashBoard/MilitryEducation/show-military-course-lecture/show-military-course-lecture.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    DashBoardComponent,
    SideBarComponent,
    SKAllCourcesComponent,
    SKAddCourseComponent,
    RegsitedStudentsComponent,
    AllNewsComponent,
    UniversityWebsiteComponent,
    AddNewComponent ,
    NewDetailsDialog,
    AllMilitaryEducationNewsComponent,
    AddMilitaryNewComponent ,
    MilitaryNewDetailsDialog,
    AddTraineeComponent,
    AllTraineeComponent,
    TraineesofCourseComponent,
    AssginTraineeToCouresComponent,
    ShowCourseTraineeComponent,
    AddMilitaryCourseComponent,
    ShowMilitaryCoursesComponent,
    ShowMilitaryCourseStudentsComponent,
    UploadMilitaryLecturesComponent,
    ShowMilitaryCourseLectureComponent



  ],
  imports: [
    BrowserModule,
    MatNativeDateModule ,
    MatDatepickerModule,
    MatSidenavModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatIconModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatBadgeModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    PerfectScrollbarModule,
    MenuToggleModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),

    MatButtonModule,
    MatInputModule

  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  	MenuItems,
    AuthGuard ,

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
