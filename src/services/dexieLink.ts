import Dexie from "dexie";
import { Comic } from "../models/comicClass";

export class ComicsDB extends Dexie {
  comics: Dexie.Table<Comic, number>;

  constructor() {
    super("ComicsDB");
    this.version(1).stores({
      comics: "++id,path,serie,numero,volume,year,writer,penciller,inker,colorist,letterer,coverArtist,editor,publisher,characters,teams,locations,seriesGroup,manga,format", lists: "++id, listName"
    });
    this.comics.mapToClass(Comic);
  }

  getAllComics(): Dexie.Promise<Comic[][]> {
    return Dexie.Promise.all( this.comics.toArray() );
  }
}
