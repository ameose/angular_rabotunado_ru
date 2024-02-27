import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../services/vacancy.service';
import { Vacancy } from '../models/vacancy.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancies-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancies-page.component.html',
  styleUrls: ['./vacancies-page.component.scss']
})
export class VacanciesPageComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.vacancies = this.vacancyService.getVacancies();
  }
}
