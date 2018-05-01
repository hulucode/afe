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
        path: 'daily-affairs',
        loadChildren: './content/daily-affairs/daily-affairs.module#DailyAffairsModule'
      },
      {
        path: 'weekly-fe',
        loadChildren: './content/weekly-fe/weekly-fe.module#WeeklyFeModule'
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
  },
  {
    path: 'team-building',
    loadChildren: './content/team-building/team-building.module#TeamBuildingModule'
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
