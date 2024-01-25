import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup } from "@angular/forms";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  form: FormGroup;

  constructor(
    private heroService: HeroService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: [""],
      strength: [""],
      speed: [""],
      age: [""],
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(hero: Hero): void {
    // console.log(hero);
    const name = hero.name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
