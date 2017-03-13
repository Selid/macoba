import { Component } from "@angular/core";
import { ComicsDB } from "../../services/dexieLink";
import { Comic } from "../../models/comicClass";

@Component({
  moduleId: module.id,
  selector: "comic-shelf",
  templateUrl: "comicShelf.component.html",
  styleUrls: ["comicShelf.component.css"]
})

export class ComicShelfComponent {

    private comics: Comic[][];

    constructor(private comicsDb: ComicsDB) {
      comicsDb.getAllComics().then( (x) => this.comics = x);
    }
}
