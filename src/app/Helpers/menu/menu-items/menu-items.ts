import { Injectable } from '@angular/core';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  mainrole : string;
  subrole : string;
  children?: ChildrenItems[];
}

const MENUITEMS = [
      {
      state: 'SkillsDevelopment',
      name: 'Skills Development',
      type: 'sub',
      icon: 'library_books',
      mainrole : 'admin' ,
      subrole :'skilldevelop' ,
      children: [
        {state: 'AllCourses', name: 'All Courses',   type: 'link'   , icon : 'library_books'},
        {state: 'AddCourse', name: 'Add Course',   type: 'link' , icon : 'library_add' },
        {state: 'AddTrainee', name: 'Add New Trainee',   type: 'link' , icon : 'library_add' },
        {state: 'AllTrainees', name: 'All Trainees',   type: 'link' , icon : 'library_add' },

      ]
      } ,
      {
        state: 'UnivrsityNews',
        name: 'University News',
        type: 'sub',
        icon: 'library_books',
        mainrole : 'admin' ,
        subrole :'uniwebsiteadmin' ,
        children: [
          {state: 'AddNew', name: 'Add New',   type: 'link'   , icon : 'library_books'},
          {state: 'ShowAllNews', name: 'Show All News',   type: 'link' , icon : 'library_add' },


        ]
      } ,
      {
          state: 'MilitryEducation',
          name: 'MilitryEducation',
          type: 'sub',
          icon: 'library_books',
          mainrole : 'admin' ,
          subrole :'militry' ,
          children: [
            {state: 'RegistedStudents', name: 'All Students',   type: 'link'   , icon : 'library_books'},
            {state: 'AllMilitaryNews', name: 'Show All Military News',   type: 'link' , icon : 'library_add' },
            {state: 'AddMilitaryNews', name: 'Add New',   type: 'link' , icon : 'library_add' },
            {state: 'GetMilitaryCourses', name: 'All Courses',   type: 'link' , icon : 'library_add' },
            {state: 'AddMilitaryCourse', name: 'Add Course',   type: 'link' , icon : 'library_add' },

          ]
      } ,
      {
          state: 'TICO',
          name: 'TICO',
          type: 'sub',
          icon: 'library_books',
          mainrole : 'admin' ,
          subrole :'tico' ,
          children: [
              {state: 'addTicoNews', name: 'tico Add News',   type: 'link' , icon : 'library_add' },
              {state: 'showTicoNews', name: 'tico Show All News',   type: 'link' , icon : 'library_add' }         ]
      } ,
      {

      state: 'profile',
      name: 'Profile',
      type: 'link',
      mainrole : 'admin' ,
      subrole :'all' ,
      icon: 'person',

      },
      {
      state: 'logout',
      name: 'Logout',
      type: 'button',
      mainrole : 'admin' ,
      subrole :'all' ,
      icon: 'exit_to_app'

      }
]

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
   return MENUITEMS;
  }

}
