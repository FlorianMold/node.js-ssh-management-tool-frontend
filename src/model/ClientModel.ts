export class ClientModel {
    private _id: number;
    private _host: string;
    private _username: string;

    constructor(id: number, host: string, username: string) {
        this._id = id;
        this._host = host;
        this._username = username;
    }

    get host(): string {
        return this._host;
    }

    set host(value: string) {
        this._host = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    toString(): string {
        return `${this.id} ${this.host} ${this.username}`
    }
}