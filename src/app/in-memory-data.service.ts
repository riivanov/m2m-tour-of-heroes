import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      { id: 12, name: "Dr. Nice", age: 1, speed: 2, strength: 3 },
      { id: 13, name: "Bombasto", age: 4, speed: 5, strength: 6 },
      { id: 14, name: "Celeritas", age: 7, speed: 8, strength: 9 },
      { id: 15, name: "Magneta", age: 10, speed: 11, strength: 12 },
      { id: 16, name: "RubberMan", age: 13, speed: 14, strength: 15 },
      { id: 17, name: "Dynama", age: 16, speed: 17, strength: 18 },
      { id: 18, name: "Dr. IQ", age: 19, speed: 20, strength: 21 },
      { id: 19, name: "Magma", age: 22, speed: 22, strength: 23 },
      { id: 20, name: "Tornado", age: 24, speed: 25, strength: 26 },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
