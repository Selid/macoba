"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adm_zip_1 = require("adm-zip");
const xml2js_1 = require("xml2js");
class CollectionScan {
    constructor(_electronService, admZip) {
        this._electronService = _electronService;
        this.admZip = admZip;
        const remote = this._electronService.remote;
        const electronFs = remote.require("fs");
        const nativeImage = this._electronService.nativeImage;
    }
    folderScan(myDir) {
        let promises = [];
        let listComics = this.electronFs.readdir(myDir).forEach((filePath) => {
            if (filePath.indexOf(".cbz")) {
                promises.push(this.scanComic(myDir, filePath));
            }
        });
        let nbComics = promises.length;
    }
    scanComic(myDir, file) {
        return new Promise((resolve, reject) => {
            let parser = new xml2js_1.xml2js.Parser();
            let path = myDir + "/" + file;
            let admZip = new adm_zip_1.default;
            let cover;
        });
    }
}
exports.CollectionScan = CollectionScan;
//# sourceMappingURL=collectionScan.js.map