import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'develop-rules',
        pathMatch: 'full'
      },
      {
        path: 'develop-rules',
        loadChildren: './content/develop-rules/develop-rules.module#DevelopRulesModule'
      },
      {
        path: 'develop-process',
        loadChildren: './content/develop-process/develop-process.module#DevelopProcessModule'
      },
      {
        path: 'learning-sharing',
        loadChildren: './content/learning-sharing/learning-sharing.module#LearningSharingModule'
      },
      {
        path: 'team-mien',
        loadChildren: './content/team-mien/team-mien.module#TeamMienModule'
      }
    ]
  },
  {
    path: 'recruiting',
    loadChildren: './content/recruiting/recruiting.module#RecruitingModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
