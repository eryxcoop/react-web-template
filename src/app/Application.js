import MyAppApiClient from './communication/MyAppApiClient';
import { RemoteRequester } from '@eryxcoop/appyx-comm';
import BearerAuthorizationManager from './BearerAuthorizationManager';
import { SessionStore } from './SessionStore';
import { LocalStorage } from './LocalStorage';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, onIdTokenChanged, signInWithPopup } from '@firebase/auth';
import { initializeApp } from 'firebase/app';
import { action, computed, makeObservable, observable } from 'mobx';

export default class Application {
  constructor() {
    this._sessionStore = new SessionStore(new LocalStorage())
    this._session = undefined;
    this._myAppApiClient = this._setUpApiClient();
    this._firebaseAuthentication = this._initializeFirebase()
    this._loaded = false;


    makeObservable(this, {
      _loaded: observable,
      _session: observable,
      _updateUserToken: action,
      _finishedLoading: action,
      session: computed,
      user: computed,
      loaded: computed,
      userIsLoggedIn: computed,
      load: action,
    });
  }

  async load() {
    this._session = await this._sessionStore.load();
    onAuthStateChanged(this._firebaseAuthentication, async (firebaseUser) => {
      if (firebaseUser) {
        await this._updateUserToken(firebaseUser);
      } else {
        await this.logOut();
      }
      this._finishedLoading();
    });
    onIdTokenChanged(this._firebaseAuthentication, async (firebaseUser) => {
      if (firebaseUser) {
        await this._updateUserToken(firebaseUser);
      }
    });
  }

  async logOut() {
    this._sessionStore.remove();
    this._session.close();
    this._firebaseAuthentication.signOut();
  }

  async logIn(onError) {
    this._session.loginUser({token: 'asdf', fullName: 'Usuario ejemplo'});
            this._sessionStore.store(this._session);
    // signInWithPopup(this._firebaseAuthentication, new GoogleAuthProvider()).then(async (result) => {
    //   result.user.getIdToken().then(async (token) => {
    //     const loginResponseHandler = new ApiResponseHandler({
    //       handlesSuccess: (response) => {
    //         this._session.loginUser({token: token, fullName: response.fullName()});
    //         this._sessionStore.store(this._session);
    //       }
    //     });
    //     this.apiClient().login(token, loginResponseHandler);
    //   });
    // }).catch((_) => {
    //   onError();
    // });
  }

  apiClient() {
    return this._myAppApiClient;
  }

  _setUpApiClient() {
    const requester = this._setUpRequester();
    return new MyAppApiClient(requester);
  }

  _setUpRequester() {
    /*        if (this._isUsingFakeApi()) {
                return new FakeRequester(fakeRequesterExpectedResponses());
            }*/
    const authorizationManager = new BearerAuthorizationManager(this);
    const remoteApiUrl = process.env.REACT_APP_API_URL;
    return new RemoteRequester(remoteApiUrl, authorizationManager);
  }

  _initializeFirebase() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    return getAuth(app);
  }

  async _updateUserToken(firebaseUser) {
    const token = await firebaseUser.getIdToken();
    this._session.updateToken(token);
  }

  get user() {
    return this._session.user;
  }

  get session() {
    return this._session;
  }

  get userIsLoggedIn() {
    return this._session.isLoggedIn;
  }

  get loaded() {
    return this._loaded;
  }

  _finishedLoading() {
    this._loaded = true;
  }
}