import { Injectable } from '@angular/core';
import { Vacancy } from '../models/vacancy.model';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  constructor() { }

  getVacancies(): Vacancy[] {
    // Здесь должен быть HTTP-запрос, но для примера просто возвращаем массив
    return [
      new Vacancy(1, 'Frontend Developer', 'Описание вакансии...', 100000),
      new Vacancy(2, 'Backend Developer', 'Описание вакансии...', 120000),
      // Добавьте больше вакансий по аналогии
    ];
  }
}