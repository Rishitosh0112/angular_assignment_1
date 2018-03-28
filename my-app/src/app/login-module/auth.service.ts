import {Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class AuthService {
  token: string;
  public user: Observable<firebase.User>;
    constructor(private afAuth: AngularFireAuth, private router: Router) {
      this.user = afAuth.authState;
      console.log('afAuth--->', afAuth);
    }
    loginWithEmail(email, password): Observable<any> {
      console.log('afAuth--->', this.afAuth.authState);
       return Observable.fromPromise(
         this.afAuth.auth.signInWithEmailAndPassword(email, password)
       );
    }

    isAuthenticated(): Observable<boolean> {
      return this.user.map(user => user && user.uid !== undefined);
    }
    userAuthenticated(): Observable<any> {
      return this.user.map(user => user);
    }

    logout() {
      this.afAuth.auth.signOut();
      this.router.navigate(['/login']);
    }
    // getToken() {
    //    firebase.auth().currentUser.getToken().then(
    //        (token: string) => {
    //            console.log('token ----->', token);
    //            this.token = token;
    //        });
    // }
  }
