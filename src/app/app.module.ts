import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BlockComponent } from "./block/block.component";
import { UserProfileComponent } from './user-profile/user-profile.component'; // <-- NgModel lives here // A AJOUTER

import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component'; 

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserProfileComponent,
    DirectivesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule //A AJOUTER
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
