import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var config = {
      apiKey: "AIzaSyCC9BvoQX2WJ-t9_0yP9OqVZeDOo97LyTI",
      authDomain: "posts-f5393.firebaseapp.com",
      databaseURL: "https://posts-f5393.firebaseio.com",
      projectId: "posts-f5393",
      storageBucket: "posts-f5393.appspot.com",
      messagingSenderId: "719891388662"
    };
    firebase.initializeApp(config);
  }
  
}
