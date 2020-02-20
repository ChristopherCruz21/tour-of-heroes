import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Pepper' },
      { id: 12, name: 'Platano' },
      { id: 13, name: 'Lechuga' },
      { id: 14, name: 'Azuca' },
      { id: 15, name: 'Hormiga Mala' },
      { id: 16, name: 'JK' },
      { id: 17, name: 'Not U' },
      { id: 18, name: 'AL;KDSFJDSFASD' },
      { id: 19, name: 'Chris' },
      { id: 20, name: 'Chreisasdf' },
    ];
    return {heroes};
  }
  
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the higest 
  // hero id + 1.
  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
