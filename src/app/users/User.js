export class User {

    constructor({fullName}) {
        this._fullName = fullName;
    }

    fullName() {
        return this._fullName;
    }

    isAnonymous(){
        return false;
    }
}