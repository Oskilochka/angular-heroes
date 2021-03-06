import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from './heroes/Hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  // tslint:disable-next-line:typedef
  createDb() {
    const heroes = [
      {id: 11, name: 'Superman'},
      {id: 12, name: 'Batman'},
      {id: 13, name: 'Hulk'},
      {id: 14, name: 'Dr Strange'},
      {id: 15, name: 'Capitan America'},
      {id: 16, name: 'Tor'},
      {id: 17, name: 'Spider Man'},
      {id: 18, name: 'Iron Man'},
      {id: 19, name: 'Ghost Rider'},
      {id: 20, name: 'Black Panther'},
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
