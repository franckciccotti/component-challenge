import { Component } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  user: User = {
    name : 'Audiard',
    firstName : 'Michel',
    age : 103,
    quote : "C'est pas parce qu'on a rien à dire qu'il faut fermer sa gueule.",
    photo : 'https://doodleipsum.com/700x394/avatar-2?bg=7463D9&i=8e9f9f245187ea1f661a23629c361c23'
  };

  hide: boolean = false;

  // ---METHODE 1---
  // changerEtat(){
  //   if(this.hide === false ) {
  //     this.hide = true;
  //   } else if(this.hide === true ) {
  //     this.hide = false;
  //   }
  // } 

  // ---METHODE 2---
  changerEtat(){
    this.hide = !this.hide;
  }

}

