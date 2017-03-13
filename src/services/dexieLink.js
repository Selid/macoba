"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dexie_1 = require("dexie");
const comicClass_1 = require("../models/comicClass");
class ComicsDB extends dexie_1.default {
    constructor() {
        super("ComicsDB");
        this.version(1).stores({
            comics: "++id,path,serie,numero,volume,year,writer,penciller,inker,colorist,letterer,coverArtist,editor,publisher,characters,teams,locations,seriesGroup,manga,format", lists: "++id, listName"
        });
        this.comics.mapToClass(comicClass_1.Comic);
    }
    getAllComics() {
        return dexie_1.default.Promise.all(this.comics.toArray());
    }
}
exports.ComicsDB = ComicsDB;
//# sourceMappingURL=dexieLink.js.map