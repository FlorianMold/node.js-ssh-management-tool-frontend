export class HttpResponse {
    private _payload: any;

    constructor(response: any) {
        this._payload = response.data;
    }

    get payload(): any {
        return this._payload;
    }

    set payload(value: any) {
        this._payload = value;
    }
}