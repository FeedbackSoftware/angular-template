import { NgModule } from '@angular/core';
import { AuthGuard } from './core/guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   canActivate: [AuthGuard], // Uncomment to activate user login guard
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
