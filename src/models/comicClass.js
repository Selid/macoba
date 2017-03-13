"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Comic {
    constructor(path, serie, num, volume, summary, notes, year, month, writer, penciller, inker, colorist, letterer, coverArtist, editor, publisher, characters, teams, locations) {
        this.serie = serie;
        this.num = num;
        this.volume = volume;
        this.summary = summary;
        this.notes = notes;
        this.year = year;
        this.month = month;
        this.writer = writer;
        this.penciller = penciller;
        this.inker = inker;
        this.colorist = colorist;
        this.letterer = letterer;
        this.coverArtist = coverArtist;
        this.editor = editor;
        this.publisher = publisher;
        this.characters = this.stringToArray(characters);
        this.teams = this.stringToArray(teams);
        this.locations = this.stringToArray(locations);
        this.path = path;
    }
    stringToArray(value) {
        return value.split(",");
    }
}
exports.Comic = Comic;
//# sourceMappingURL=comicClass.js.map