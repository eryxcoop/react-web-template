import {User} from "./users/User";
import {AnonymousUser} from "./users/AnonymousUser";
import { action, computed, makeObservable, observable } from 'mobx';

export class Session {
    constructor(user = null, token = null) {
        this._user = user || new AnonymousUser();
        this._token = token

        makeObservable(this, {
            _user: observable,
            _token: observable,
            user: computed,
            token: computed,
            isLoggedIn: computed,
            loginUser: action,
            updateToken: action,
            close: action,
        })
    }

    loginUser({ fullName, token }) {
        this._user = new User({fullName});
        this._token = token;
        return this._user;
    }

    get user() {
        return this._user
    }

    get token() {
        return this._token
    }

    get isLoggedIn() {
        return this._token !== null && !this._user.isAnonymous();
    }

    updateToken(token) {
        this._token = token;
    }

    close() {
        this._token = null;
        this._user = new AnonymousUser();
    }
}