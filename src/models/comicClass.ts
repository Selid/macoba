export class Comic {
    private path: string;
    private serie: string;
    private num: string;
    private volume: number;
    private summary: string;
    private notes: string;
    private year: number;
    private month: number;
    private writer: string;
    private penciller: string;
    private inker: string;
    private colorist: string;
    private letterer: string;
    private coverArtist: string;
    private editor: string;
    private publisher: string;
    private characters: string[];
    private teams: string[];
    private locations: string[];

    constructor(path: string, serie: string, num: string, volume: number, summary: string, notes: string, year: number, month: number, writer: string, penciller: string, inker: string, colorist: string, letterer: string, coverArtist: string, editor: string, publisher: string, characters: string, teams: string, locations: string) {
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

    private stringToArray(value: string): string[] {
        return value.split(",");
    }

}
