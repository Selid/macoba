import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { NgxElectronModule } from "ngx-electron";

import { AppComponent, HeadComponent, ComicShelfComponent }  from "./component/index";

import { ComicsDB } from "./services/dexieLink";

@NgModule({
  imports:      [ BrowserModule, NgxElectronModule ],
  declarations: [ AppComponent, HeadComponent, ComicShelfComponent ],
  providers:    [ ComicsDB ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
