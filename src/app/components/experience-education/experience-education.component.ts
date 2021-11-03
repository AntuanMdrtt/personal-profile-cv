import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

interface ExperiencePlaces {
  icon: PrimeIcons;
  lapse: string;
  place: string;
  company: string;
  occupation: string;
  activities: string[];
  image?: string;
}

interface UdemyItem {
  title: string;
  image: string;
}

@Component({
  selector: 'app-experience-education',
  templateUrl: './experience-education.component.html',
  styles: [
    `
    .custom-marker {
      display: flex;
      width: 2rem;
      height: 2rem;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      border-radius: 50%;
      z-index: 1;
    }
    `
  ]
})
export class ExperienceEducationComponent {
  workPlaces: ExperiencePlaces[] = [
    {
      icon: PrimeIcons.CHECK_CIRCLE, lapse: '2020 - Actualmente', place: 'Naucalpan, Edo. de México',
      company: 'Sistemas MIG (IcaavWeb)', occupation: 'Web Developer',
      image: 'sistemasmig.jpeg', activities: [
        'Plataforma Web (AngularJS, jQuery, PHP)', 'Consumo de API Rest (AOI)'
      ]
    },
    {
      icon: PrimeIcons.CHECK_CIRCLE, lapse: '2019', place: 'Polanco, CDMX',
      company: 'Toole Home Renovation', occupation: 'FullStack Developer',
      image: 'toole.jpg', activities: [
        'Plataformas Web (jQuery, PHP, Angular, Angular Material)', 'API Rest (PHP, Slim4, MySQL)', 'IOS App (Swift)'
      ]
    },
    {
      icon: PrimeIcons.CHECK_CIRCLE, lapse: '2018 - 2019', place: 'Cholula, Puebla',
      company: 'Archimex', occupation: 'FullStack Developer',
      image: 'archimex.jpg', activities: [
        'Plataforma Web (PHP, Postgrees)', 'Análisis', 'OEE'
      ]
    },
    {
      icon: PrimeIcons.CHECK_CIRCLE, lapse: '2018', place: 'Zacapoaxtla, Puebla',
      company: 'ITS Zacapoaxtla', occupation: 'FullStack Developer',
      image: 'itszacapoaxtla.jpg', activities: [
        '(Proyecto) Plataforma ERP (JS, PHP, MySQL)',
      ]
    },
  ];

  udemyList: UdemyItem[] = [
    { title: 'Angular: De cero a experto - (Edición 2021)', image: 'angular-2021.jpg' },
    { title: 'REDUX en Angular con NGRX: Desde las bases hasta la práctica', image: 'redux.jpg' },
    { title: 'Angular: De cero a experto - (Edición 2021)', image: 'angular-2021.jpg' },
    { title: 'REDUX en Angular con NGRX: Desde las bases hasta la práctica', image: 'redux.jpg' },
    { title: 'Angular: De cero a experto - (Edición 2021)', image: 'angular-2021.jpg' },
    { title: 'REDUX en Angular con NGRX: Desde las bases hasta la práctica', image: 'redux.jpg' },
  ];
}
