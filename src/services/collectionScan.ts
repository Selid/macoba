import AdmZip from "adm-zip";
import { ElectronService } from "ngx-electron";
import { xml2js } from "xml2js";

import { Comic } from "../models/comicClass";


export class CollectionScan {

    private electronFs;

    constructor(private _electronService: ElectronService, private admZip: AdmZip) {
        const remote = this._electronService.remote;
        const electronFs = remote.require("fs");
        const nativeImage = this._electronService.nativeImage;
    }

    public folderScan(myDir) {
        let promises = [];
        let listComics = this.electronFs.readdir(myDir).forEach(
            (filePath: string) => {
              if (filePath.indexOf(".cbz")) {
                promises.push(this.scanComic(myDir, filePath))
              } }
        );
        let nbComics = promises.length;
    }

    private scanComic(myDir, file): Promise<Comic> {
        return new Promise(
            (resolve, reject) => {
              let parser = new xml2js.Parser();
              let path: string = myDir + "/" + file;
              let admZip = new AdmZip;
              let cover: NativeImage;
            }
        )
    }
}
