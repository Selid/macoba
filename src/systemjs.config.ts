/** Type declaration for ambient System. */
declare var System: any;

/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
System.config({
    paths: {
        // paths serve as alias
        "npm:": "../node_modules/"
    },
    // map tells the System loader where to look for things
    map: {
        // our app is within the app folder
        app: "",
        // angular bundles
        "@angular/common": "npm:@angular/common/bundles/common.umd.js",
        "@angular/compiler": "npm:@angular/compiler/bundles/compiler.umd.js",
        "@angular/core": "npm:@angular/core/bundles/core.umd.js",
        "@angular/platform-browser": "npm:@angular/platform-browser/bundles/platform-browser.umd.js",
        "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
        "@angular/http": "npm:@angular/http/bundles/http.umd.js",
        "@angular/material": "npm:@angular/material/bundles/material.umd.js",
        // other libraries
        "adm-zip": "npm:adm-zip/adm-zip.js",
        "dexie": "npm:dexie/dist/dexie.js",
        "ngx-electron": "npm:ngx-electron/bundles/core.umd.js",
        "rxjs": "npm:rxjs",
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
        app: {
            main: "main.app.js",
            defaultExtension: "js"
        },
        dexie: {
          format: "amd"
        },
        rxjs: {
            defaultExtension: "js"
        }
    }
});
