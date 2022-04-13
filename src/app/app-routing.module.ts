import { ExportRegistedStudentPDFComponent } from './Components/DashBoard/MilitryEducation/export-registed-student-pdf/export-registed-student-pdf.component';
import { ShowMilitaryCourseLectureComponent } from './Components/DashBoard/MilitryEducation/show-military-course-lecture/show-military-course-lecture.component';
import { ShowMilitaryCourseStudentsComponent } from './Components/DashBoard/MilitryEducation/show-military-course-students/show-military-course-students.component';
import { ShowMilitaryCoursesComponent } from './Components/DashBoard/MilitryEducation/show-military-courses/show-military-courses.component';
import { AllTraineeComponent } from './Components/DashBoard/SkillsDevelopment/all-trainee/all-trainee.component';
import { AddTraineeComponent } from './Components/DashBoard/SkillsDevelopment/add-trainee/add-trainee.component';
import { AddNewComponent } from './Components/DashBoard/UniversityWebsite/add-new/add-new.component';
import { AllNewsComponent } from './Components/DashBoard/UniversityWebsite/all-news/all-news.component';
import { SKAllCourcesComponent } from './Components/DashBoard/SkillsDevelopment/skall-cources/skall-cources.component';
import { SKAddCourseComponent } from './Components/DashBoard/SkillsDevelopment/skadd-course/skadd-course.component';
import { DashBoardComponent } from './Components/DashBoard/dash-board/dash-board.component';
import { AdminLoginComponent } from './Components/AdminAuthentication/admin-login/admin-login.component';
import { SideBarComponent } from './Components/AdminAuthentication/Shared/side-bar/side-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Services/auth-grad.service';
import { RegsitedStudentsComponent } from './Components/DashBoard/MilitryEducation/regsited-students/regsited-students.component';
import { AllMilitaryEducationNewsComponent } from './Components/DashBoard/MilitryEducation/all-military-education-news/all-military-education-news.component';
import { AddMilitaryNewComponent } from './Components/DashBoard/MilitryEducation/add-military-new/add-military-new.component';
import { AddMilitaryCourseComponent } from './Components/DashBoard/MilitryEducation/add-military-course/add-military-course.component';

const routes: Routes = [
{path:'CrpLogin' , component: AdminLoginComponent} ,
{path:'DashBoard' , component : DashBoardComponent ,  canActivate: [AuthGuard],
     children : [
        //for University News
        {
          path : 'UnivrsityNews' ,

          children : [
           {path :'ShowAllNews' , component :  AllNewsComponent},
           {path :'AddNew' , component :  AddNewComponent},

         ]
        } ,
       //for Skills Development
       {
         path : 'SkillsDevelopment' ,

         children : [
          {path :'AddCourse' , component :  SKAddCourseComponent},
          {path :'AllCourses' , component :  SKAllCourcesComponent} ,
          {path :'AddTrainee' , component :  AddTraineeComponent},
          {path :'AllTrainees' , component :  AllTraineeComponent}
        ]
       } ,

         //for Militry
         {
          path : 'MilitryEducation' ,
           children : [
             {path :'RegistedStudents' , component :  RegsitedStudentsComponent} ,
             {path :'AllMilitaryNews' , component :  AllMilitaryEducationNewsComponent},
             {path :'AddMilitaryNews' , component :  AddMilitaryNewComponent} ,
             {path :'AddMilitaryCourse' , component :  AddMilitaryCourseComponent} ,
             {path :'GetMilitaryCourses' , component :  ShowMilitaryCoursesComponent} ,
             {path :'ShowMilitaryCourseStudents/:id' , component :  ShowMilitaryCourseStudentsComponent},
             {path : 'ShowMilitaryCourseLectures/:id' , component:ShowMilitaryCourseLectureComponent},
             {path : 'ExportMilitaryCourseLectures/:id' , component:ExportRegistedStudentPDFComponent},
            ]
        }
     ] },
{path: '',  component:AdminLoginComponent} ,
{
  path: '**',
component:AdminLoginComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
