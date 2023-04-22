import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'log', loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path: 'home', loadChildren: ()=>import('./chat/chat.module').then(m=>m.ChatModule)},
  {path: '**', redirectTo: 'log'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
