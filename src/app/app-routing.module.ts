import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
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
