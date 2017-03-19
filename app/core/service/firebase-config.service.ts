import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
require('firebase/database');

import { FIREBASE_CONFIG } from '../constant/constants';

@Injectable()
export class FirebaseConfigService {

  database: firebase.database.Database;
  
  constructor() {
    this.configureApp();
  }

  configureApp() {
    firebase.initializeApp(FIREBASE_CONFIG);
    this.configureDatabase();
  }

  configureDatabase() {
    this.database = firebase.database();
  }
}