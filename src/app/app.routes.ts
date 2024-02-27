import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacanciesPageComponent } from './vacancies-page/vacancies-page.component';

export const routes: Routes = [
  { path: '', component: VacanciesPageComponent }, // Установка компонента для главной страницы
  // Другие маршруты...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
