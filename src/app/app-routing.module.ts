import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes: Router = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
