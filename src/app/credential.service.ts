import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {
  readonly userKey = 'USER_KEY';

  constructor() {
  }

  saveUser(nickname: string) {
    localStorage.setItem(this.userKey, JSON.stringify({nickname}));
  }

  getUser() {
    const user = localStorage.getItem(this.userKey);
    if (user) {
      return JSON.parse(user);
    } else {
      return undefined;
    }
  }

  savePoints(points: number) {
    const user = this.getUser();
    if (user) {
      user.points = points;
    }

    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getPoints() {
    const user = this.getUser();
    if (user) {
      return user.points || 0;
    } else {
      return -1;
    }
  }

  removeUser() {
    localStorage.removeItem(this.userKey);
  }
}
